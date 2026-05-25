# ========================================
# Optimized Multi-Stage Dockerfile
# Astro Static Site
# ========================================

# Pin versions for reproducibility
ARG NODE_VERSION=22.13.1
ARG PNPM_VERSION=11
ARG NGINX_VERSION=1.27-alpine

# ========================================
# Base Stage
# ========================================
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
WORKDIR /app

# Install pnpm globally with pinned version
RUN npm install -g pnpm@${PNPM_VERSION}

# ========================================
# Dependencies Stage - Install packages
# ========================================
FROM base AS deps

# Copy package files and lockfile
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies with cache mount for faster rebuilds
# --frozen-lockfile ensures reproducible builds
# --prefer-offline reduces network requests
# --ignore-scripts skips Sharp native compilation (only needed for local image scripts)
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --prefer-offline --ignore-scripts

# ========================================
# Build Stage - Compile Astro site
# ========================================
FROM deps AS builder

# Copy all source files (respects .dockerignore)
COPY . .

# Build the Astro site — cache mount persists Vite/Rollup intermediate outputs
RUN --mount=type=cache,id=astro-assets,target=/app/node_modules/.astro \
    pnpm run build

# Verify build output exists
RUN ls -la /app/dist

# ========================================
# Production Stage - Nginx serving
# ========================================
FROM nginx:${NGINX_VERSION} AS production

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check to verify nginx is serving content
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

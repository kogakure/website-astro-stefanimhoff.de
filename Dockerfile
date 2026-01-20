# Stage 1: Build the application
FROM --platform=linux/amd64 node:lts AS builder

RUN npm install -g pnpm@9

WORKDIR /app

COPY package*.json pnpm-*.yaml ./

RUN pnpm install

# Force install sharp with Linux x64 binaries
RUN pnpm remove sharp && pnpm add sharp

COPY . .

RUN pnpm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Remove the default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

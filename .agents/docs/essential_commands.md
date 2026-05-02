## Essential Commands

### Development

```sh
pnpm dev            # Start dev server
pnpm build          # Build for production
pnpm preview        # Build + preview production build
```

### Content Generation

```sh
pnpm plop           # Create new writing post (interactive)
pnpm images         # Generate all images (OG + thumbnails)
pnpm icons:generate # Convert SVG icons to components
```

### Code Quality

```sh
npx prettier --write <files>
npx eslint --fix <files>
npx lint-staged     # Run pre-commit hooks manually
```

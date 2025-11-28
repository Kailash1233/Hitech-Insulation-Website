# Deployment Guide

This guide covers deploying the Hitech Insulation website to various platforms.

## Prerequisites

- Node.js 20+ installed
- Git repository set up
- Domain name configured (optional)

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the creators of Next.js and offers the best integration.

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site will be live in minutes!

**Environment Variables:**
- No environment variables required for basic deployment
- Add `NEXT_PUBLIC_SITE_URL` if you need to override the default

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### 2. Netlify

**Steps:**
1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

**Note:** For static export, uncomment `output: 'export'` in `next.config.js`

### 3. Static Export (Any Hosting)

For static hosting (GitHub Pages, AWS S3, etc.):

1. **Update `next.config.js`:**
   ```js
   const nextConfig = {
     output: 'export',
     // ... rest of config
   };
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy the `out` folder** to your static host

### 4. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t hitechinsulation-website .
docker run -p 3000:3000 hitechinsulation-website
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify SEO metadata (use Google Search Console)
- [ ] Check sitemap.xml accessibility
- [ ] Test robots.txt
- [ ] Verify image loading
- [ ] Check performance (Lighthouse)
- [ ] Test all internal links
- [ ] Verify analytics (if added)

## Performance Optimization

1. **Enable Image CDN** (if using Vercel/Netlify)
2. **Enable Compression** (usually automatic)
3. **Monitor with Vercel Analytics** or similar
4. **Set up caching headers** (already configured)

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 20+)

### Image Issues
- Ensure all images are in `public/` folder
- Check image paths are correct
- Verify Next.js Image component usage

### SEO Issues
- Verify metadata in page source
- Check sitemap.xml is accessible
- Test with Google Search Console

## Support

For deployment issues, check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- Project README.md


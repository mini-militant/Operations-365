# Deployment Guide for Operations@365

This guide will help you deploy the Operations@365 website to Vercel.

## Prerequisites

- Node.js 18+ installed on your machine
- A GitHub account (recommended but optional)
- A Vercel account (free tier is sufficient)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/operations365.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration
5. Click "Deploy"
6. Wait for deployment to complete (usually 2-3 minutes)
7. Your site will be live at `https://your-project-name.vercel.app`

#### Step 3: Configure Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., operations365.com)
4. Follow Vercel's DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

#### Step 4: Follow CLI Prompts

The CLI will ask:
- Set up and deploy? → Yes
- Which scope? → Your account
- Link to existing project? → No
- Project name? → operations-365
- Directory? → ./
- Override settings? → No

## Post-Deployment Configuration

### 1. Update URLs

After deployment, update these files with your actual domain:

**app/sitemap.ts**
```typescript
const baseUrl = 'https://your-actual-domain.com'
```

**app/robots.ts**
```typescript
sitemap: 'https://your-actual-domain.com/sitemap.xml'
```

**components/JsonLd.tsx**
```typescript
url: "https://your-actual-domain.com"
```

### 2. Set Up Analytics (Optional)

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables:
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_ANALYTICS` with your ID
4. Redeploy to apply changes

### 3. Configure Contact Form Backend (Optional)

The current form is front-end only. To make it functional:

**Option A: Use Vercel Serverless Functions**

Create `api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Send email using SendGrid, Mailgun, etc.
  // Or save to database
  
  return NextResponse.json({ success: true });
}
```

**Option B: Use Third-Party Services**
- Formspree: https://formspree.io
- Web3Forms: https://web3forms.com
- Getform: https://getform.io

### 4. SEO Optimization After Deployment

1. **Submit to Google Search Console**
   - Verify your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Submit to Bing Webmaster Tools**
   - Add and verify your site
   - Submit sitemap

3. **Set Up Google My Business** (if applicable)

4. **Add Analytics Tracking**
   - Google Analytics
   - Hotjar for heatmaps (optional)
   - Mixpanel for user analytics (optional)

## Environment Variables

Set these in Vercel dashboard (optional):

```env
NEXT_PUBLIC_API_URL=your-backend-api-url
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
CONTACT_EMAIL=contact@operations365.com
SENDGRID_API_KEY=your-sendgrid-key (if using SendGrid)
```

## Performance Monitoring

### Vercel Analytics

Enable in project settings for:
- Real User Monitoring (RUM)
- Web Vitals tracking
- Traffic analytics

### Lighthouse Checks

Run regular Lighthouse audits:
```bash
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

### Expected Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Continuous Deployment

With GitHub integration:
1. Push changes to main branch
2. Vercel automatically deploys
3. Preview deployments for pull requests
4. Rollback to previous deployment if needed

## Troubleshooting

### Build Fails

Check:
- Node version (should be 18+)
- All dependencies installed
- No TypeScript errors
- Run `npm run build` locally first

### 404 Errors

- Ensure all routes are properly configured
- Check `next.config.mjs` settings
- Verify file naming conventions

### Slow Performance

- Enable Vercel's Image Optimization
- Check bundle size: `npm run build`
- Enable compression in `next.config.mjs`
- Use Vercel Analytics to identify bottlenecks

## Security Best Practices

1. ✅ HTTPS enabled by default on Vercel
2. ✅ Security headers configured in `vercel.json`
3. ✅ No sensitive data in frontend code
4. ✅ Use environment variables for API keys
5. ✅ Regular dependency updates: `npm audit`

## Backup and Version Control

- Always use Git for version control
- Tag releases: `git tag -a v1.0.0 -m "Initial release"`
- Keep main branch production-ready
- Use feature branches for development

## Cost Estimation

**Vercel Free Tier includes:**
- 100 GB bandwidth/month
- Unlimited websites
- Automatic HTTPS
- Analytics (basic)
- Serverless Functions

**Upgrade needed if:**
- Traffic exceeds 100 GB/month
- Need advanced analytics
- Require team collaboration features

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

## Post-Launch Checklist

- [ ] Domain configured and live
- [ ] SSL certificate active
- [ ] Sitemap submitted to search engines
- [ ] Google Analytics set up
- [ ] Contact form tested and working
- [ ] Social media links updated
- [ ] All images optimized
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] Lighthouse audit passed
- [ ] Backup and recovery plan in place

---

**Congratulations! Your Operations@365 website is now live! 🚀**

For any deployment issues, refer to the [Vercel Documentation](https://vercel.com/docs) or contact support.


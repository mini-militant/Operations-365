# Quick Start Guide - Operations@365 Website

Get your website running in 3 simple steps!

## 🚀 Quick Setup

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, React, TailwindCSS, TypeScript, etc.)

### Step 2: Run Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

**That's it! Your website is now running locally! 🎉**

## 📝 What You Get

- ✅ Fully responsive website
- ✅ 10 complete sections (Hero, About, Services, Goals, etc.)
- ✅ SEO optimized with meta tags and structured data
- ✅ Contact form with validation
- ✅ Modern animations and transitions
- ✅ Mobile-first design
- ✅ Ready for Vercel deployment

## 🎨 Customization Quick Tips

### Update Company Name
Edit `components/Header.tsx` and `components/Footer.tsx`

### Change Colors
Edit `tailwind.config.ts` - Update the `colors` section

### Modify Content
Each section is in its own component file in `/components`:
- `Hero.tsx` - Main landing section
- `About.tsx` - About company
- `Services.tsx` - Service offerings
- `Team.tsx` - Team members
- `Footer.tsx` - Contact form

### Update SEO
Edit `app/layout.tsx` for meta tags
Edit `components/JsonLd.tsx` for structured data

## 🚀 Deploy to Vercel

### Method 1: Via GitHub (Recommended)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! Your site is live! 🎉

### Method 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🆘 Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
# Then run dev server again
npm run dev
```

### Module Not Found?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?
```bash
# Check TypeScript errors
npm run build
```

## 📚 Need More Help?

- See `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment guide
- Check [Next.js Docs](https://nextjs.org/docs)

## ✨ Features Overview

### Sections Included:
1. **Header** - Sticky navigation with logo
2. **Hero** - Eye-catching headline with CTAs
3. **About** - Mission and approach
4. **Services** - 6 service cards with keywords
5. **Goals** - 4 measurable outcomes with metrics
6. **Advantages** - In-house vs. Outsourced comparison
7. **Tools** - 8 technology tools showcase
8. **Differentiators** - 4 unique value propositions
9. **Team** - 4 team member profiles
10. **Footer** - Contact form + company info

### SEO Features:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Mobile responsive
- Fast performance

### Tech Stack:
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- React Icons
- Framer Motion

## 🎯 Next Steps

1. ✅ Customize content for your business
2. ✅ Add real team member photos/info
3. ✅ Update social media links
4. ✅ Configure contact form backend
5. ✅ Add Google Analytics
6. ✅ Deploy to Vercel
7. ✅ Set up custom domain
8. ✅ Submit sitemap to search engines

---

**Happy Building! 🚀**

For detailed instructions, see README.md and DEPLOYMENT.md


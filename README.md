# Operations@365 - Professional Website

A modern, SEO-optimized Next.js website showcasing Operations@365 as a trusted operations partner for businesses.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and TailwindCSS
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Performance Optimized**: Fast loading, optimized images, lazy loading
- **Accessibility**: ARIA labels, semantic HTML, and screen-reader support
- **Interactive Components**: Smooth animations and transitions
- **Contact Form**: Functional contact form ready for backend integration

## 📋 Sections

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Eye-catching headline with CTAs and statistics
3. **About** - Company mission and approach
4. **Services** - Comprehensive service offerings with keywords
5. **Goals** - Measurable outcomes and KPIs
6. **Advantages** - In-house vs. Outsourced comparison
7. **Tools** - Technology stack showcase
8. **Differentiators** - Unique value propositions
9. **Team** - Expert team members with social links
10. **Footer** - Contact form, quick links, and company info

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and deploy

### Environment Variables (Optional)

If you integrate a backend for the contact form:

```env
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

## 📊 SEO Implementation

### Included SEO Features:
- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Organization, Service, Website)
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Web manifest for PWA support
- ✅ Optimized images with alt tags
- ✅ Keyword-rich content
- ✅ Internal linking structure
- ✅ Mobile-responsive design
- ✅ Fast page load times

### Target Keywords:
- process outsourcing
- business operations management
- sales operations support
- KPI tracking dashboard
- resource allocation company India
- operational excellence
- process optimization

## 🎨 Customization

### Update Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your brand colors
  },
}
```

### Update Content

- **Company Info**: Edit components in `/components` directory
- **Team Members**: Update `/components/Team.tsx`
- **Services**: Modify `/components/Services.tsx`
- **Contact Details**: Change in `/components/Footer.tsx`

### Update Meta Tags

Edit `app/layout.tsx` for global SEO settings.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📈 Performance

The site is optimized for:
- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔒 Security

- HTTPS enforced on Vercel
- No sensitive data in frontend code
- Environment variables for API keys
- XSS protection via React

## 📞 Support

For questions or issues, contact:
- Email: contact@operations365.com
- Phone: +91 123 456 7890

## 📄 License

This is a sample/demo website for Operations@365.

---

**Built with ❤️ using Next.js and deployed on Vercel**


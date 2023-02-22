[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%xyruscode%2Fnextjs-portfolio)

# xyruscode.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Blog**: [Hashnode](https://hasnode.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) 
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `pages/feed.xml.tsx` - Automatically generated RSS feed.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/XyrusCode/nextjs-portfolio.git
cd portfolio
npm install
npm run dev
```

## Cloning / Forking

Please review the [license](https://github.com/XyrusCode/nextjs-portfolio/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).

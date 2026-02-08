# Strux - PVC & HDPE Pipe Exporter Website

A modern, SEO-optimized website for Strux, a professional PVC and HDPE pipe trading and export company.

## Features

- ✅ Fully responsive design
- ✅ Cross-browser compatible
- ✅ SEO optimized (meta tags, sitemap, robots.txt)
- ✅ Image carousels with Swiper.js
- ✅ Smooth animations with Framer Motion
- ✅ Contact form (ready for CRM integration)
- ✅ Blog section
- ✅ Customer testimonials/reviews
- ✅ Image gallery with carousels
- ✅ Google Maps integration placeholder
- ✅ Social media integration

## Brand Colors

- **Background**: White #FFFFFF
- **Header/Footer**: Navy Blue #0B3C5D
- **Headings**: Steel Blue #1F6AA5
- **Buttons**: Orange #F57C00
- **Text**: Dark Grey #333333

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Adding Images from Google Drive

1. Download images from the Google Drive folder: https://drive.google.com/drive/folders/1tY5JMDI_4FDRUK5K1QIR_oRJdj9pRNwS
2. Place pipe-related images in `public/images/products/`
3. Place gallery images in `public/images/gallery/`
4. Place blog images in `public/images/blog/`
5. Update image paths in components:
   - `src/components/ImageGallery.jsx` - Update galleryImages array
   - `src/components/Products.jsx` - Update product images
   - `src/components/Blog.jsx` - Update blog post images

## Components Structure

- **Header.jsx** - Navigation with dropdown menus
- **Hero.jsx** - Hero section with animated stats
- **About.jsx** - About Us section
- **Products.jsx** - Product showcase with carousel
- **Manufacturing.jsx** - Manufacturing & sourcing info
- **QualityControl.jsx** - Quality assurance section
- **Standards.jsx** - Standards & compliance
- **Packaging.jsx** - Export packaging & logistics
- **Markets.jsx** - Markets we serve
- **WhyUs.jsx** - Why choose us section
- **ImageGallery.jsx** - Image gallery with carousel
- **Testimonials.jsx** - Customer reviews carousel
- **Blog.jsx** - Blog posts section
- **Contact.jsx** - Contact form and information
- **Footer.jsx** - Footer with links and social media

## SEO Features

- Meta tags optimized for search engines
- Structured data ready
- XML sitemap (`public/sitemap.xml`)
- Robots.txt (`public/robots.txt`)
- Semantic HTML structure
- Optimized images with lazy loading

## CRM Integration

The contact form in `src/components/Contact.jsx` is ready for CRM integration. Update the `handleSubmit` function to connect to your CRM API.

## Google Maps Integration

To add Google Maps:
1. Get a Google Maps API key
2. Update the placeholder in `src/components/Contact.jsx`
3. Add the Google Maps script to `index.html`

## Social Media Links

Update social media links in `src/components/Footer.jsx` with your actual profiles.

## License

© 2026 Strux. All rights reserved.

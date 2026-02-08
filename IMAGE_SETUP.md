# Image Setup Guide for Strux Website

## Downloading Images from Google Drive

1. **Access the Google Drive folder**: https://drive.google.com/drive/folders/1tY5JMDI_4FDRUK5K1QIR_oRJdj9pRNwS

2. **Download all images** from the folder (IMG_0883.JPG, IMG_0884.JPG, etc.)

3. **Organize images** into the following folders:

### Folder Structure

```
public/
  images/
    gallery/          # Main gallery carousel images
    products/          # Product-specific images
    blog/              # Blog post featured images
```

## Image Placement Guide

### 1. Gallery Images (`public/images/gallery/`)
- Place pipe manufacturing images
- Place factory/industrial images
- Place export/packaging images
- Update `src/components/ImageGallery.jsx`:
  ```jsx
  const galleryImages = [
    { src: '/images/gallery/IMG_0883.JPG', alt: 'PVC Pipes Manufacturing' },
    { src: '/images/gallery/IMG_0884.JPG', alt: 'HDPE Pipes Production' },
    // ... add all your images
  ]
  ```

### 2. Product Images (`public/images/products/`)
- Place PVC pipe images
- Place HDPE pipe images
- Place uPVC pipe images
- Update `src/components/Products.jsx`:
  ```jsx
  {
    name: 'PVC Pipes',
    image: '/images/products/pvc-pipes.jpg',
    // ...
  }
  ```

### 3. Blog Images (`public/images/blog/`)
- Place blog post featured images
- Update `src/components/Blog.jsx`:
  ```jsx
  {
    title: 'Blog Post Title',
    image: '/images/blog/blog-post-1.jpg',
    // ...
  }
  ```

## Image Optimization Tips

1. **Resize images** before uploading:
   - Gallery images: Max 1920x1080px
   - Product images: Max 800x600px
   - Blog images: Max 1200x675px

2. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim
   - Squoosh (https://squoosh.app/)

3. **Use WebP format** for better performance (optional):
   - Convert images to WebP format
   - Update image paths to `.webp` extension

4. **Lazy loading** is already implemented in components

## Quick Steps

1. Download images from Google Drive
2. Rename images descriptively (e.g., `pvc-pipes-manufacturing.jpg`)
3. Place in appropriate folders (`public/images/gallery/`, `public/images/products/`, etc.)
4. Update component files with new image paths
5. Test the website to ensure images load correctly

## Current Placeholder Images

The website currently uses Unsplash placeholder images. Replace these with your actual images from Google Drive for a professional look.

## Image Naming Convention

Use descriptive, SEO-friendly names:
- ✅ `pvc-pipes-manufacturing.jpg`
- ✅ `hdpe-pipes-production.jpg`
- ✅ `pipe-quality-inspection.jpg`
- ❌ `IMG_0883.JPG` (not SEO-friendly)

## Notes

- All images should be optimized for web
- Use JPG for photos, PNG for graphics/logos
- Maintain aspect ratios for consistent display
- Ensure images are high quality but file size is reasonable (< 500KB per image)


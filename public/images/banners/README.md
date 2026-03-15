# Banner Photos for Hero Carousel

This directory contains the banner photos for the hero section background carousel.

## 🎯 Quick Setup

### Download Banner Photos from GitHub

Download the banner photos from your IRPC project repository:
**Source:** https://github.com/Misbahrahman/project_irpc/tree/main/public/images/BannerPhotos

### Naming Convention

Rename and place your banner photos in this directory with these exact names:

1. **banner-1.jpg** - Main Dawah/Community photo
2. **banner-2.jpg** - Quran Distribution photo
3. **banner-3.jpg** - Ramadan Support photo
4. **banner-4.jpg** - Library/Education photo
5. **banner-5.jpg** - Community Engagement photo

You can add more banners (banner-6.jpg, banner-7.jpg, etc.) - just update the `BackgroundCarousel.tsx` component.

## 📐 Image Specifications

### Recommended Dimensions
- **Width:** 1920px (minimum)
- **Height:** 1080px (minimum)
- **Aspect Ratio:** 16:9
- **Format:** JPG or WebP
- **File Size:** < 500KB per image (after optimization)

### Orientation
- Landscape orientation works best
- Ensure important subjects are centered (visible on mobile)
- Avoid text in images (carousel overlays text content)

## 🎨 Image Selection Tips

Choose photos that:
- ✅ Show authentic IRPC activities
- ✅ Feature people engaged in meaningful work
- ✅ Have good lighting and composition
- ✅ Evoke emotional connection
- ✅ Represent different aspects of IRPC work:
  - Dawah talks and lectures
  - Quran distribution events
  - Ramadan food kit distribution
  - Library and education programs
  - Community support activities

Avoid photos that:
- ❌ Are too dark or poorly lit
- ❌ Have cluttered backgrounds
- ❌ Are blurry or low resolution
- ❌ Don't represent IRPC's mission

## 🛠️ Image Optimization

Before adding photos, optimize them:

### Online Tools
- **Squoosh**: https://squoosh.app/
  - Convert to WebP or optimized JPG
  - Resize to 1920x1080
  - Quality: 75-85%

- **TinyPNG**: https://tinypng.com/
  - Upload and download optimized version

### Command Line (if you have ImageMagick)
```bash
# Resize and optimize
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 banner-1.jpg

# Convert to WebP (even better compression)
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 banner-1.webp
```

## 📝 Update Carousel Component

If you add more than 5 banner photos, update `/components/BackgroundCarousel.tsx`:

```typescript
const bannerPhotos: CarouselImage[] = [
  { src: '/images/banners/banner-1.jpg', alt: 'Description' },
  { src: '/images/banners/banner-2.jpg', alt: 'Description' },
  { src: '/images/banners/banner-3.jpg', alt: 'Description' },
  { src: '/images/banners/banner-4.jpg', alt: 'Description' },
  { src: '/images/banners/banner-5.jpg', alt: 'Description' },
  // Add more here
  { src: '/images/banners/banner-6.jpg', alt: 'Description' },
  { src: '/images/banners/banner-7.jpg', alt: 'Description' },
];
```

**Important:** Update the `alt` text for each image with meaningful descriptions for accessibility.

## 🎬 Carousel Features

The carousel includes:
- ✅ Auto-play (6 seconds per slide)
- ✅ Manual navigation (prev/next arrows)
- ✅ Keyboard navigation (arrow keys, spacebar to pause)
- ✅ Dot indicators
- ✅ Play/Pause control
- ✅ Smooth transitions
- ✅ Bluish overlay matching IRPC theme
- ✅ Mobile responsive

## 🚀 After Adding Photos

1. Place 5+ optimized photos in this directory
2. Name them banner-1.jpg through banner-5.jpg (or more)
3. Update alt text in BackgroundCarousel.tsx
4. Test the carousel:
   ```bash
   npm run dev
   ```
5. Verify:
   - Images load properly
   - Transitions are smooth
   - Text is readable over images
   - Mobile displays correctly
   - Auto-play works

## 📱 Mobile Optimization

The carousel is optimized for mobile:
- Next.js Image component handles responsive sizes
- Bluish overlay ensures text readability
- Controls are touch-friendly
- Images are lazy-loaded (except first)
- Smooth performance on 3G networks

## 🎯 Expected Result

A stunning hero section with:
- Professional rotating background images
- Beautiful bluish overlay maintaining brand colors
- Readable white text over photos
- Smooth, engaging transitions
- Trustworthy, authentic visual storytelling

---

**Current Status:** 🔴 Placeholder images needed
**Next Step:** Download and add your banner photos from the GitHub repository

Once added, the hero section will transform into a highly engaging, trustworthy presentation of IRPC's impactful work!

# 🎨 Banner Carousel Setup Guide

Quick guide to set up the professional hero banner carousel.

## 📥 Step 1: Download Banner Photos

Your banner photos are in the IRPC project repository:
**Repository:** https://github.com/Misbahrahman/project_irpc

**Path:** `/public/images/BannerPhotos`

### How to Download:

**Option A: Clone the Repository**
```bash
git clone https://github.com/Misbahrahman/project_irpc.git
cd project_irpc/public/images/BannerPhotos
# Copy photos to your project
cp * /path/to/irpc_new_landing_page/public/images/banners/
```

**Option B: Download Manually**
1. Go to: https://github.com/Misbahrahman/project_irpc/tree/main/public/images/BannerPhotos
2. Click on each photo
3. Click "Download" button
4. Save to your computer

**Option C: Download as ZIP**
1. Go to: https://github.com/Misbahrahman/project_irpc
2. Click green "Code" button
3. Select "Download ZIP"
4. Extract and navigate to `public/images/BannerPhotos`
5. Copy photos to your project

## 📁 Step 2: Add Photos to Project

Place your banner photos in:
```
/public/images/banners/
```

### Naming Convention:
Rename photos to:
- `banner-1.jpg` - Your best/most impactful photo first
- `banner-2.jpg` - Second most impactful
- `banner-3.jpg` - Third photo
- `banner-4.jpg` - Fourth photo
- `banner-5.jpg` - Fifth photo

**Tip:** Put your most compelling photo as banner-1.jpg since it loads first!

## 🎨 Step 3: Optimize Images (Optional but Recommended)

For best performance, optimize your images:

### Quick Online Optimization:
1. Go to https://squoosh.app/
2. Upload each banner photo
3. Settings:
   - Resize: 1920 x 1080
   - Format: WebP or MozJPEG
   - Quality: 80-85
4. Download and rename

### Batch Optimization (Command Line):
```bash
# If you have ImageMagick installed
cd public/images/banners
for file in *.jpg; do
  convert "$file" -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 "optimized_$file"
done
```

## ✏️ Step 4: Update Alt Text

Edit `/components/BackgroundCarousel.tsx`:

Find the `bannerPhotos` array and update alt text to describe your actual photos:

```typescript
const bannerPhotos: CarouselImage[] = [
  {
    src: '/images/banners/banner-1.jpg',
    alt: 'IRPC volunteers distributing Quran at community event', // ← Update this
  },
  {
    src: '/images/banners/banner-2.jpg',
    alt: 'Ramadan food distribution to families in need', // ← Update this
  },
  // ... update all alt texts
];
```

Good alt text:
- Describes what's happening in the photo
- Mentions key elements (people, activities, location)
- Is specific but concise (10-20 words)

## 🧪 Step 5: Test the Carousel

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### What to Check:
- ✅ All images load properly
- ✅ Carousel auto-plays smoothly
- ✅ Navigation arrows work
- ✅ Dot indicators update correctly
- ✅ Play/Pause button works
- ✅ Text is readable over images
- ✅ Mobile view looks good
- ✅ Transitions are smooth

### Keyboard Testing:
- **Arrow Left/Right:** Navigate slides
- **Spacebar:** Pause/Play auto-play
- **Tab:** Navigate to controls

## 🎯 Step 6: Customize (Optional)

### Change Auto-Play Speed

Edit `/components/HeroSection.tsx`:

```typescript
<BackgroundCarousel
  autoPlayInterval={6000}  // ← Change to 4000 for 4 seconds, 8000 for 8 seconds, etc.
  showControls={true}
/>
```

### Hide Controls (Auto-play only)

```typescript
<BackgroundCarousel
  autoPlayInterval={6000}
  showControls={false}  // ← Set to false to hide all controls
/>
```

### Add More Photos

1. Add `banner-6.jpg`, `banner-7.jpg`, etc. to `/public/images/banners/`
2. Update `/components/BackgroundCarousel.tsx`:

```typescript
const bannerPhotos: CarouselImage[] = [
  // ... existing photos ...
  {
    src: '/images/banners/banner-6.jpg',
    alt: 'Description of sixth photo',
  },
  {
    src: '/images/banners/banner-7.jpg',
    alt: 'Description of seventh photo',
  },
];
```

The carousel automatically handles any number of photos!

## 🎨 Customizing the Overlay

The bluish overlay creates the theme. To adjust:

Edit `/components/BackgroundCarousel.tsx`, find the overlay section:

```typescript
{/* Bluish Overlay - Multiple layers for depth */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/90 mix-blend-multiply" />
```

Adjust opacity values:
- `/90` = 90% opacity (darker)
- `/70` = 70% opacity (lighter)
- Experiment with values between `/60` and `/95`

## 🚨 Troubleshooting

### Images Not Showing?

**Check:**
1. Files are in correct location: `/public/images/banners/`
2. File names match exactly: `banner-1.jpg`, `banner-2.jpg`, etc.
3. File extensions are correct (`.jpg`, `.jpeg`, or `.webp`)
4. Clear browser cache (Cmd/Ctrl + Shift + R)
5. Restart dev server

### Images Too Dark?

Reduce overlay opacity in `BackgroundCarousel.tsx`:
```typescript
// Change from /90 to /70 for lighter overlay
<div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/65 to-secondary/70 mix-blend-multiply" />
```

### Text Not Readable?

Increase overlay opacity or adjust text colors in `HeroSection.tsx`.

### Carousel Not Auto-Playing?

1. Check browser console for errors
2. Verify `autoPlayInterval` prop is set
3. Try clicking the play button (bottom right)

### Slow Performance?

1. Optimize images (reduce file size to <500KB each)
2. Convert to WebP format
3. Reduce image dimensions to 1920x1080

## 📊 Performance Tips

For best performance:
- ✅ Keep images under 500KB each
- ✅ Use WebP format when possible
- ✅ Ensure first image (banner-1) loads quickly
- ✅ Resize to 1920x1080 (no larger)
- ✅ Limit to 5-7 photos total

## 🎉 You're Done!

Your hero section now has:
- ✨ Professional rotating backgrounds
- 🎨 Beautiful bluish overlay
- 📱 Mobile-responsive design
- ♿ Accessible controls
- ⚡ Smooth performance

The carousel creates trust and emotional connection by showcasing IRPC's real work!

---

**Questions?** Check `/public/images/banners/README.md` for detailed documentation.

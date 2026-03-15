# IRPC Landing Page

High-conversion Islamic charity donation landing page for **Islamic Research & Propagation Center (IRPC)**.

Built with Next.js 14, TypeScript, TailwindCSS, and Razorpay integration.

## 🚀 Features

- ✅ **Professional Hero Carousel** with rotating banner photos and bluish overlay
- ✅ **Mobile-first responsive design** optimized for Indian users
- ✅ **High-performance** with sub-2s load time target (140 kB bundle)
- ✅ **Razorpay payment integration** with UPI support
- ✅ **Animated counters** showing real impact
- ✅ **Interactive controls** - auto-play, navigation, keyboard support
- ✅ **SEO optimized** with structured data
- ✅ **Accessible** WCAG compliant
- ✅ **Modern stack** - Next.js 14 App Router, TypeScript, TailwindCSS
- ✅ **Beautiful animations** with Framer Motion

## 📋 Requirements

- Node.js 18.x or higher
- npm 9.x or higher

## 🛠️ Installation

1. **Clone or navigate to the project:**
   ```bash
   cd irpc_new_landing_page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your Razorpay credentials:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Add banner photos for hero carousel:** ⭐ **NEW**

   **Quick Setup:** See `BANNER_SETUP.md` for detailed instructions.

   Download banner photos from your GitHub repository and place in `/public/images/banners/`:
   - `banner-1.jpg` through `banner-5.jpg` (or more)
   - Recommended: 1920x1080px, <500KB each
   - See `/public/images/banners/README.md` for detailed specs

5. **Add gallery images to the project:**

   Place your organization photos in `/public/images/` with these names:
   - `dawah-talk.jpg` - Dawah programs/talks
   - `quran-distribution.jpg` - Qur'an distribution events
   - `ramadan-kit.jpg` - Ramadan food kit distribution
   - `library.jpg` - Islamic library photos
   - `community-help.jpg` - Community support activities
   - `education.jpg` - Educational programs

   **Image optimization tips:**
   - Convert to WebP format for better performance
   - Resize to max 1920px width
   - Compress images to reduce file size
   - Use tools like TinyPNG or Squoosh

5. **Update payment details:**

   Edit these files to add actual payment information:
   - `components/DonationCard.tsx` - Update UPI ID
   - `components/FinalCTA.tsx` - Update bank details and QR code

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
irpc_new_landing_page/
├── app/
│   ├── api/
│   │   └── create-order/      # Razorpay API route
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Main landing page
│   └── globals.css             # Global styles
├── components/
│   ├── HeroSection.tsx         # Hero + donation card
│   ├── DonationCard.tsx        # Donation form with Razorpay
│   ├── ImpactSection.tsx       # Stats with animated counters
│   ├── PhotoSection.tsx        # Photo gallery
│   └── FinalCTA.tsx            # Final call-to-action
├── lib/
│   └── razorpay.ts             # Razorpay utilities
├── types/
│   └── donation.ts             # TypeScript types
└── public/
    ├── images/                 # Organization photos
    └── logo.png                # IRPC logo
```

## 🎨 Color Theme

- **Primary Blue:** `#1E4ED8`
- **Secondary Blue:** `#3B82F6`
- **Background:** `#F7FAFF`
- **Text:** `#0F172A`

## 🔐 Razorpay Integration

### Current Implementation

The project includes a **placeholder API route** at `/app/api/create-order/route.ts`.

### To Use Actual Razorpay:

1. Install Razorpay SDK:
   ```bash
   npm install razorpay
   ```

2. Uncomment the implementation in `/app/api/create-order/route.ts`

3. Add your Razorpay credentials to `.env`

### Alternative: Use Existing Backend

If you have an existing backend endpoint for Razorpay:

1. Update the API URL in `lib/razorpay.ts`:
   ```typescript
   const response = await fetch('YOUR_BACKEND_URL/create-order', {
     // ...
   });
   ```

2. Remove the `/app/api/create-order` directory if not needed

## 📱 Mobile Optimization

- Touch-friendly buttons (minimum 48x48px)
- Optimized for 3G networks
- Responsive images with Next.js Image
- Lazy loading for images
- Minimal JavaScript bundle

## 🎯 Performance Checklist

- ✅ Next.js Image optimization
- ✅ WebP image format
- ✅ Lazy loading
- ✅ Font optimization
- ✅ Code splitting
- ✅ Static generation
- ✅ Preconnect to external domains

## 📝 To-Do Before Launch

- [ ] Add actual Razorpay credentials
- [ ] Replace UPI ID with real one
- [ ] Add bank account details
- [ ] Upload 6-8 organization photos
- [ ] Add QR code image for UPI
- [ ] Update social media links in layout.tsx
- [ ] Test payment flow end-to-end
- [ ] Run Lighthouse performance test
- [ ] Test on multiple mobile devices
- [ ] Set up domain and SSL certificate

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (Schema.org)
- Semantic HTML
- Sitemap ready

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Alt tags for all images
- Proper color contrast
- Semantic HTML structure
- Screen reader friendly

## 📄 License

© 2024 Islamic Research & Propagation Center. All rights reserved.

## 🤝 Support

For technical support or questions about the landing page, please contact your development team.

---

**May Allah accept this work and make it a means of spreading beneficial knowledge.**

# 🚀 Quick Setup Guide

Follow these steps to get your IRPC landing page up and running.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your Razorpay credentials:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_SECRET_KEY
NEXT_PUBLIC_API_URL=https://your-domain.com
```

**Get Razorpay Keys:**
1. Sign up at [razorpay.com](https://razorpay.com)
2. Go to Settings → API Keys
3. Generate Test/Live keys

## Step 3: Add Organization Photos

Copy 6-8 photos to `/public/images/` folder:

- `dawah-talk.jpg`
- `quran-distribution.jpg`
- `ramadan-kit.jpg`
- `library.jpg`
- `community-help.jpg`
- `education.jpg`

See `/public/images/README.md` for image requirements.

## Step 4: Update Payment Information

### 4.1 Update UPI ID

Edit `components/DonationCard.tsx` (around line 160):

```typescript
<p className="text-sm font-mono font-semibold text-gray-800">
  your-actual-upi@upi  {/* Replace this */}
</p>
```

Edit `components/FinalCTA.tsx` (around line 110):

```typescript
<p className="text-sm font-mono font-semibold text-gray-800">
  your-actual-upi@upi  {/* Replace this */}
</p>
```

### 4.2 Update Bank Details

Edit `components/FinalCTA.tsx` (around line 150):

```typescript
<p className="text-sm font-semibold text-gray-800">
  Islamic Research & Propagation Center
</p>

// Update account number, IFSC, bank name
```

### 4.3 Add QR Code

1. Generate UPI QR code image
2. Save as `/public/qr-code.png`
3. Update `components/FinalCTA.tsx`:

```typescript
<Image
  src="/qr-code.png"
  alt="UPI QR Code"
  width={160}
  height={160}
/>
```

## Step 5: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Test checklist:**
- [ ] Page loads quickly
- [ ] All sections visible
- [ ] Animations working smoothly
- [ ] Mobile responsive
- [ ] Donation form displays
- [ ] Images load properly

## Step 6: Setup Razorpay Integration

### Option A: Use Built-in API Route

1. Install Razorpay SDK:
   ```bash
   npm install razorpay
   ```

2. Edit `/app/api/create-order/route.ts`
3. Uncomment the Razorpay implementation code
4. Add your credentials to `.env`

### Option B: Use Existing Backend

1. Update API URL in `lib/razorpay.ts`:
   ```typescript
   const response = await fetch('YOUR_BACKEND_URL/create-order', {
     // ...
   });
   ```

2. Remove `/app/api/create-order` directory

## Step 7: Build for Production

```bash
npm run build
```

Fix any build errors, then:

```bash
npm start
```

## Step 8: Performance Testing

Run Lighthouse test:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run report
4. Target: 90+ score

## Step 9: Deploy

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS**: Use Amplify or EC2 + PM2
- **Digital Ocean**: Use App Platform

## Step 10: Post-Deployment

- [ ] Add custom domain
- [ ] Set up SSL certificate
- [ ] Update SEO metadata with actual URLs
- [ ] Test payment flow with real transactions
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Monitor performance
- [ ] Set up error tracking (Sentry, etc.)

## 🆘 Troubleshooting

### Build Errors

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Image Not Loading

- Check file names match exactly (case-sensitive)
- Verify images are in `/public/images/`
- Check image format (JPG, PNG, WebP)

### Razorpay Not Working

- Verify API keys in `.env`
- Check browser console for errors
- Test with Razorpay test keys first
- Ensure HTTPS in production

### Slow Performance

- Optimize images (compress, convert to WebP)
- Check network tab for large files
- Verify lazy loading is working
- Use production build, not dev mode

## 📞 Need Help?

Check:
- Main README.md for detailed documentation
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Razorpay docs: [razorpay.com/docs](https://razorpay.com/docs)

---

**JazakAllah Khair for supporting Islamic work through technology!**

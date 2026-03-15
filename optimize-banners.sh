#!/bin/bash

# Banner Image Optimization Script for IRPC Landing Page
# This script optimizes banner images for web use

echo "🎨 IRPC Banner Image Optimization"
echo "=================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo ""
    echo "Please install ImageMagick first:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo ""
    echo "Or use online tools:"
    echo "  - https://squoosh.app/ (recommended)"
    echo "  - https://tinyjpg.com/"
    echo ""
    exit 1
fi

# Navigate to banner directory
cd public/images/banner

# Create backup directory
if [ ! -d "../banner-originals" ]; then
    echo "📦 Creating backup of original images..."
    mkdir -p ../banner-originals
    cp *.jpg ../banner-originals/ 2>/dev/null || true
    echo "✅ Originals backed up to public/images/banner-originals/"
    echo ""
fi

# Show current sizes
echo "📊 Current file sizes:"
ls -lh banner*.jpg 2>/dev/null | awk '{print "   "$9" - "$5}'
echo ""

# Optimize images
echo "🔄 Optimizing images..."
echo "   Target: 1920x1080, Quality: 85%, Format: JPEG"
echo ""

for file in banner*.jpg; do
    if [ -f "$file" ]; then
        echo "   Processing $file..."

        # Get current size
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

        # Optimize
        convert "$file" \
            -resize 1920x1080^ \
            -gravity center \
            -extent 1920x1080 \
            -quality 85 \
            -strip \
            "optimized_$file"

        # Replace original
        mv "optimized_$file" "$file"

        # Get new size
        new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

        # Calculate reduction
        reduction=$(echo "scale=1; (($original_size - $new_size) / $original_size) * 100" | bc)

        echo "      Reduced by ${reduction}%"
    fi
done

echo ""
echo "✅ Optimization complete!"
echo ""
echo "📊 New file sizes:"
ls -lh banner*.jpg 2>/dev/null | awk '{print "   "$9" - "$5}'
echo ""

# Calculate total size
total_size=$(du -sh . | awk '{print $1}')
echo "📦 Total size: $total_size"
echo ""

echo "🎉 Done! Your banner images are now optimized for the web."
echo ""
echo "Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Visit: http://localhost:3000"
echo "  3. Check that carousel loads quickly!"
echo ""

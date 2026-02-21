# Image Download Status

## Current Status

**Images Downloaded:** 2 actual images + 4 placeholders
**Images Available on Source:** 40+ images across all blog posts (2015-2025)

## Downloaded Images

### ✅ Successfully Downloaded (2)

1. **2025-group-photo.jpg** (28 KB)
   - 2025 camp group photo
   - Athletes, counselors, volunteers
   - Location: `images/2025-group-photo.jpg`

2. **goalball-dive.jpg** (375 KB)
   - Athlete diving during goalball
   - 2024 or 2025 camp action shot
   - Location: `images/goalball-dive.jpg`

### ⚠️ Placeholder Files (4)

These files are 1.7KB placeholders (likely error pages):
- disc-golf-1.jpg
- rock-climbing-1.jpg
- tandem-bike-1.jpg
- wrestling-1.jpg

**Action Required:** Replace with actual images

## Images Available on Original Blog

### 2025 Posts (~20 images)

**"2025 Summer Sports Education Camp REVIEW & PHOTOS"**
- Group photo ✅ Downloaded
- Goalball dive ✅ Downloaded
- Goalball group drill
- Archery practice
- Archery aiming
- Ninja Zone obstacle course (multiple)
- Wrestling matches (multiple)
- Track & field
- Swimming
- Yoga session

**"2025 Award Winners"**
- Disc Golf 1st place (Will & Kayla)
- Disc Golf 2nd place (Aubri & Rory)
- Disc Golf 3rd place (Opal & Delaney)
- Spirit Award (Delaney K.)
- Athlete of the Year (Will H.)
- Volunteer of the Year (Cheryl G.)
- Organization of the Year (Alfond Center)
- Guest Speaker (Lindsay Ball)

### 2024 Posts (~15 images)

**"2024 Summer Sports Camp Photos"**
- Goalball action (multiple)
- Wrestling matches (multiple)
- Disc golf throwing (multiple)
- Rock climbing wall (multiple)
- Tandem biking (multiple)

### 2023 Posts (~8 images)

**"Summer Sports Camp 2023"**
- Track and field
- Goalball
- Dance
- Swimming
- Rock climbing
- Group photos

### 2022 Posts (~8 images)

**"MOBALE Sports Education Camp 2022"**
- Track and field
- Goalball
- Dance
- Swimming
- Rock climbing
- Tennis instruction
- Group photos

### 2020 Posts (~5 images)

**"Summer 2020 Newsletter"**
- Virtual camp screenshots
- Zoom sessions
- Athletes doing home exercises
- Karate instruction

### 2015-2019 Posts (~30+ images)

Estimated 30+ images across:
- 2019 posts (5 posts, ~10 images)
- 2018 posts (7 posts, ~12 images)
- 2017 posts (8 posts, ~15 images)
- 2016 posts (7 posts, ~12 images)
- 2015 posts (1 post, ~2 images)

## Image Download Plan

### Priority 1: Recent Posts (2024-2025)

Download all images from:
1. ✅ 2025 group photo
2. ✅ 2025 goalball dive
3. 🔄 2025 award winners (8 images)
4. 🔄 2025 camp activities (10+ images)
5. 🔄 2024 sports photos (15 images)

### Priority 2: Medium-Term (2020-2023)

6. 🔄 2023 camp photos (8 images)
7. 🔄 2022 camp photos (8 images)
8. 🔄 2020 virtual camp (5 images)

### Priority 3: Historical (2015-2019)

9. 🔄 2019 posts (10 images)
10. 🔄 2018 posts (12 images)
11. 🔄 2017 posts (15 images)
12. 🔄 2016 posts (12 images)
13. 🔄 2015 posts (2 images)

## How to Download Images

### Method 1: Manual Download (Recommended for Privacy)

1. Visit original blog: https://mobalesports.blogspot.com
2. Navigate to specific post
3. Right-click each image → "Save Image As"
4. Save to appropriate year folder: `images/YYYY/`
5. Use descriptive names: `YYYY-activity-description.jpg`

### Method 2: Automated Download (Bulk)

```bash
# Navigate to images directory
cd C:\Users\ScottHicks\source\repos\Personal\Demos\MobaleSports\images

# Download specific image
curl -L -o "2025/filename.jpg" "https://blogger.googleusercontent.com/img/..."

# Or use wget
wget -O "2025/filename.jpg" "https://blogger.googleusercontent.com/img/..."
```

### Method 3: Python Script (Advanced)

```python
import requests
from bs4 import BeautifulSoup
import os

# Fetch blog post
url = "https://mobalesports.blogspot.com/2025/07/..."
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all images
images = soup.find_all('img')

for i, img in enumerate(images):
    src = img.get('src')
    if 'blogger.googleusercontent.com' in src:
        # Download image
        img_data = requests.get(src).content
        with open(f'2025/image-{i}.jpg', 'wb') as f:
            f.write(img_data)
```

## Naming Convention

Use this format for downloaded images:

```
YYYY-event-sport-description.jpg
```

Examples:
- `2025-summer-camp-goalball-dive.jpg`
- `2025-awards-will-athlete-year.jpg`
- `2024-camp-wrestling-match.jpg`
- `2023-camp-track-field.jpg`

## Directory Structure

```
images/
├── 2025/
│   ├── 2025-group-photo.jpg (moved here)
│   ├── 2025-goalball-dive.jpg
│   ├── 2025-goalball-drill.jpg
│   ├── 2025-archery-practice.jpg
│   ├── 2025-awards-disc-golf-1st.jpg
│   └── ... (more 2025 images)
├── 2024/
│   ├── 2024-goalball-action.jpg
│   ├── 2024-wrestling-match.jpg
│   └── ... (2024 images)
├── 2023/
├── 2022/
├── 2020/
├── 2019/
├── 2018/
├── 2017/
├── 2016/
├── 2015/
└── historical/ (for undated or mixed-year images)
```

## Privacy & Permissions

⚠️ **Important Considerations:**

1. **Athlete Privacy**
   - Original blog is public, but verify permissions before republishing
   - Consider privacy of minors (athletes are youth)
   - May want to blur faces or get releases

2. **Copyright**
   - Images likely owned by MOBALE or photographers
   - Ensure proper rights to republish
   - Give credit where appropriate

3. **Best Practice**
   - Contact MOBALE organization for permission
   - Get photo releases from families
   - Consider privacy settings for new site

## Image Optimization

Before adding to site:

1. **Resize** - Max 1200px width for full-size
2. **Compress** - Use tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app)
3. **Format** - Save as JPG (photos) or WebP (modern)
4. **Target size** - Aim for <200KB per image

## Next Steps

1. ✅ Archive link added to all pages
2. 🔄 **Download remaining 2025 images** (~18 images)
3. 🔄 **Download 2024 images** (~15 images)
4. 🔄 **Download 2023-2022 images** (~16 images)
5. 🔄 **Download 2015-2019 images** (~30 images)
6. ✅ Create year subdirectories
7. 🔄 Organize existing images into year folders
8. 🔄 Update HTML to reference year-organized images
9. 🔄 Add images to archive posts
10. 🔄 Create image gallery pages (optional)

## Estimated Time

- **Manual download:** 2-3 minutes per image
- **Total images needed:** ~80 images
- **Total time:** 3-4 hours for manual download
- **Automated script:** 30-60 minutes (includes setup)

## Status Summary

| Category | Downloaded | Available | % Complete |
|----------|-----------|-----------|-----------|
| 2025 | 2 | 20 | 10% |
| 2024 | 0 | 15 | 0% |
| 2023 | 0 | 8 | 0% |
| 2022 | 0 | 8 | 0% |
| 2020 | 0 | 5 | 0% |
| 2019 | 0 | 10 | 0% |
| 2018 | 0 | 12 | 0% |
| 2017 | 0 | 15 | 0% |
| 2016 | 0 | 12 | 0% |
| 2015 | 0 | 2 | 0% |
| **TOTAL** | **2** | **~107** | **~2%** |

## Recommendation

**For immediate use:**
- The 2 downloaded images (group photo, goalball) are already added to the site
- The site is functional with placeholder text for other images

**For complete migration:**
- Manually download images from original blog
- Follow the BLOG_MIGRATION_GUIDE.md for full content migration
- Consider hiring a volunteer to help with bulk image download
- Or use the Python script to automate downloads

**Privacy first:**
- Before downloading all images, verify you have permission
- Contact MOBALE organization
- Get photo releases if needed
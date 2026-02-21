# Blog Migration Guide - Historical Posts (2015-2019)

## Overview

The MOBALE blog has **34 total posts** from 2015-2025:
- ✅ **2020-2025:** Fully migrated (6 posts)
- 🔄 **2015-2019:** Ready to migrate (28 posts)

## Post Count by Year

| Year | Posts | Status |
|------|-------|--------|
| 2025 | 3 | ✅ Migrated |
| 2024 | 0 | N/A |
| 2023 | 1 | ✅ Partial (summary added) |
| 2022 | 1 | ✅ Partial (summary added) |
| 2021 | 0 | N/A |
| 2020 | 1 | ✅ Partial (summary added) |
| 2019 | 5 | 🔄 Ready to migrate |
| 2018 | 7 | 🔄 Ready to migrate |
| 2017 | 8 | 🔄 Ready to migrate |
| 2016 | 7 | 🔄 Ready to migrate |
| 2015 | 1 | 🔄 Ready to migrate |

## Migration Process

### Step 1: Access Original Posts

Visit the original blog archive:
- https://mobalesports.blogspot.com
- Use the sidebar archive widget to browse by year/month
- Or use the "Older Posts" navigation

### Step 2: Extract Content for Each Post

For each post, gather:
1. **Date** - Full publication date
2. **Title** - Exact post title
3. **Content** - Full text (copy/paste from blog)
4. **Images** - Download any embedded images
   - Right-click image → Save Image As
   - Use descriptive filenames (e.g., `2018-summer-camp-goalball.jpg`)
5. **Image captions** - Note what each image shows
6. **Image alt text** - Write descriptive alt text

### Step 3: Add to Archive Page

Edit `../archive/archive-main.html` and add the post to the appropriate year section:

```html
<article class="archive-post">
    <h3><a href="news-YEAR.html#post-id">Post Title Here</a></h3>
    <time datetime="YYYY-MM-DD">Month DD, YYYY</time>
    <p>First paragraph or summary of the post...</p>
    <a href="news-YEAR.html#post-id" class="read-more">Read Full Post &rarr;</a>
</article>
```

### Step 4: Create Year-Specific News Pages (Optional)

For years with many posts, create separate pages:

- `news-2019.html` - All 2019 posts
- `news-2018.html` - All 2018 posts
- `news-2017.html` - All 2017 posts
- `news-2016.html` - All 2016 posts

Use `news.html` as a template, but replace the content with historical posts.

### Step 5: Add Images

1. Place images in `images/` directory
2. Use descriptive filenames with year:
   - `images/2019-winter-camp-skiing.jpg`
   - `images/2018-summer-awards.jpg`
3. Add to posts using the figure element:

```html
<figure class="content-image">
    <img src="images/2019-winter-camp-skiing.jpg"
         alt="Athletes skiing down slope at Sugarloaf Mountain during 2019 winter camp"
         width="800"
         height="600"
         loading="lazy">
    <figcaption>2019 Winter Camp at Sugarloaf Mountain</figcaption>
</figure>
```

### Step 6: Update Search Index

Edit `search.js` and add entries for each migrated post to the `searchIndex` array:

```javascript
{
    title: "Post Title - 2019",
    url: "news-2019.html#post-id",
    keywords: ["2019", "camp", "relevant", "keywords"],
    content: "First 200-300 characters of post content..."
}
```

## Known Posts to Migrate

### 2019 Posts (5 total)

1. **September 16, 2019** - "MOBALE Summer Camp 2020 Save the Date"
   - Brief announcement post

2. **April 21, 2019** - "Spring 2019 Newsletter"
   - Winter Sports Education Camp at Sugarloaf
   - Summer camp preview
   - Volunteer spotlight

3. **March 2019** - (1 post)
   - Need to fetch details

4. **January 2019** - (2 posts)
   - Need to fetch details

### 2018 Posts (7 total)

**Months:** January, April, June (3 posts), July (2 posts)
- Likely summer camp reviews, volunteer recognition, program updates

### 2017 Posts (8 total)

**Months:** January (2), March, May (2), June, October, November
- Likely camp coverage and program development

### 2016 Posts (7 total)

**Months:** February, May, June, July (2), September, November
- Likely camp events and sports programs

### 2015 Posts (1 total)

**Month:** December
- Early blog post, possibly program launch or end-of-year recap

## Detailed Migration Steps

### Migrating a Single Post

1. **Open original post** on mobalesports.blogspot.com

2. **Copy content** to a text editor

3. **Download images**:
   ```bash
   # Example: Download image using curl
   curl -o images/2019-spring-newsletter.jpg "https://blogger.googleusercontent.com/..."
   ```

4. **Add to ../archive/archive-main.html**:
   - Find the appropriate year section
   - Add the `<article class="archive-post">` block
   - Include title, date, summary

5. **Create full post page** (if needed):
   - Copy `news.html` as `news-2019.html`
   - Replace content with historical posts
   - Add proper headings and structure

6. **Add to search index** in `search.js`:
   ```javascript
   {
       title: "Spring 2019 Newsletter",
       url: "news-2019.html#spring-2019",
       keywords: ["2019", "spring", "newsletter", "winter", "sugarloaf", "skiing"],
       content: "Detailed newsletter covering the Winter Sports Education Camp..."
   }
   ```

7. **Test**:
   - Open ../archive/archive-main.html
   - Click year link
   - Verify post displays
   - Test "Read Full Post" link
   - Search for post content

## Batch Migration Script

For faster migration, you can create a script to fetch multiple posts:

```bash
#!/bin/bash
# fetch-blog-posts.sh

YEARS=(2015 2016 2017 2018 2019)

for year in "${YEARS[@]}"; do
    echo "Fetching $year posts..."
    curl "https://mobalesports.blogspot.com/search?updated-min=${year}-01-01&updated-max=${year}-12-31" \
        > "temp-${year}.html"
done
```

Then manually extract content from the temp HTML files.

## Template for New Post

```html
<article id="post-slug-YYYY-MM" class="news-post full-post">
    <h2>Post Title Here</h2>
    <time datetime="YYYY-MM-DD">Month DD, YYYY</time>

    <div class="post-content">
        <p class="lead">Opening paragraph or summary...</p>

        <figure class="content-image">
            <img src="images/YYYY-description.jpg"
                 alt="Descriptive alt text explaining what's in the image"
                 width="800"
                 height="600"
                 loading="lazy">
            <figcaption>Caption for the image</figcaption>
        </figure>

        <h3>Section Heading</h3>
        <p>Content here...</p>

        <h3>Another Section</h3>
        <ul>
            <li>List item</li>
            <li>List item</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Closing content...</p>
    </div>
</article>
```

## Accessibility Checklist

When migrating posts, ensure:

- [ ] Descriptive alt text for ALL images
- [ ] Proper heading hierarchy (H2 for post title, H3 for sections)
- [ ] Link text is descriptive (not "click here")
- [ ] Dates use `<time>` element with datetime attribute
- [ ] Images use lazy loading (`loading="lazy"`)
- [ ] Captions provide context
- [ ] Color contrast meets WCAG AA standards
- [ ] No tables used for layout (only for data)

## Priority Order

Migrate in this order for maximum impact:

1. **2019 posts** (5 posts) - Most recent historical content
2. **2018 posts** (7 posts) - High activity year
3. **2017 posts** (8 posts) - High activity year
4. **2016 posts** (7 posts) - Good historical context
5. **2015 posts** (1 post) - Complete the archive

## Estimated Time

- **Per post migration:** 15-30 minutes (simple) to 1 hour (complex with images)
- **Total remaining posts:** 28 posts
- **Estimated total time:** 8-15 hours

## Tools Needed

- Web browser (to view original blog)
- Text editor
- Image download tool (browser or curl)
- Image editor (for resizing/optimizing if needed)
- File manager

## Tips

1. **Work in batches** - Do one year at a time
2. **Test frequently** - Check each post after adding
3. **Backup** - Save copies of original content
4. **Consistent naming** - Use clear, descriptive filenames
5. **Track progress** - Keep a checklist of migrated posts
6. **Get help** - Ask volunteers to help with migration

## Quality Check

Before marking a post as "migrated":

✅ Content is complete and accurate
✅ All images are included
✅ Alt text is descriptive
✅ Links work correctly
✅ Post appears in archive
✅ Post is searchable
✅ Mobile display looks good
✅ Screen reader navigation works

## Future Automation

Consider these tools for future migrations:

- **Web scraping:** Python with BeautifulSoup
- **Blogger API:** Official API for programmatic access
- **RSS feed:** Parse blog RSS for content
- **WordPress importer:** If converting to WordPress

## Questions?

If you encounter issues during migration:

1. Check the original Blogspot post for reference
2. Review SITE_FEATURES.md for technical details
3. Test with screen readers for accessibility
4. Ask for help in migration planning

## Archive Status Tracking

Create a simple spreadsheet to track:

| Year | Month | Title | Status | Migrated By | Date |
|------|-------|-------|--------|-------------|------|
| 2019 | Sep   | Save the Date | ✅ Done | Name | 2025-11-02 |
| 2019 | Apr   | Spring Newsletter | 🔄 In Progress | Name | - |

This helps coordinate if multiple people are helping with migration.
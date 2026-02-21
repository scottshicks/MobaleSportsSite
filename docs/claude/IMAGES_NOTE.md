# Images from Original Site

The original mobalesports.blogspot.com site contains photos from camps that show athletes in action. Due to privacy considerations and copyright, these images are not included in this template.

## To Add Images to Your Site:

### 1. Obtain Images
- Use your own photos from MOBALE events
- Ensure you have proper permissions/releases from athletes and families
- Consider privacy implications for visually impaired youth

### 2. Optimize Images for Web
- Resize images to appropriate dimensions (e.g., 1200px wide for full-width, 800px for content)
- Compress images (use tools like TinyPNG, ImageOptim, or Squoosh)
- Save in modern formats (WebP with JPG fallback for compatibility)
- Use descriptive filenames (e.g., `goalball-action-2025.jpg`)

### 3. Add Images to Your HTML

Place images in the `images/` directory and reference them in your HTML:

```html
<figure class="content-image">
    <img src="images/goalball-2025.jpg"
         alt="Two athletes diving to defend their goalball net while a third prepares to throw"
         width="800"
         height="600">
    <figcaption>Athletes competing in goalball at the 2025 Summer Sports Camp</figcaption>
</figure>
```

### 4. Ensure Accessibility

**CRITICAL for visually impaired audience:**

- Always include descriptive alt text that conveys the image content
- Use `<figure>` and `<figcaption>` for context
- Don't rely on images alone to convey information
- Consider providing audio descriptions for complex images

Good alt text examples:
- ✅ "Athlete in eyeshades catching a goalball at ground level while teammates defend behind"
- ✅ "Two wrestlers on a mat, one executing a takedown while a coach observes"
- ❌ "Sports photo" (too vague)
- ❌ "IMG_2025.jpg" (not descriptive)

### 5. Add CSS for Images

The template includes basic image styles, but you may want to add:

```css
.content-image {
    margin: 2rem 0;
    text-align: center;
}

.content-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.content-image figcaption {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
}

/* Photo Galleries */
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.photo-gallery img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s;
}

.photo-gallery img:hover {
    transform: scale(1.05);
}
```

### 6. Consider a Photo Gallery Plugin

For more advanced galleries, consider:
- **Lightbox2** - Simple, accessible lightbox
- **PhotoSwipe** - Touch-friendly, keyboard accessible
- **GLightbox** - Modern, lightweight option

Ensure any gallery plugin you choose supports:
- Keyboard navigation
- Screen reader announcements
- Focus management
- Alt text display

### 7. Suggested Images for Each Page

**Homepage (home.html):**
- Hero image of athletes in action
- Photos in the news section showing recent camps

**About Page (about.html):**
- Group photo of athletes, counselors, and volunteers
- Action shots representing different sports

**Programs Page (programs.html):**
- Camp overview photo
- Images of leadership activities
- Award ceremony photos

**Sports Page (sports.html):**
- One representative photo for each sport
- Action shots showing adaptive equipment/techniques

**News Page (news.html):**
- Photo galleries for each news post
- Award winners photos
- Event highlights

### 8. Performance Best Practices

- Use lazy loading: `<img loading="lazy">`
- Provide multiple sizes with `srcset` for responsive images
- Consider a CDN for image delivery
- Use modern formats (WebP, AVIF) with fallbacks

### 9. Privacy & Legal Considerations

- Obtain signed photo releases from athletes/families
- Be mindful of sharing images of minors
- Consider blurring faces if permission is uncertain
- Include a privacy policy about photo usage
- Allow opt-out for families who don't want photos shared

## Example Image Structure

```
MobaleSports/
├── images/
│   ├── hero/
│   │   └── camp-hero-2025.jpg
│   ├── sports/
│   │   ├── goalball-action.jpg
│   │   ├── wrestling-training.jpg
│   │   ├── disc-golf-throwing.jpg
│   │   ├── archery-aim.jpg
│   │   ├── rock-climbing-wall.jpg
│   │   └── tandem-biking-trail.jpg
│   ├── camp-2025/
│   │   ├── day1-arrivals.jpg
│   │   ├── swimming-pool.jpg
│   │   ├── awards-ceremony.jpg
│   │   └── group-photo.jpg
│   └── about/
│       ├── volunteers-group.jpg
│       └── leadership-workshop.jpg
```

## Free Stock Photos (as placeholders)

While you work on obtaining real photos, you can use free stock images from:
- **Unsplash** - unsplash.com
- **Pexels** - pexels.com
- **Pixabay** - pixabay.com

Search terms:
- "blind athlete sports"
- "Paralympic goalball"
- "adaptive sports youth"
- "visually impaired athletics"

Remember to replace placeholders with authentic MOBALE photos when available!
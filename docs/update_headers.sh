#!/bin/bash
for file in what-we-do.html impact.html team.html partners.html get-involved.html summer-camp.html camp-highlights.html camp-activities.html goalball.html wrestling.html swimming.html track-field.html disc-golf.html archery.html rock-climbing.html tandem-biking.html soccer-kickball.html yoga-fitness.html camp-2025-review.html awards-2025.html photos-2024.html; do
  if [ -f "$file" ] && grep -q '<div class="header-content">' "$file" && ! grep -q '<div class="site-logo">' "$file"; then
    sed -i '/^            <\/div>$/,/^            <nav id="main-navigation"/ {
      /^            <\/div>$/ {
        i\                <div class="site-logo">\
                    <a href="home.html">\
                        <img src="images/mobale-logo.png" alt="MOBALE Logo" class="logo-image">\
                    </a>\
                </div>\
            </div>
        d
      }
    }' "$file" 2>/dev/null || echo "Skipped $file (may already be updated)"
  fi
done
echo "Done"

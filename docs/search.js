/**
 * MOBALE Site Search - Accessible search functionality
 */

// Search index - all searchable content on the site
const searchIndex = [
    // Home page
    {
        title: "Home",
        url: "home.html",
        keywords: ["home", "mobale", "maine", "organization", "blind", "athletic", "leadership", "education", "sports", "visually", "impaired", "youth"],
        content: "Empowering Visually Impaired Youth Through Sports. Building confidence, leadership, and athletic skills through inclusive sports education."
    },

    // About page
    {
        title: "About MOBALE",
        url: "about.html",
        keywords: ["about", "mission", "impact", "team", "volunteers", "counselors", "partners", "alfond", "organization"],
        content: "Maine Organization for Blind Athletic and Leadership Education promotes sports and leadership opportunities for visually impaired youth. Summer Sports Education Camp, leadership development, adaptive sports training, community building."
    },

    // Programs page
    {
        title: "Programs - Summer Sports Education Camp",
        url: "programs.html",
        keywords: ["programs", "summer", "camp", "education", "residential", "june", "athletes", "counselors", "awards", "volunteer", "leadership"],
        content: "Summer Sports Education Camp - multi-day residential program. Soccer, kickball, swimming, track & field, yoga, wrestling, archery, disc golf, functional fitness, goalball. Volunteer counselors, visually impaired counselors, junior counselors. Awards ceremony."
    },
    {
        title: "2025 Summer Camp",
        url: "programs.html",
        keywords: ["2025", "camp", "adria", "sheila", "jordan", "cheryl", "izzy", "kyle", "derek", "gavin", "tyler", "lindsay ball"],
        content: "2025 Summer Sports Education Camp June 18-21. 8 athletes from Maine and New Hampshire. Counselors: Adria, Sheila, Jordan, Cheryl. Visually impaired counselors: Izzy, Kyle, Derek. Junior counselors: Gavin, Tyler. Guest speaker Lindsay Ball, Paralympic ski racer."
    },

    // Sports pages
    {
        title: "Sports Programs - Goalball",
        url: "sports.html",
        keywords: ["sports", "goalball", "paralympic", "team", "eyeshades", "bells", "spatial awareness"],
        content: "Goalball - Paralympic team sport for blind and visually impaired athletes. Three players defend goal, roll ball with bells. All players wear eyeshades. Spatial awareness, teamwork, reflexes."
    },
    {
        title: "Sports Programs - Wrestling",
        url: "sports.html",
        keywords: ["wrestling", "strength", "technique", "grappling", "holds"],
        content: "Wrestling builds strength, technique, and confidence. Physical contact maintains opponent awareness. Fundamental techniques, balance, body control."
    },
    {
        title: "Sports Programs - Swimming",
        url: "sports.html",
        keywords: ["swimming", "pool", "water", "strokes", "tap system"],
        content: "Swimming provides cardiovascular exercise and life skills. Tap system for wall approach, verbal lane guidance, pool orientation."
    },
    {
        title: "Sports Programs - Track & Field",
        url: "sports.html",
        keywords: ["track", "field", "running", "sprints", "guide runners", "shot put", "discus", "long jump"],
        content: "Track & Field - sprints, long-distance running, shot put, discus, long jump. Guide runners with tethers, tactile markers, acoustic signals."
    },
    {
        title: "Sports Programs - Disc Golf",
        url: "sports.html",
        keywords: ["disc golf", "outdoor", "throwing", "frisbee", "course", "tournament"],
        content: "Disc Golf combines outdoor recreation with skill development. Sighted guides, verbal course descriptions, friendly tournaments."
    },
    {
        title: "Sports Programs - Archery",
        url: "sports.html",
        keywords: ["archery", "bow", "arrow", "target", "aiming", "precision"],
        content: "Archery develops focus, precision, and upper body strength. Tactile aiming devices, verbal feedback, Paralympic sport."
    },
    {
        title: "Sports Programs - Rock Climbing",
        url: "sports.html",
        keywords: ["rock climbing", "climbing wall", "bouldering", "belaying", "holds"],
        content: "Rock Climbing builds problem-solving, strength, and confidence. Verbal route descriptions, tactile exploration, certified instructors."
    },
    {
        title: "Sports Programs - Tandem Biking",
        url: "sports.html",
        keywords: ["tandem", "biking", "cycling", "bicycle", "pilot", "partner"],
        content: "Tandem Biking - cycling with trained sighted partners (pilots). Cardiovascular exercise, teamwork, outdoor exploration."
    },
    {
        title: "Sports Programs - Soccer & Kickball",
        url: "sports.html",
        keywords: ["soccer", "kickball", "team sports", "ball sports"],
        content: "Soccer and Kickball - team sports with balls containing bells. Modified rules, verbal coaching, sportsmanship."
    },
    {
        title: "Sports Programs - Yoga & Fitness",
        url: "sports.html",
        keywords: ["yoga", "fitness", "functional", "mindfulness", "flexibility", "strength"],
        content: "Yoga and Functional Fitness - flexibility, strength, mindfulness training. Verbal cuing, body awareness, injury prevention."
    },

    // News page
    {
        title: "2025 Summer Camp Review",
        url: "news.html#camp-2025-review",
        keywords: ["2025", "review", "june", "athletes", "new hampshire", "soccer", "kickball", "swimming", "track", "yoga"],
        content: "2025 Summer Sports Education Camp Review - June 18-21, 2025. 8 athletes from Maine and New Hampshire. Activities: soccer, kickball, swimming, track & field, yoga, wrestling, archery, disc golf, functional fitness, goalball."
    },
    {
        title: "2025 Award Winners",
        url: "news.html#awards-2025",
        keywords: ["awards", "2025", "will", "delaney", "cheryl", "disc golf", "tournament", "athlete of the year", "spirit award", "volunteer"],
        content: "2025 Awards - Disc Golf Winners: Will & Kayla (1st), Aubri & Rory (2nd), Opal & Delaney (3rd). Spirit Award: Delaney K. Athlete of the Year: Will H. Volunteer of the Year: Cheryl G. Organization of the Year: Alfond Youth & Community Center."
    },
    {
        title: "Lindsay Ball - Guest Speaker",
        url: "news.html#awards-2025",
        keywords: ["lindsay ball", "paralympic", "ski", "skiing", "2014", "sochi", "professor", "speaker"],
        content: "Lindsay Ball - 2025 guest speaker, 2014 Paralympic ski racer at Sochi Winter Paralympics, college professor. Inspiring story of athletic achievement and academic success."
    },
    {
        title: "2024 Summer Camp Photos",
        url: "news.html#photos-2024",
        keywords: ["2024", "photos", "pictures", "images", "gallery"],
        content: "2024 Summer Sports Camp Photos - highlights from goalball, wrestling, disc golf, rock climbing, and tandem biking. Action photos and camp memories."
    },

    // Contact page
    {
        title: "Contact & Get Involved",
        url: "contact.html",
        keywords: ["contact", "get involved", "athlete", "volunteer", "donate", "support", "partner", "registration", "apply"],
        content: "Get involved with MOBALE - athletes, volunteers, donors, partners. Camp registration, volunteer opportunities, financial support, partnerships. Contact form for inquiries."
    },
    {
        title: "Volunteer Opportunities",
        url: "contact.html",
        keywords: ["volunteer", "counselor", "instructor", "junior counselor", "staff"],
        content: "Volunteer opportunities - camp counselors, sports instructors, junior counselors, support staff. No previous experience required."
    },
    {
        title: "FAQs",
        url: "contact.html",
        keywords: ["faq", "questions", "eligibility", "cost", "fees", "scholarship", "family"],
        content: "Frequently Asked Questions - eligibility, cost, fees, scholarships, volunteer requirements, camp dates, family involvement, skill levels."
    }
];

// Perform search
function performSearch(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    query = query.toLowerCase().trim();
    const queryWords = query.split(/\s+/);

    const results = [];

    searchIndex.forEach(item => {
        let score = 0;

        // Check title (highest weight)
        if (item.title.toLowerCase().includes(query)) {
            score += 10;
        }
        queryWords.forEach(word => {
            if (item.title.toLowerCase().includes(word)) {
                score += 5;
            }
        });

        // Check keywords (medium weight)
        item.keywords.forEach(keyword => {
            if (keyword.includes(query)) {
                score += 7;
            }
            queryWords.forEach(word => {
                if (keyword.includes(word)) {
                    score += 3;
                }
            });
        });

        // Check content (lower weight)
        if (item.content.toLowerCase().includes(query)) {
            score += 4;
        }
        queryWords.forEach(word => {
            if (item.content.toLowerCase().includes(word)) {
                score += 2;
            }
        });

        if (score > 0) {
            results.push({
                ...item,
                score: score
            });
        }
    });

    // Sort by score (highest first)
    results.sort((a, b) => b.score - a.score);

    return results;
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('site-search-form');
    const searchInput = document.getElementById('site-search-input');
    const searchButton = document.getElementById('site-search-button');

    if (searchForm && searchInput) {
        // Handle form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const query = searchInput.value.trim();
            if (query.length < 2) {
                alert('Please enter at least 2 characters to search.');
                searchInput.focus();
                return;
            }

            // Redirect to search results page with query
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        });

        // Handle Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchForm.dispatchEvent(new Event('submit'));
            }
        });
    }
});

// For search results page
function displaySearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    const resultsContainer = document.getElementById('search-results');
    const queryDisplay = document.getElementById('search-query');
    const resultsCount = document.getElementById('results-count');

    if (!query || query.trim().length < 2) {
        if (resultsContainer) {
            resultsContainer.innerHTML = '<p>Please enter a search query with at least 2 characters.</p>';
        }
        return;
    }

    if (queryDisplay) {
        queryDisplay.textContent = query;
    }

    const results = performSearch(query);

    if (resultsCount) {
        resultsCount.textContent = results.length;
    }

    if (resultsContainer) {
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No results found for "<strong>${escapeHtml(query)}</strong>".</p>
                    <p>Try:</p>
                    <ul>
                        <li>Using different keywords</li>
                        <li>Checking your spelling</li>
                        <li>Using more general terms</li>
                        <li>Searching for specific sports (goalball, wrestling, archery, etc.)</li>
                        <li>Searching for people (Lindsay Ball, counselors, athletes)</li>
                        <li>Searching for years (2024, 2025)</li>
                    </ul>
                </div>
            `;
        } else {
            let html = '<div class="search-results-list">';

            results.forEach(result => {
                // Create excerpt with highlighted query
                let excerpt = result.content;
                if (excerpt.length > 200) {
                    excerpt = excerpt.substring(0, 200) + '...';
                }

                html += `
                    <article class="search-result">
                        <h3><a href="${result.url}">${escapeHtml(result.title)}</a></h3>
                        <p class="result-url">${result.url}</p>
                        <p class="result-excerpt">${highlightQuery(escapeHtml(excerpt), query)}</p>
                    </article>
                `;
            });

            html += '</div>';
            resultsContainer.innerHTML = html;
        }
    }

    // Announce results to screen readers
    announceSearchResults(results.length, query);
}

// Highlight query terms in text
function highlightQuery(text, query) {
    const queryWords = query.toLowerCase().split(/\s+/);
    let highlightedText = text;

    queryWords.forEach(word => {
        if (word.length >= 2) {
            const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        }
    });

    return highlightedText;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Escape special regex characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Announce search results to screen readers
function announceSearchResults(count, query) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'screen-reader-text';
    announcement.textContent = `Found ${count} result${count !== 1 ? 's' : ''} for ${query}`;
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Export for use in search results page
if (typeof window !== 'undefined') {
    window.displaySearchResults = displaySearchResults;
}
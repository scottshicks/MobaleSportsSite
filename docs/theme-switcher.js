/* ===================================
   MOBALE Theme Switcher
   Dynamically changes CSS variables based on user selection
   =================================== */

const themes = {
    red: {
        name: "Burgundy Red (Default)",
        primaryColor: "#5c0f1a",
        secondaryColor: "#d95565",
        textColor: "#000000",
        bgColor: "#ffffff",
        lightBg: "#fff5f6",
        borderColor: "#cc9ba0"
    },
    orange: {
        name: "Orange",
        primaryColor: "#8a4000",
        secondaryColor: "#b87700",
        textColor: "#000000",
        lightBg: "#f9f9f9",
        borderColor: "#999999"
    },
    blue: {
        name: "Ocean Blue",
        primaryColor: "#0f4d66",
        secondaryColor: "#2980b9",
        textColor: "#1a2833",
        lightBg: "#f0f8ff",
        borderColor: "#b8d4e8"
    },
    green: {
        name: "Forest Green",
        primaryColor: "#1e4d35",
        secondaryColor: "#38a169",
        textColor: "#0f2419",
        lightBg: "#f1f8f4",
        borderColor: "#b8e6cc"
    },
    purple: {
        name: "Royal Purple",
        primaryColor: "#3d1b5c",
        secondaryColor: "#7c3aed",
        textColor: "#1f0d2e",
        lightBg: "#f8f4fb",
        borderColor: "#d1b3e6"
    },
    navyCoral: {
        name: "Navy & Coral",
        primaryColor: "#0d2438",
        secondaryColor: "#e04a4a",
        textColor: "#1a2833",
        lightBg: "#f8f9fa",
        borderColor: "#c1c9d1"
    },
    tealAmber: {
        name: "Teal & Amber",
        primaryColor: "#064e51",
        secondaryColor: "#e07c30",
        textColor: "#122b33",
        lightBg: "#f0f7f8",
        borderColor: "#a8d1d4"
    },
    plumGold: {
        name: "Plum & Gold",
        primaryColor: "#3d1a2b",
        secondaryColor: "#b8860b",
        textColor: "#260f1c",
        lightBg: "#faf7f8",
        borderColor: "#d4b8c9"
    },
    forestRust: {
        name: "Forest & Rust",
        primaryColor: "#1a2b20",
        secondaryColor: "#a33d26",
        textColor: "#0f1912",
        lightBg: "#f4f6f5",
        borderColor: "#c1cec4"
    },
    slateRose: {
        name: "Slate & Rose",
        primaryColor: "#2d3748",
        secondaryColor: "#d53f8c",
        textColor: "#1a202c",
        lightBg: "#f7fafc",
        borderColor: "#cbd5e0"
    },
    indigoLime: {
        name: "Indigo & Lime",
        primaryColor: "#1e1b4b",
        secondaryColor: "#65a30d",
        textColor: "#0f0d2e",
        lightBg: "#f5f7ff",
        borderColor: "#bfb8e8"
    },
    highContrast: {
        name: "High Contrast",
        primaryColor: "#000000",
        secondaryColor: "#000000",
        textColor: "#000000",
        bgColor: "#ffffff",
        lightBg: "#ffffff",
        borderColor: "#000000"
    },
    inverted: {
        name: "Inverted (Dark Mode)",
        primaryColor: "#cccccc",
        secondaryColor: "#aaaaaa",
        textColor: "#ffffff",
        bgColor: "#080808",
        lightBg: "#161616",
        borderColor: "#555555"
    }
};

// Apply theme to CSS variables
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--bg-color', theme.bgColor || '#ffffff');
    root.style.setProperty('--light-bg', theme.lightBg);
    root.style.setProperty('--border-color', theme.borderColor);

    // Apply theme-specific classes to body for additional styling
    document.body.classList.remove('theme-inverted', 'theme-high-contrast');

    if (themeName === 'inverted') {
        document.body.classList.add('theme-inverted');
    } else if (themeName === 'highContrast') {
        document.body.classList.add('theme-high-contrast');
    }

    // Save preference to localStorage
    localStorage.setItem('mobale-theme', themeName);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('mobale-theme') || 'red';
    const themeSelector = document.getElementById('theme-selector');

    if (themeSelector) {
        themeSelector.value = savedTheme;
    }

    applyTheme(savedTheme);
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('theme-selector');

    if (themeSelector) {
        // Load saved theme
        loadSavedTheme();

        // Listen for theme changes
        themeSelector.addEventListener('change', function() {
            applyTheme(this.value);
        });
    }
});

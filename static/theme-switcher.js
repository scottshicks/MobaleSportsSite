/* ===================================
   MOBALE Theme Switcher
   Dynamically changes CSS variables based on user selection
   =================================== */

const themes = {
    orange: {
        name: "Orange (Default)",
        primaryColor: "#cc6611",
        secondaryColor: "#eeaa00",
        textColor: "#333333",
        lightBg: "#f9f9f9",
        borderColor: "#dddddd"
    },
    blue: {
        name: "Ocean Blue",
        primaryColor: "#1e6b8c",
        secondaryColor: "#4ba3c3",
        textColor: "#2c3e50",
        lightBg: "#f0f8ff",
        borderColor: "#d4e6f1"
    },
    green: {
        name: "Forest Green",
        primaryColor: "#2d6a4f",
        secondaryColor: "#52b788",
        textColor: "#1b4332",
        lightBg: "#f1f8f4",
        borderColor: "#d8f3dc"
    },
    red: {
        name: "Burgundy Red",
        primaryColor: "#9d2235",
        secondaryColor: "#d64550",
        textColor: "#3d1319",
        lightBg: "#fff5f6",
        borderColor: "#f8d7da"
    },
    purple: {
        name: "Royal Purple",
        primaryColor: "#5a2d82",
        secondaryColor: "#9b59b6",
        textColor: "#341948",
        lightBg: "#f8f4fb",
        borderColor: "#e8d5f2"
    },
    navyCoral: {
        name: "Navy & Coral",
        primaryColor: "#1a3a52",
        secondaryColor: "#ff6b6b",
        textColor: "#2c3e50",
        lightBg: "#f8f9fa",
        borderColor: "#dee2e6"
    },
    tealAmber: {
        name: "Teal & Amber",
        primaryColor: "#0d7377",
        secondaryColor: "#f4a261",
        textColor: "#264653",
        lightBg: "#f0f7f8",
        borderColor: "#cfe3e4"
    },
    plumGold: {
        name: "Plum & Gold",
        primaryColor: "#5d2a42",
        secondaryColor: "#daa520",
        textColor: "#3c1f2e",
        lightBg: "#faf7f8",
        borderColor: "#e8dce3"
    },
    forestRust: {
        name: "Forest & Rust",
        primaryColor: "#2f4538",
        secondaryColor: "#c85a3e",
        textColor: "#1e2f23",
        lightBg: "#f4f6f5",
        borderColor: "#dfe5e1"
    },
    slateRose: {
        name: "Slate & Rose",
        primaryColor: "#4a5568",
        secondaryColor: "#ed64a6",
        textColor: "#2d3748",
        lightBg: "#f7fafc",
        borderColor: "#e2e8f0"
    },
    indigoLime: {
        name: "Indigo & Lime",
        primaryColor: "#3730a3",
        secondaryColor: "#84cc16",
        textColor: "#1e1b4b",
        lightBg: "#f5f7ff",
        borderColor: "#ddd6fe"
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
    root.style.setProperty('--light-bg', theme.lightBg);
    root.style.setProperty('--border-color', theme.borderColor);

    // Save preference to localStorage
    localStorage.setItem('mobale-theme', themeName);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('mobale-theme') || 'orange';
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

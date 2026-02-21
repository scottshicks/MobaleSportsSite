@echo off
REM ===================================
REM Quick script to add theme-switcher.js to all HTML files
REM Double-click this file to run it
REM ===================================

echo Adding theme switcher script to all HTML files...
echo.

REM This adds the script tag before closing body tag in all HTML files
REM You'll still need to manually add the HTML dropdown to each page header

powershell -Command "(Get-Content index.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content index.html"
powershell -Command "(Get-Content about.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content about.html"
powershell -Command "(Get-Content programs.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content programs.html"
powershell -Command "(Get-Content sports.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content sports.html"
powershell -Command "(Get-Content news.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content news.html"
powershell -Command "(Get-Content contact.html) -replace '</body>', '    <script src=\"theme-switcher.js\"></script>^</body>' | Set-Content contact.html"

echo.
echo Done! JavaScript added to main pages.
echo.
echo NEXT STEPS:
echo 1. Add the dropdown HTML to each page header (see THEME_SELECTOR_HTML.txt)
echo 2. Add the CSS to styles.css (see THEME_SELECTOR_CSS.txt)
echo.
pause

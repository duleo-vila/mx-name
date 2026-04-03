// Select all your buttons and info divs
const buttons = document.querySelectorAll('.task-bar button');
const infoDivs = document.querySelectorAll('#Window .info');
const mainWindow = document.getElementById('Window');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove 'active' from all buttons and info divs
        buttons.forEach(b => b.classList.remove('active'));
        infoDivs.forEach(div => div.classList.remove('active'));

        // Add 'active' to the one we just clicked
        btn.classList.add('active');
        
        // Show the main window and the specific info inside it
        mainWindow.classList.add('show');
        infoDivs[index].classList.add('active');
    });
});


// This variable stays local to this script
let translations = {};

async function loadLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
}

// --- ADD THIS PART BELOW ---
// This runs automatically when the Profile page loads
document.addEventListener("DOMContentLoaded", () => {
    // Check localStorage for "lang". If it's empty, default to 'en'
    const savedLang = localStorage.getItem("lang") || "en"; 
    loadLanguage(savedLang);
});



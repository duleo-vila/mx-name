// =========================
// SETTINGS SIDEBAR
// =========================

const settingsWindow = document.getElementById('settings-window');
const settingsBtn = document.getElementById('settingsBtn');
const closeBtn = document.getElementById('closeBtn');

// hap sidebar
settingsBtn.addEventListener('click', () => {
    settingsWindow.classList.add('active');
});

// mbyll sidebar
closeBtn.addEventListener('click', () => {
    settingsWindow.classList.remove('active');
});


// =========================
// LANGUAGE SYSTEM
// =========================

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

    localStorage.setItem("lang", lang);
}


// radio buttons
document.querySelectorAll('input[name="lang"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        loadLanguage(e.target.value);
    });
});



const savedLang = localStorage.getItem("lang") || "en";
loadLanguage(savedLang);

// Select all buttons with your specific class
const openButtons = document.querySelectorAll('.glowing-border-btn');
const theWindow = document.querySelector('.the-window');
const infoSections = document.querySelectorAll('.the-window .info');
const clooseBtn = document.getElementById('clooseBtn');

openButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        openButtons.forEach(b => b.classList.remove('active'));


        infoSections.forEach(section => section.classList.remove('active'));


        btn.classList.add('active');


        if (infoSections[index]) {
            infoSections[index].classList.add('active');
        }

        theWindow.classList.add('show');

    });
});

clooseBtn.addEventListener('click', () => {
    theWindow.classList.remove('show');
});


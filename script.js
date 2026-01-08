// Theme Toggle
const toggle = document.getElementById('theme-switch');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved) {
        setTheme(saved);
        toggle.checked = saved === 'light';
    } else {
        const theme = prefersDark ? 'dark' : 'light';
        setTheme(theme);
        toggle.checked = theme === 'light';
    }
}

toggle.addEventListener('change', () => {
    setTheme(toggle.checked ? 'light' : 'dark');
});

loadTheme();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Navbar scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', scrollY > 100);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
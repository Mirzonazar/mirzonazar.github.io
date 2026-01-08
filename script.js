document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Logic
    const toggle = document.getElementById('theme-switch');
    toggle.addEventListener('change', () => {
        document.documentElement.setAttribute('data-theme', toggle.checked ? 'light' : 'dark');
    });

    // 2. Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        // Asosiy nuqta
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Ergashuvchi doira (smooth delay)
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // 3. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Magnetic Effect
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    // Hover effect for cursor
    document.querySelectorAll('a, button, .card').forEach(link => {
        link.addEventListener('mouseenter', () => follower.style.transform = 'translate(-50%, -50%) scale(2)');
        link.addEventListener('mouseleave', () => follower.style.transform = 'translate(-50%, -50%) scale(1)');
    });
});

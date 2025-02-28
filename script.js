document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    // Observe sections for animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling and centering the section
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 1.7) + (target.clientHeight / 2);
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

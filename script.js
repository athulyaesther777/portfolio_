// Basic scroll animation for timeline items
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slideIn 0.5s ease-in forwards";
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));
});

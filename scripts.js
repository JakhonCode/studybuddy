// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.our-mission h2, .our-mission p',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 2000,
        delay: anime.stagger(200) // Delay each element by 200ms
    });
});

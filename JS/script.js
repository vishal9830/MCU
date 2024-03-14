document.querySelector('header').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#990000';
});

// Change color of navigation links on mouseover and mouseout
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#cc0000';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#fff';
    });
});
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

// Change background color of sections on mouseover and mouseout
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f2f2f2';
    });
    section.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
    });
});

// Change font size of footer on double click
document.querySelector('footer').addEventListener('dblclick', function() {
    this.style.fontSize = '18px';
});

// Show alert when clicking on movie names
document.querySelectorAll('section li').forEach(movie => {
    movie.addEventListener('click', function() {
        alert("You clicked on " + this.innerText);
    });
});
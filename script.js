// Added event listener for scrolling
window.addEventListener('scroll', function() {
    // Get all sections
    var sections = document.querySelectorAll('.section');
    var scrollPosition = window.scrollY;

    // Loop through sections
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100; // Offset by 100px for better alignment

        // Add or remove 'active-section' class based on scroll position
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});

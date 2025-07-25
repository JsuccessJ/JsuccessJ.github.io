document.addEventListener('DOMContentLoaded', function() {
    // Create clear highlight button
    const clearButton = document.createElement('button');
    clearButton.className = 'clear-highlight';
    clearButton.textContent = '전체 보기';
    clearButton.title = 'Clear section highlight';
    document.body.appendChild(clearButton);

    // Get all navigation links
    const navLinks = document.querySelectorAll('.greedy-nav a[href^="/#"]');
    const sections = document.querySelectorAll('.section');

    // Function to clear all highlights
    function clearHighlights() {
        sections.forEach(section => {
            section.classList.remove('dimmed', 'highlighted');
        });
        clearButton.classList.remove('show');
    }

    // Function to highlight specific section
    function highlightSection(targetId) {
        // Clear previous highlights
        clearHighlights();
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // Dim all sections
            sections.forEach(section => {
                if (section !== targetSection) {
                    section.classList.add('dimmed');
                } else {
                    section.classList.add('highlighted');
                }
            });
            
            // Show clear button
            clearButton.classList.add('show');
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('/#')) {
                const targetId = href.substring(1); // Remove the '/'
                
                // Small delay to allow smooth scrolling
                setTimeout(() => {
                    highlightSection(targetId);
                }, 500);
            }
        });
    });

    // Clear highlight button event
    clearButton.addEventListener('click', clearHighlights);

    // Clear highlights when clicking outside sections
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.section') && 
            !e.target.closest('.greedy-nav') && 
            !e.target.closest('.clear-highlight')) {
            clearHighlights();
        }
    });

    // Clear highlights on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearHighlights();
        }
    });
}); 
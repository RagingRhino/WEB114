// Dylan Gregory  11-20-2025

// Mood Changer using event delegation on the document.

// STEP 1: Select the mod display element from the DOM
const moodDisplay = document.getElementById('moodDisplay');

// STEP 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood.
const moods = {
    happy:      { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
    calm:       { bg: '#80cbc4', text: '#004d40', message: 'Now this I could get used to!' },
    excited:    { bg: '#ff1744', text: '#ffffff', message: 'Let’s go! Big energy!' },
    chill:      { bg: '#90caf9', text: '#0d47a1', message: 'Just vibing and taking it slow.' },
    mysterious: { bg: '#4a148c', text: '#e1bee7', message: 'Something strange is in the air…' },
    reset: { bg: '#ffffff', text: '#000000', message: 'Choose a mood…' }
}

// STEP 3: Add a single click event listener to the document
// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
        // STEP 4:
        // Get the mood from the button's data-mood attribute
        const mood = event.target.getAttribute('data-mood');
    
        // Get the configuration for this mood from the moods object
        const config = moods[mood];

        // STEP 5:
        // Update the background color of the body
        document.body.style.backgroundColor = config.bg;
    
        // Update the text color of the body
        document.body.style.color = config.text;
    
        // Update the display message
        moodDisplay.textContent = config.message;
    }
});
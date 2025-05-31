// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/stoumnova/test@d0faf6eefb45029c9d92ff06b786c451f709ee95/5.svg';
svgImage.style.cssText = `
   max-width: 90%;  /* Задайте ширину меньше 100%, чтобы оставить отступы */
    max-height: 90%; /* Задайте высоту меньше 100%, чтобы оставить отступы */
    display: none;
    position: relative; /* Изменено на relative для корректного позиционирования */
    background-color: rgba(255, 255, 255, 1); /* Белый фон для изображения */
    border-radius: 10px; /* Добавлено закругление углов для акцента */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Тень для улучшения видимости */
`;
svgImage.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Change the background color of the body to black
document.body.style.backgroundColor = 'white';

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);

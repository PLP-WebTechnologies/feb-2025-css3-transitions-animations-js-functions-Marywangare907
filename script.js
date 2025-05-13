const button = document.getElementById('funBtn');

// Retrieve stored button text from localStorage
const storedText = localStorage.getItem('buttonText');
if (storedText) {
  button.textContent = storedText;
}

// Add event listener to toggle button text and animate on click
button.addEventListener('click', () => {
  const newText = button.textContent === 'Click Me!' ? 'Thanks for Clicking!' : 'Click Me!';
  button.textContent = newText;
  localStorage.setItem('buttonText', newText); // Store the new text in localStorage

  // Trigger a fun animation
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 500);
});

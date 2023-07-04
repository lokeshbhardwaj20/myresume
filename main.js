// Get the button element
const showHeadingBtn = document.getElementById('submitHandle');

// Add a click event listener to the button
showHeadingBtn.addEventListener('click', () => {
  // Create a new heading element
  const heading = document.createElement('h5');
  heading.textContent = 'Your request is submitted, Thankyou so much😃!!';  
  heading.style.color = 'green';
  
  // Get the container element where the heading will be displayed
  const container = document.getElementById('greenHeadingContainer');
  
  // Append the heading to the container
  container.appendChild(heading);
    // Set the duration (in milliseconds) for the heading to be displayed
    const duration = 2000;

    // Remove the heading after the specified duration
    setTimeout(() => {
      container.removeChild(heading);
    }, duration);
});
// ---------------------------------------------------------------------------------
//nav menu button//

const mobile_nav = document.querySelector(".mobile-nav-icon")
const headerElement = document.querySelector(".toggle-nav")

mobile_nav.addEventListener('click',()=>{
    // alert("btn clicked")
    headerElement.classList.toggle("active")
})
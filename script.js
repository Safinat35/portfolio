// JavaScript to handle the dynamic typing effect for the name

// Wait for the page to load
window.addEventListener('DOMContentLoaded', function () {
    const dynamicName = document.getElementById('dynamicName');
    const text = "Safinat Alamri"; // The name you want to dynamically type
    let index = 0;
  
    // Function to type the name dynamically
    function typeName() {
      if (index < text.length) {
        dynamicName.textContent += text[index];
        index++;
        setTimeout(typeName, 200); // Adjust typing speed (200ms per character)
      }
    }
  
    // Start typing the name
    typeName();
  });
  
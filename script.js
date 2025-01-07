// Sample JSON input (this could be fetched from a server or a file)
const jsonData = {
    "title": "Welcome to My Dynamic Page",
    "header": "Hello World!",
    "description": "This page loads content dynamically using JSON input. It is styled to match a Figma design.",
    "button": {
      "text": "Click Me!",
      "url": "https://joyful-sunshine-80a088.netlify.app/"
    },
    "footer": "© 2025 Dynamic Webpage"
  };
  
  // Function to load dynamic content
  function loadContent(data) {
      // Title of the page
      document.title = data.title;
  
      // Header content
      document.getElementById('header').textContent = data.header;
  
      // Description content
      document.getElementById('description').querySelector('p').textContent = data.description;
  
      // Button content
      const button = document.getElementById('button');
      button.textContent = data.button.text;
      button.setAttribute('href', data.button.url);
  
      // Footer content
      document.getElementById('footer').textContent = data.footer;
  }
  
  // Load content when the page is loaded
  window.onload = function() {
      loadContent(jsonData);
  };
  
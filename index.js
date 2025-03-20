// index.js

// 1. Remove the main element with id="main"
document.querySelector('main#main').remove();

// 2. Create newHeader variable pointing to an h1 element
// 3. Set its id to "victory"
// 4. Set its text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Enoch is the champion';  // Replace 'Enoch' with your actual name
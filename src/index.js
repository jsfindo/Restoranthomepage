
import { loadHome } from './homepage.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

// Comment out loadHome() and uncomment loadMenu() to see the menu!
// loadHome();
// Run the home page immediately on load
loadHome();

// Select your nav elements by their classes
const homeNav = document.querySelector('.home');
const menuNav = document.querySelector('.menu');
const contactNav = document.querySelector('.contact');

// Attach the click mechanics
homeNav.addEventListener('click', loadHome);
menuNav.addEventListener('click', loadMenu);
contactNav.addEventListener('click', loadContact);
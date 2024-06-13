
import { HeaderSection } from './header_acount.js';
import { MainContent } from './header2_acount.js';
import { toggleMenu } from './toggle_menu.js';

// Export the toggleMenu function so it can be used globally
window.toggleMenu = toggleMenu;

// Define the custom elements
customElements.define('header-section', HeaderSection);
customElements.define('main-content', MainContent);

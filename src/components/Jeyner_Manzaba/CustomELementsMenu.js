class HeaderContainer extends HTMLElement {
  static get observedAttributes() {
    return ['access-button-text', 'logo-src', 'menu-items'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.menuButton = this.shadowRoot.querySelector('#menu-button');
    this.closeButton = this.shadowRoot.querySelector('#close-menu');
    this.dropdownMenu = this.shadowRoot.querySelector('#dropdown-menu');

    this.menuButton.addEventListener('click', () => this.toggleMenu());
    this.closeButton.addEventListener('click', () => this.toggleMenu());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  toggleMenu() {
    this.dropdownMenu.classList.toggle('show');
  }

  render() {
    const accessButtonText = this.getAttribute('access-button-text') || 'Acceso clientes';
    const logoSrc = this.getAttribute('logo-src') || '../assets/img/logo.png';
    const menuItems = this.getAttribute('menu-items') ? JSON.parse(this.getAttribute('menu-items')) : [
      { text: 'Personas', link: '#' },
      { text: 'Empresas', link: '#' },
      { text: 'Pymes', link: '#' },
      { text: 'Microempresarios', link: '#' },
      { text: 'Cuentas', link: '#' },
      { text: 'Tarjetas', link: '#' },
      { text: 'Créditos', link: '#' },
      { text: 'Inversiones', link: '#' },
      { text: 'Servicios', link: '#' }
    ];

    this.shadowRoot.innerHTML = `
      <style>
        @import url('../css/home.css');
      </style>
      <div class="header-container">
        <div class="menu">
          <button id="menu-button">Menú</button>
          <nav id="dropdown-menu" class="hidden">
            <button id="close-menu">&times;</button>
            <ul>
               ${menuItems.map(item => `<li><a href="${item.link}">${item.text}</a></li>`).join('')}
            </ul>
          </nav>
        </div>
        <div class="logo">
          <img src="${logoSrc}" alt="Logo">
        </div>
        <div class="access">
          <button>${accessButtonText}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('header-container', HeaderContainer);

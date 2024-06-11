class HeaderContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
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
                <li>Personas</li>
                <li>Empresas</li>
                <li>Pymes</li>
                <li>Microempresarios</li>
                <li>Cuentas</li>
              </ul>
            </nav>
          </div>
          <div class="logo">
            <img src="../assets/img/logo.png" alt="Banco Pichincha">
          </div>
          <div class="access">
            <button>Acceso clientes</button>
          </div>
        </div>
      `;
  
      this.menuButton = this.shadowRoot.querySelector('#menu-button');
      this.closeButton = this.shadowRoot.querySelector('#close-menu');
      this.dropdownMenu = this.shadowRoot.querySelector('#dropdown-menu');
    }
  
    connectedCallback() {
      this.menuButton.addEventListener('click', () => this.toggleMenu());
      this.closeButton.addEventListener('click', () => this.toggleMenu());
    }
  
    toggleMenu() {
      this.dropdownMenu.classList.toggle('show');
    }
  }
  
  customElements.define('header-container', HeaderContainer);
  
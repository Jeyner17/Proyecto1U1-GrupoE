// headerSection.js
export class HeaderSection extends HTMLElement {
    connectedCallback() {
        const logoSrc = this.getAttribute('logo-src') || '../assets/img/logo.png';
        const links = JSON.parse(this.getAttribute('links') || '[]');

        this.innerHTML = `
            <header>
                <div class="container">
                    <div class="logo">
                        <img src="${logoSrc}" alt="Banco Pichincha">
                    </div>
                    <nav>
                        <ul>
                            ${links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
                        </ul>
                    </nav>
                    <button class="menu-button" onclick="toggleMenu()">Menu</button>
                </div>
            </header>
            <div id="sidebar">
                <button class="close-button" onclick="toggleMenu()">x</button>
                <ul>
                    ${links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
                </ul>
            </div>
        `;

        // Cerrar menú al hacer clic fuera de él
        this.handleClickOutsideMenu = this.handleClickOutsideMenu.bind(this);
        document.addEventListener('click', this.handleClickOutsideMenu);

        // Cerrar menú automáticamente en pantallas grandes
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleClickOutsideMenu);
        window.removeEventListener('resize', this.handleResize);
    }

    handleClickOutsideMenu(event) {
        const sidebar = this.querySelector("#sidebar");
        const menuButton = this.querySelector('.menu-button');
        if (sidebar.style.display === "block" && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            this.toggleMenu();
        }
    }

    handleResize() {
        const sidebar = this.querySelector("#sidebar");
        if (window.innerWidth > 768) {
            sidebar.style.display = "none";
        }
    }

}

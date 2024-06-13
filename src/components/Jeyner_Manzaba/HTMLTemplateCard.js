class SolucionCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.querySelector('#solucion-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        shadowRoot.querySelector('img').src = this.getAttribute('icono');
        shadowRoot.querySelector('img').alt = this.getAttribute('titulo');
        shadowRoot.querySelector('.card-title').innerText = this.getAttribute('titulo');
        shadowRoot.querySelector('.card-description').innerText = this.getAttribute('descripcion');
        shadowRoot.querySelector('.card-link').innerText = this.getAttribute('link-texto');
        shadowRoot.querySelector('.card-link').href = this.getAttribute('link');
    }
}

customElements.define('solucion-card', SolucionCard);
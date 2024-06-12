export class SolucionCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.querySelector('#solucion-card-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        shadowRoot.querySelector('img').src = this.getAttribute('img');
        shadowRoot.querySelector('.card-nombre').innerText = this.getAttribute('nombre');
        shadowRoot.querySelector('.card-area_conocimiento').innerText=this.getAttribute('area');
        shadowRoot.querySelector('.card-correo').innerText=this.getAttribute('correo');
        
    }
}

customElements.define('solucion-card', SolucionCard);

export class LeftInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentSlide = 0;
        this.images = [];
        this.captions = [];
    }

    static get observedAttributes() {
        return ['images', 'captions'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'images') {
            this.images = newValue.split(',');
        } else if (name === 'captions') {
            this.captions = newValue.split(',');
        }
        this.render();
        this.initializeCarousel();
    }

    connectedCallback() {
        this.render();
        this.initializeCarousel();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('../css/styles.css');
                @import url('../css/styles_left.css');
            </style>
            <div class="left">
                <h2>Bienvenido a Mi Banquito</h2>
                <p>Verifica en tu navegador que estás en Mi Banquito Web.</p>
                <div class="carousel-wrapper">
                    <div class="carousel">
                        <div class="carousel-container">
                            ${this.images.map((src, index) => `
                                <div class="carousel-slide">
                                    <img src="${src}" alt="Slide ${index + 1}">
                                    <div class="carousel-caption">${this.captions[index] || ''}</div>
                                </div>
                            `).join('')}
                        </div>
                        <button class="prev" onclick="this.getRootNode().host.moveSlide(-1)">&#10094;</button>
                        <button class="next" onclick="this.getRootNode().host.moveSlide(1)">&#10095;</button>
                    </div>
                </div>
                <p>Cuida tu usuario y contraseña.</p>
                <p>Antes de ingresar verifica tus datos.</p>
            </div>
        `;
    }

    initializeCarousel() {
        this.showSlide(this.currentSlide);
    }

    showSlide(index) {
        const slides = this.shadowRoot.querySelectorAll('.carousel-slide');
        if (index >= slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = slides.length - 1;
        } else {
            this.currentSlide = index;
        }
        const offset = -this.currentSlide * 100;
        this.shadowRoot.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    moveSlide(n) {
        this.showSlide(this.currentSlide + n);
    }
}

customElements.define('left-info', LeftInfo);

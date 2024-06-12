export class LeftInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentSlide = 0;
        this.images = [];
        this.captions = [];
        this.autoSlideInterval = null;
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

    disconnectedCallback() {
        clearInterval(this.autoSlideInterval); 
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
                    </div>
                </div>
            </div>
        `;
    }

    initializeCarousel() {
        this.showSlide(this.currentSlide);
        this.startAutoSlide();
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
        this.resetAutoSlide(); 
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.moveSlide(1);
        }, 3520); 
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
    }
}

window.customElements.define('left-info', LeftInfo);

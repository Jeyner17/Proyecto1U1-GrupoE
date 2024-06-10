class MyCarousel extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.currentSlide = 0;
    }

    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
        this.initializeCarousel();
    }

    mapComponentAttributes() {
        const attributeMapping = ['images', 'captions'];
        attributeMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = { value: '' };
            }
        });

        this.images = this.attributes.images.value.split(',');
        this.captions = this.attributes.captions ? this.attributes.captions.value.split(',') : [];
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                @import url('../css/styles_carousel.css');
            </style>
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
        `;
    }

    initializeCarousel() {
        this.showSlide(this.currentSlide);
    }

    showSlide(index) {
        const slides = this.shadowDOM.querySelectorAll('.carousel-slide');
        if (index >= slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = slides.length - 1;
        } else {
            this.currentSlide = index;
        }
        const offset = -this.currentSlide * 100;
        this.shadowDOM.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    moveSlide(n) {
        this.showSlide(this.currentSlide + n);
    }
}

window.customElements.define('my-carousel', MyCarousel);

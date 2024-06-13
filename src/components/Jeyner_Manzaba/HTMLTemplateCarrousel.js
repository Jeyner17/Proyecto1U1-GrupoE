class CarouselElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.getElementById('carousel-template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    this.carouselContainer = this.shadowRoot.querySelector('.carousel-container');
    this.prevButton = this.shadowRoot.querySelector('.prev');
    this.nextButton = this.shadowRoot.querySelector('.next');

    this.currentSlide = 0;
  }

  connectedCallback() {
    this.prevButton.addEventListener('click', () => this.moveSlide(-1));
    this.nextButton.addEventListener('click', () => this.moveSlide(1));
    this.renderSlides();
  }

  static get observedAttributes() {
    return ['slides'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'slides') {
      this.renderSlides();
    }
  }

  renderSlides() {
    const slidesData = JSON.parse(this.getAttribute('slides') || '[]');
    this.carouselContainer.innerHTML = slidesData.map(slide => `
      <div class="carousel-slide">
        <img src="${slide.image}" alt="">
        <div class="carousel-caption">${slide.caption}</div>
      </div>
    `).join('');
  }

  moveSlide(direction) {
    const totalSlides = this.carouselContainer.children.length;
    this.currentSlide = (this.currentSlide + direction + totalSlides) % totalSlides;
    const offset = -this.currentSlide * 100;
    this.carouselContainer.style.transform = `translateX(${offset}%)`;
  }
}

customElements.define('carousel-element', CarouselElement);

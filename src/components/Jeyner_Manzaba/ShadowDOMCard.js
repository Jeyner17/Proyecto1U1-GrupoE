class CardComponent extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.mapComponentAttributes();
      this.render();
    }
  
    mapComponentAttributes() {
      const attributeMapping = ['title', 'description', 'image'];
      attributeMapping.forEach(key => {
        if (!this.attributes[key]) {
          this.attributes[key] = { value: '' };
        }
      });
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        ${this.templateCss()}
        ${this.template()}
      `;
    }
  
    template() {
      return `
        <div class="card">
          <div class="image-container">
            <img src="${this.attributes.image.value}" alt="Imagen">
          </div>
          <h2>${this.attributes.title.value}</h2>
          <p>${this.attributes.description.value}</p>
        </div>
      `;
    }
  
    templateCss() {
      return `
        <style>
          :host {
            display: inline-block;
            margin: 10px;
            width: 250px;
            vertical-align: top;
            margin-bottom: 50px;
          }
          .card {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
            transition: box-shadow 0.3s ease;
          }
          .card:hover {
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }
          .image-container {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            transition: background-color 0.3s ease;
          }
          .image-container:hover {
            background-color: #294145;
          }
          .image-container img {
            width: 100%;
            height: auto;
          }
          h2 {
            font-size: 1.5rem;
            margin: 10px 0;
            color: #294145;
          }
          p {
            font-size: 1rem;
            color: #333;
          }
        </style>
      `;
    }
  
    disconnectedCallback() {
      this.remove();
    }
  }
  
  window.customElements.define('card-component', CardComponent);
  
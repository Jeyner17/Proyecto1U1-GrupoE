class SellButton extends HTMLElement {
    // Codigo personalizado del componente
    constructor() {
      super();
      // Definir los atributos y sus valores por defecto
      this.textoBoton = 'compra ahora';
    }
    
    // Método para observar cambios en los atributos
    static get observedAttributes() {
      return ['texto'];
    }
    
    // Método llamado cuando hay cambios en los atributos observados
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'texto') {
        this.textoBoton = newValue;
        this.render();
      }
    }
    
    connectedCallback() {
      this.render();
    }
    
    // Método para renderizar el contenido del botón
    render() {
      this.innerHTML = `
          <style>
            .btn-container button {
              background-color: #ffdd00;
              color: black;
              border: none;
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              border-radius: 5px;
            }
          </style>
          <div class="btn-container">
            <button>${this.textoBoton}</button>
          </div>`;
    }
  }
  
  // Registrar el elemento personalizado
  window.customElements.define('sell-button', SellButton);
  
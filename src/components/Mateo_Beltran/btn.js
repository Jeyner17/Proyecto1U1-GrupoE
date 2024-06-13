class SellButton extends HTMLElement {
    // Codigo personalizado del componente
    constructor() {
      super();
      // Definir los atributos y sus valores por defecto
      this.textoBoton = 'compra ahora';
      this.posicion = 'top-left';
      this.enlace = '#'; // Enlace por defecto
    }
    
    // Método para observar cambios en los atributos
    static get observedAttributes() {
      return ['texto', 'posicion', 'enlace'];
    }
    
    // Método llamado cuando hay cambios en los atributos observados
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'texto') {
        this.textoBoton = newValue;
        this.render();
      } else if (name === 'posicion') {
        this.posicion = newValue;
        this.render();
      } else if (name === 'enlace') {
        this.enlace = newValue;
        this.render();
      }
    }
    
    connectedCallback() {
      this.render();
    }
    
    // Método para renderizar el contenido del botón
    render() {
      // Determinar la posición del botón
      let positionStyle;
      if (this.posicion === 'top-left') {
        positionStyle = 'top: 10px; left: 10px;';
      } else if (this.posicion === 'top-right') {
        positionStyle = 'top: 10px; right: 10px;';
      } else if (this.posicion === 'bottom-left') {
        positionStyle = 'bottom: 10px; left: 10px;';
      } else if (this.posicion === 'bottom-right') {
        positionStyle = 'bottom: 10px; right: 10px;';
      } else {
        // Si la posición no es válida, usar por defecto top-left
        positionStyle = 'top: 10px; left: 10px;';
      }
      
      this.innerHTML = `
          <style>
            .btn-container {
              position: fixed;
              ${positionStyle}
              animation: shadow-animation 0.5s ease;
            }
            .btn-container button {
              background-color: #ffcc00;
              color: black;
              border: none;
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              border-radius: 5px;
              box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
            }
            @keyframes shadow-animation {
              0% {
                box-shadow: none;
              }
              100% {
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
              }
            }
          </style>
          <div class="btn-container">
            <a href="${this.enlace}">
              <button>${this.textoBoton}</button>
            </a>
          </div>`;
    }
  }
  
  // Registrar el elemento personalizado
  window.customElements.define('sell-button', SellButton);
  
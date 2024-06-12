class FaqTemplate extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                
.faq-container {
    display: flex;
    flex-direction: column; /* Alinear elementos verticalmente */
    width: 80%;
    margin: auto;
    max-width: 800px;
}

h2 {
    text-align: left; /* Alinear el título principal a la izquierda */
    margin-top: 20px;
    color: blue; /* Cambiar el color del texto a azul */
}

.tabs {
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
}

.tablinks {
   
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.tabcontent {
    display: none;
    border-top: 1px solid #ccc;
}

.accordion {
    background-color: #f1f1f1;
    color: #444;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    text-align: left;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    transition: background-color 0.3s;
}

.accordion:hover, .accordion.active {
    background-color: #ddd;
}

.panel {
    padding: 0 10px;
    display: none;
    background-color: white;
    overflow: hidden;
}

footer {
    text-align: center;
    padding: 10px 0;
    background-color: #f1f1f1;
    margin-top: 20px;
}

            </style>
            <div class="faq-container">
                <h2>Preguntas frecuentes</h2>
                <div class="tabs">
                    <button class="tablinks active" data-tab="cuentaTransaccional" onclick="openTab(event, 'cuentaTransaccional')">Cuenta Transaccional</button>
                    <button class="tablinks" data-tab="tarjetaDebito" onclick="openTab(event, 'tarjetaDebito')">Tarjeta de débito</button>
                    <button class="tablinks" data-tab="bancaMovil" onclick="openTab(event, 'bancaMovil')">Banca móvil y web</button>
                </div>
            
                <div id="cuentaTransaccional" class="tabcontent" style="display: block;">
                    <button class="panel-button accordion">¿Qué es una Cuenta Transaccional?</button>
                    <div class="panel">
                        <p>Una cuenta transaccional es una cuenta bancaria que permite realizar depósitos y retiros de manera regular.</p>
                    </div>
            
                    <button class="panel-button accordion">¿Cómo abro una Cuenta Transaccional?</button>
                    <div class="panel">
                        <p>Para abrir una cuenta transaccional, debes acercarte a una sucursal con tu identificación y un comprobante de domicilio.</p>
                    </div>
            
                    <button class="panel-button accordion">¿Qué requisitos necesito?</button>
                    <div class="panel">
                        <p>Los requisitos para abrir una cuenta transaccional incluyen identificación válida, comprobante de domicilio y, en algunos casos, un depósito inicial.</p>
                    </div>
                </div>
            
                <div id="tarjetaDebito" class="tabcontent">
                    <button class="panel-button accordion">¿Qué es una Tarjeta de Débito?</button>
                    <div class="panel">
                        <p>Una tarjeta de débito es una tarjeta emitida por un banco para realizar transacciones financieras. Se utiliza para realizar pagos y retirar dinero directamente desde una cuenta bancaria.</p>
                    </div>
            
                    <!-- Agregar el resto del contenido de la pestaña Tarjeta de Débito -->
                </div>
            
                <div id="bancaMovil" class="tabcontent">
                    <button class="panel-button accordion">¿Qué es la Banca Móvil y Web?</button>
                    <div class="panel">
                        <p>La banca móvil y web es un servicio que permite a los clientes realizar transacciones bancarias a través de sus dispositivos móviles o navegadores web. Esto incluye funciones como consultar saldos, realizar transferencias, pagar facturas, entre otros.</p>
                    </div>
            
                    <!-- Agregar el resto del contenido de la pestaña Banca Móvil y Web -->
                </div>
            </div>
            
            <footer>
                <p>&copy; 2024 Mi Banquito. Todos los derechos reservados.</p>
            </footer>
        `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const tabs = this.shadowRoot.querySelectorAll('.tablinks');
        const tabContents = this.shadowRoot.querySelectorAll('.tabcontent');
        const accordions = this.shadowRoot.querySelectorAll('.accordion');
    
        tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                tabContents.forEach(content => content.style.display = 'none');
                tabs.forEach(t => t.classList.remove('active'));
                const tabName = event.currentTarget.getAttribute('data-tab');
                this.shadowRoot.getElementById(tabName).style.display = 'block';
                event.currentTarget.classList.add('active');
            });
        });
    
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                // Close all other panels
                accordions.forEach(a => {
                    if (a !== this) {
                        a.classList.remove('active');
                        a.nextElementSibling.style.display = 'none';
                    }
                });
    
                // Toggle the current panel
                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
}

customElements.define('faq-template', FaqTemplate);

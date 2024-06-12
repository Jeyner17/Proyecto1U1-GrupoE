// Custom Element para el encabezado
class HeaderSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="container">
                    <div class="logo">
                        <img src="../assets/img/logo.png" alt="Banco Pichincha">
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Tarjeta de débito Visa</a></li>
                            <li><a href="#">Características</a></li>
                            <li><a href="#">Canales digitales</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                        </ul>
                    </nav>
                    <button class="menu-button" onclick="toggleMenu()">Menu</button>
                </div>
            </header>
            <div id="sidebar">
    <button class="close-button" onclick="toggleMenu()">x</button>
    <ul>
        <li><a href="#">Tarjeta de débito Visa</a></li>
        <li><a href="#">Características</a></li>
        <li><a href="#">Canales digitales</a></li>
        <li><a href="#">Preguntas frecuentes</a></li>
    </ul>
</div>

        `;
        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            var sidebar = document.getElementById("sidebar");
            var targetElement = event.target;
            if (sidebar.style.display === "block" && !sidebar.contains(targetElement) && !document.querySelector('.menu-button').contains(targetElement)) {
                toggleMenu();
            }
        });
        // Cerrar menú automáticamente en pantallas grandes
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                var sidebar = document.getElementById("sidebar");
                sidebar.style.display = "none";
            }
        });
    }
}
customElements.define('header-section', HeaderSection);

// Custom Element para el contenido principal
class MainContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main>
                <div class="main-content">
                    <div class="left-section">
                        <h1>Abre tu Cuenta Transaccional</h1>
                        <p>Guarda tu dinero de manera segura y utilízalo cuando lo necesites para realizar transferencias o pagos.</p>
                    </div>
                    
                    <div class="right-section">       
                        <div class="form-container">
                            <h2>¡Empecemos! Ingresa tus datos</h2>
                            <form>
                                <label for="cedula">Cédula</label>
                                <input type="text" id="cedula" name="cedula" placeholder="Ingresa tu número de cédula">
                                <button type="submit">Continuar</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div class="info">
                    <div>Ábrela en <strong>10 minutos</strong></div>
                    <div>Depósito inicial <strong>$0</strong></div>
                    <div>Edad requerida <strong>+18 años</strong></div>
                    <div>Cédula <strong>Ecuatoriana</strong></div>
                </div>
            </main>
        `;
    }
}
customElements.define('main-content', MainContent);

// Script para manejar el toggle del menú
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}



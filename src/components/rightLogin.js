export class RightLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('../css/styles.css');
            </style>
            <div class="right">
                <h2>Accede a tu cuenta</h2>
                <input type="text" placeholder="Usuario" id="user">
                <input type="password" placeholder="Contraseña" id="password">
                <button id="loginButton">Ingresar</button>
                <a href="#">¿Olvidaste tu usuario?</a>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <div class="additional-buttons">
                    <button id="unlockButton">Desbloquea tu Banca Web</button>
                    <button id="registerButton">Regístrate a Banca Web</button>
                </div>
            </div>
        `;
    }
}

customElements.define('right-login', RightLogin);

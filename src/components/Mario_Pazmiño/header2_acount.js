// mainContent.js
export class MainContent extends HTMLElement {
    connectedCallback() {
        const leftTitle = this.getAttribute('left-title') || 'Abre tu Cuenta Transaccional';
        const leftDescription = this.getAttribute('left-description') || 'Guarda tu dinero de manera segura y utilízalo cuando lo necesites para realizar transferencias o pagos.';
        const formTitle = this.getAttribute('form-title') || '¡Empecemos! Ingresa tus datos';
        const formLabel = this.getAttribute('form-label') || 'Cédula';
        const formPlaceholder = this.getAttribute('form-placeholder') || 'Ingresa tu número de cédula';
        const buttonText = this.getAttribute('button-text') || 'Continuar';
        const infoItems = JSON.parse(this.getAttribute('info-items') || '[]');

        this.innerHTML = `
            <main>
                <div class="main-content">
                    <div class="left-section">
                        <h1>${leftTitle}</h1>
                        <p>${leftDescription}</p>
                    </div>
                    
                    <div class="right-section">       
                        <div class="form-container">
                            <h2>${formTitle}</h2>
                            <form>
                                <label for="cedula">${formLabel}</label>
                                <input type="text" id="cedula" name="cedula" placeholder="${formPlaceholder}">
                                <button type="submit">${buttonText}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="info">
                    ${infoItems.map(item => `<div>${item.text} <strong>${item.value}</strong></div>`).join('')}
                </div>
            </main>
        `;
    }
}

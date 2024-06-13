class FaqTemplate extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .faq-container {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin: auto;
                    max-width: 800px;
                }

                h2 {
                    text-align: left;
                    margin-top: 20px;
                    color: blue;
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
                    <slot name="tab-buttons"></slot>
                </div>
                <slot name="tab-content"></slot>
            </div>
            <footer>
                <p>&copy; 2024 Mi Banquito. Todos los derechos reservados.</p>
            </footer>
        `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.updateTabs();
    }

    updateTabs() {
        const tabs = this.querySelectorAll('.tablinks');
        const tabContents = this.querySelectorAll('.tabcontent');
        const accordions = this.querySelectorAll('.accordion');

        tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                tabContents.forEach(content => content.style.display = 'none');
                tabs.forEach(t => t.classList.remove('active'));
                const tabName = event.currentTarget.getAttribute('data-tab');
                this.querySelector(`#${tabName}`).style.display = 'block';
                event.currentTarget.classList.add('active');
            });
        });

        accordions.forEach(acc => {
            acc.addEventListener('click', function () {
                accordions.forEach(a => {
                    if (a !== this) {
                        a.classList.remove('active');
                        a.nextElementSibling.style.display = 'none';
                    }
                });

                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
}

customElements.define('faq-template', FaqTemplate);

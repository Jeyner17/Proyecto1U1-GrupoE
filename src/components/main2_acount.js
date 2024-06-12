class ContenedorCentral extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const contenedorCentral = document.createElement('div');
        contenedorCentral.classList.add('contenedor-central');

        const cajaContenido = document.createElement('div');
        cajaContenido.classList.add('caja-contenido');

        const imagen = document.createElement('div');
        imagen.classList.add('imagen');

        const titulo = document.createElement('h1');
        titulo.classList.add('titulo');
        titulo.innerHTML = 'Una cuenta.<br>Infinidad de posibilidades.';

        const parrafo = document.createElement('p');
        parrafo.classList.add('parrafo');
        parrafo.textContent = 'Guarda tu dinero en tu Cuenta Transaccional y accede a más productos financieros para cumplir tus sueños.';

        cajaContenido.appendChild(imagen);
        cajaContenido.appendChild(titulo);
        cajaContenido.appendChild(parrafo);

        contenedorCentral.appendChild(cajaContenido);

        shadow.appendChild(contenedorCentral);

        const style = document.createElement('style');
        style.textContent = `
            .contenedor-central {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%; /* Asegura que el contenedor ocupe toda la altura de la ventana */
            }

            .caja-contenido {
                display: inline-block;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                max-width: 100%; /* Ancho máximo para el contenido */
                width: 100%; /* Asegura que el contenido ocupe el 100% del ancho disponible */
            }

            .contenedor-central .caja-contenido .imagen {
                width: 100%;
                height: 350px; /* Ajusta la altura según sea necesario */
                background-image: url('https://static.vecteezy.com/system/resources/previews/002/988/584/large_2x/shopping-cartoon-woman-for-sale-concept-vector.jpg');
                background-size: contain; /* Ajusta la imagen para que se ajuste dentro del contenedor */
                background-repeat: no-repeat; /* Evita que la imagen se multiplique */
                background-position: center;
                border-radius: 10px 10px 0 0; /* Bordes redondeados solo en la parte superior */
            }

            .titulo {
                font-size: 24px;
                color: blue;
                margin: 20px 0 10px;
                text-align: center; /* Centra el título */
            }

            .parrafo {
                font-size: 16px;
                color: #666666;
                margin: 0 auto; /* Centra el párrafo horizontalmente */
                max-width: 400px; /* Ajusta el valor para limitar el ancho del párrafo */
                line-height: 1.5; /* Ajusta la altura de línea para mejorar la legibilidad */
                word-wrap: break-word; /* Asegura que las palabras largas se rompan y ajusten dentro del contenedor */
                text-align: center; /* Centra el texto dentro del párrafo */
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define('contenedor-central', ContenedorCentral);

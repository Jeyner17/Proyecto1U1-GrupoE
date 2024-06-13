// Crear un Shadow DOM
const shadowRoot = document.querySelector('section').attachShadow({ mode: 'open' });

// Parámetros para el contenido
const tarjetaImageURL = 'https://www.balancedbridge.com/wp-content/uploads/2020/10/credit-card-640w.jpg';
const beneficios = [
    'Puedes usar la tarjeta de débito Visa en todo el país y el resto del mundo.',
    'Accede a descuentos y promociones exclusivas de temporada.',
    'Paga en línea servicios como por ejemplo Netflix, Uber, Spotify y muchos más.',
    'Transacciona en más de 1400 cajeros automáticos de Banco Pichincha a nivel nacional y en más de 8.000 puntos Mi Vecino Pichincha.'
];

const secciones = [
    { icon: 'fas fa-money-bill-wave', title: 'Transfiere dinero', description: 'Recibe tu sueldo, depósitos, transferencias y realiza pagos a terceros.' },
    { icon: 'fas fa-shopping-cart', title: 'Paga servicios', description: 'Realiza pagos de tarjetas o pagos de +2500 servicios fácilmente.' },
    { icon: 'fas fa-mobile-alt', title: 'Controla tus movimientos', description: 'Revisa tu dinero en nuestra Banca móvil, Banca web o Qanat en tiempo real.' }
];

// Generar HTML para los beneficios
const beneficiosHTML = beneficios.map(beneficio => `<li>${beneficio}</li>`).join('');

// Generar HTML para las secciones
const seccionesHTML = secciones.map(seccion => `
    <div class="seccion">
        <i class="${seccion.icon}"></i>
        <h2>${seccion.title}</h2>
        <p>${seccion.description}</p>
    </div>
`).join('');

// Contenido HTML dentro del Shadow DOM
const contenidoHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        /* Estilos comunes */
        .tarjeta-debito {
            display: flex;
            justify-content: center;
            background-color: rgb(255, 255, 255);
            padding: 20px;
        }

        .contenido-principal {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .imagen-seccion {
            display: flex;
            align-items: center;
        }

        .imagen-tarjeta {
            margin-right: 20px;
            background-image: url('${tarjetaImageURL}');
            background-size: cover;
            width: 350px; /* Ancho de la imagen */
            height: 250px; /* Altura de la imagen */
            transition: transform 0.3s ease-in-out; /* Transición para la animación */
        }

        .imagen-tarjeta:hover {
            transform: scale(1.1); /* Agrandar imagen al pasar el mouse por encima */
        }

        .beneficios {
            max-width: 400px;
        }

        .beneficios h3 {
            color: blue;
        }

        .beneficios ul li {
            color: rgb(0, 0, 0);
            list-style-type: none;
            margin-bottom: 10px;
        }

        .beneficios ul li::before {
            content: "✔";
            margin-right: 5px;
            color: green; /* Color verde para los vistos */
        }

        .contenido-restante {
            display: flex;
            justify-content: center; /* Cambiado a justify-content: center */
            align-items: center;
            margin-top: 50px;
        }

        .seccion {
            text-align: center;
            flex: 1; /* Para que las secciones ocupen el mismo espacio */
            max-width: 200px; /* Ancho máximo de cada sección */
            margin: 0 10px; /* Margen horizontal entre las secciones */
            transition: transform 0.3s ease-in-out; /* Transición para la animación */
        }

        .seccion:hover {
            transform: translateY(-10px); /* Mover hacia arriba al pasar el mouse por encima */
        }

        .seccion i {
            font-size: 24px; /* Tamaño del ícono */
            color: blue;
            margin-bottom: 10px;
        }

        .seccion h2 {
            font-size: 18px; /* Tamaño del título */
            margin-bottom: 10px;
        }

        .seccion p {
            font-size: 14px; /* Tamaño del texto */
            color: #666;
        }

        /* Estilos para pantallas pequeñas */
        @media only screen and (max-width: 600px) {
            .imagen-tarjeta {
                display: none; /* Ocultar la imagen en pantallas pequeñas */
            }
        }
    </style>
    <div class="tarjeta-debito">
        <div class="contenido-principal">
            <div class="imagen-seccion">
                <div class="imagen-tarjeta"></div> <!-- Esta será la imagen de la tarjeta -->
                <div class="beneficios">
                    <h3>Conoce los beneficios</h3>
                    <ul>
                        ${beneficiosHTML}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class="contenido-restante">
        ${seccionesHTML}
    </div>
`;

// Insertar el contenido HTML dentro del Shadow Root
shadowRoot.innerHTML = contenidoHTML;

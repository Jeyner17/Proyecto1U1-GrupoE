// Crear un Shadow DOM
const shadowRoot = document.querySelector('section').attachShadow({ mode: 'open' });

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
            background-image: url('https://www.balancedbridge.com/wp-content/uploads/2020/10/credit-card-640w.jpg');
            background-size: cover;
            width: 350px; /* Ancho de la imagen */
            height: 250px; /* Altura de la imagen */
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
                        <li>Puedes usar la tarjeta de débito Visa en todo el país y el resto del mundo.</li>
                        <li>Accede a descuentos y promociones exclusivas de temporada.</li>
                        <li>Paga en línea servicios como por ejemplo Netflix, Uber, Spotify y muchos más.</li>
                        <li>Transacciona en más de 1400 cajeros automáticos de Banco Pichincha a nivel nacional y en más de 8.000 puntos Mi Vecino Pichincha.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class="contenido-restante">
        <div class="seccion">
            <i class="fas fa-money-bill-wave"></i>
            <h2>Transfiere dinero</h2>
            <p>Recibe tu sueldo, depósitos, transferencias y realiza pagos a terceros.</p>
        </div>
        <div class="seccion">
            <i class="fas fa-shopping-cart"></i>
            <h2>Paga servicios</h2>
            <p>Realiza pagos de tarjetas o pagos de +2500 servicios fácilmente.</p>
        </div>
        <div class="seccion">
            <i class="fas fa-mobile-alt"></i>
            <h2>Controla tus movimientos</h2>
            <p>Revisa tu dinero en nuestra Banca móvil, Banca web o Qanat en tiempo real.</p>
        </div>
    </div>
`;

// Insertar el contenido HTML dentro del Shadow Root
shadowRoot.innerHTML = contenidoHTML;

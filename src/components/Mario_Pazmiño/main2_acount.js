             // custom element


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
            
                    const titulo = document.createElement('slot');
                    titulo.name = 'titulo';
            
                    const parrafo = document.createElement('slot');
                    parrafo.name = 'parrafo';
            
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
                            height: 100%;
                        }
            
                        .caja-contenido {
                            display: inline-block;
                            padding: 20px;
                            background-color: #ffffff;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            border-radius: 10px;
                            max-width: 100%;
                            width: 100%;
                        }
            
                        .contenedor-central .caja-contenido .imagen {
                            width: 100%;
                            height: 350px;
                            background-image: url('https://static.vecteezy.com/system/resources/previews/002/988/584/large_2x/shopping-cartoon-woman-for-sale-concept-vector.jpg');
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center;
                            border-radius: 10px 10px 0 0;
                        }
            
                        .titulo {
                            font-size: 24px;
                            color: blue;
                            margin: 20px 0 10px;
                            text-align: center;
                        }
            
                        .parrafo {
                            font-size: 16px;
                            color: #666666;
                            margin: 0 auto;
                            max-width: 400px;
                            line-height: 1.5;
                            word-wrap: break-word;
                            text-align: center;
                        }
                    `;
                    shadow.appendChild(style);
                }
            }
            
            customElements.define('contenedor-central', ContenedorCentral);
            
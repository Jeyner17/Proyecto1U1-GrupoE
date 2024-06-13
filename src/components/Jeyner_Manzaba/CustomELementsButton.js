class CustomHelp extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.mapComponentAttributes();
      this.render();
      this.addEventListeners();
    }
  
    mapComponentAttributes() {
      const attributeMapping = ['text', 'url'];
      attributeMapping.forEach(key => {
        if (!this.attributes[key]) {
          this.attributes[key] = { value: '' };
        }
      });
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        ${this.templateCss()}
        ${this.template()}
      `;
    }
  
    template() {
      return `
        <div id="container">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">${this.attributes.text.value}</span>
          </button>
        </div>
      `;
    }
  
    templateCss() {
      return `
        <style>
          button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            background: transparent;
            padding: 0;
            font-size: inherit;
            font-family: inherit;
            &.learn-more {
              width: 12rem;
              height: auto;
              .circle {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                position: relative;
                display: block;
                margin: 0;
                width: 3rem;
                height: 3rem;
                background: #ffcc00;
                border-radius: 1.625rem;
                .icon {
                  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  background: #fff;
                  &.arrow {
                    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                    left: 0.625rem;
                    width: 1.125rem;
                    height: 0.125rem;
                    background: none;
                    &::before {
                      position: absolute;
                      content: '';
                      top: -0.25rem;
                      right: 0.0625rem;
                      width: 0.625rem;
                      height: 0.625rem;
                      border-top: 0.125rem solid #fff;
                      border-right: 0.125rem solid #fff;
                      transform: rotate(45deg);
                    }
                  }
                }
              }
              .button-text {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 0.75rem 0;
                margin: 0 0 0 1.85rem;
                color: #ffffff;
                font-weight: 700;
                line-height: 1.6;
                text-align: center;
                text-transform: uppercase;
              }
            }
            &:hover {
              .circle {
                width: 100%;
                .icon {
                  &.arrow {
                    background: #fff;
                    transform: translate(1rem, 0);
                  }
                }
              }
              .button-text {
                color: #fff;
              }
            }
          }
  
          @supports (display: grid) {
            body {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-gap: 0.625rem;
              grid-template-areas: ". main main .";
            }
            
            #container {
              grid-area: main;
              align-self: center;
              justify-self: center;
            }
          }
        </style>
      `;
    }
  
    addEventListeners() {
      this.shadowDOM.querySelector('button').addEventListener('click', () => {
        window.location.href = this.attributes.url.value;
      });
    }
  
    disconnectedCallback() {
      this.removeEventListeners();
    }
  
    removeEventListeners() {
      this.shadowDOM.querySelector('button').removeEventListener('click', () => {
        window.location.href = this.attributes.url.value;
      });
    }
  }
  
  window.customElements.define('button-help', CustomHelp);
  
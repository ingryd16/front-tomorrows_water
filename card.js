'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.foto = null
        this.title = 'titulo'
        this.nome = 'texto'
        this.cor = 'plum'
        // this.cor_hover = 'purple'
    }

    // atributos que eu quero que ele observe
    static get observedAttributes() {
        return ['foto','title','nome', 'cor'/* , 'cor_hover' */]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        // valor antigo / valor que será mudado
        this[nameAttr] = newValue
    }

    connectedCallback() {
        /* append: posso colocar quantos eu quiser adicionando virgula
        appendchild: posso colocar apenas um por vez. por isso que aqui criei dois
        se fosse no append ficaria: this.shadow.append(this.styles(), this.component()) */
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card{
                max-width: 414px;
                height: 712px;
                display: flex;
                flex-direction: column;
                
                place-items: center;
                background-color: ${this.cor};
                box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.2);
            }
            .card:hover{
                // width: 210px;
                // height: 310px;
                background-color: ${this.cor_hover};
                transition: .8s;
            }
            .card__title{
                color: #00000;
                font-size: 1.5rem ;
                font-weight: 600;
                padding-left: 20px;
                padding-right: 20px;
                line-height: 34px;
                flex-wrap: wrap;
                height: 30%;
                display: flex;
                place-items: end;
            }
            .card__text{
                color: #00000;
                font-size: 20px;
                padding-left: 20px;
                padding-right: 20px;
                height: 20%;
                display: flex;
                place-items: center;
            }
            .card__image{
                place-self: start;
                width: 414px;
                height: 300px;
                background-color: white;
                background-image: url(${this.foto});
                background-size: cover;
                }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
        const nome = document.createElement('div')
        nome.classList.add('card__title')
        nome.textContent = this.title
        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = this.nome
        card.append(imagem, nome, turma)
        return card
    }
}

customElements.define('card-noticia', card)
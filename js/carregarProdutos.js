'use strict'

import { produtos } from "./app.js"
let dados = await produtos();
// console.log(dados)

const cardProduct = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')

    

    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.nome;

    const description = document.createElement('p')
    description.classList.add('card__biography')
    description.textContent = dados.descricao;

    text_container.append(name /* description */)

    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = dados.imagem;

    card.append(img, text_container)

    return card

}

export const carregarProduct = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.produtos.map(cardProduct)
    container.append(...cards)
}

carregarProduct()
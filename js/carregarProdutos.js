'use strict'

import { produtos } from "./app.js"
let dados = await produtos();
console.log(dados)

const cardProduct = (dados) => {

const card = document.createElement('div')
card.classList.add('card')

const name = document.createElement('h2')
name.classList.add('card__name')
name.textContent = dados.nome;

const description = document.createElement('p')
description.classList.add('card__biography')
description.textContent = dados.descricao;

const img = document.createElement('img')
img.classList.add('card__img')
img.src = dados.imagem;

card.append(name, img, description)

return card

}

export const carregarProduct = async () => {

const container = document.getElementById('container-collections')
const cards =  dados.produtos.map(cardProduct)
container.append(...cards)
}

carregarProduct()
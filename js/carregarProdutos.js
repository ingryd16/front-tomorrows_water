'use strict'

import { produtos } from "./app.js"
let dados = await produtos();
// console.log(dados)

const virarCardMobile = (card) => {
    card.classList.toggle('virado'); // Adiciona ou remove a classe "virado" no card
  };

const cardProduct = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const text_container = document.createElement('div')
    text_container.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.nome;
    text_container.append(name)

    /* BACK CARD */
    const backCard = document.createElement('div')
    backCard.classList.add('back_card')

    const text_container_back = document.createElement('div')
    text_container_back.classList.add('text_container_back')

    const nameBack = document.createElement('h2')
    nameBack.classList.add('backcard__name')
    nameBack.textContent = dados.nome;
    
    const description = document.createElement('p')
    description.classList.add('card__biography')
    description.textContent = dados.descricao;
    
    text_container_back.append( nameBack, description)

    
    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = dados.imagem;
    img.alt = 'imagem dos produtos'
    
    backCard.appendChild(text_container_back)

    card.append(backCard, img, text_container )

    card.addEventListener('click', () => {
        if (card.classList.contains('virado')) {
          card.classList.remove('virado'); // Remove a classe "virado" se o card já estiver virado
        } else {
          card.classList.add('virado'); // Adiciona a classe "virado" se o card estiver na posição original
        }
      });

    return card

}

export const carregarProduct = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.produtos.map(cardProduct)
    container.append(...cards)
}

carregarProduct()
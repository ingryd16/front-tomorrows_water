'use strict'

const routes = {
    '/sobre_nos': '/pages/sobre-nos.html',
    '/projetos': '/pages/projetos.html',
    '/junte-se': '/pages/junte-se.html',
}

const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

}




// const teste = document.getElementById('#home')
// teste.addEventListener('click', handleClick)

window.route = route
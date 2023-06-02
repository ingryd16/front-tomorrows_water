'use strict'

window.addEventListener('load', function () {
    var loader = document.querySelector('.loading-container');
    var content = document.querySelector('#content');

    // Oculta o loader e exibe o conteúdo após um certo tempo (por exemplo, 3 segundos)
    setTimeout(function () {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 3000);
});
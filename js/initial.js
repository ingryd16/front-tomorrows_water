'use strict'

window.addEventListener('load', function () {

    var loader = document.querySelector('.loading-container');
    var content = document.querySelector('#content');

    setTimeout(function () {
        loader.style.opacity = '0';
        setTimeout(function () {
          loader.style.display = 'none';
          content.style.display = 'block';
          content.style.opacity = '1';
        }, 1000); // Tempo de espera adicional para a transição de cor ocorrer
      }, 2000);

});

'use strict'

async function createVoluntario(voluntarios) {
    const url = 'http://localhost:8080/v1/tomorrows-water/voluntario';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voluntarios)
    };
    // console.log(options);

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Dados enviados com sucesso para o servidor.');
        } else {
            console.log('Ocorreu um erro ao enviar os dados para o servidor.');
        }
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }
}

const form = document.querySelector(".row-1");
const nome = document.getElementById("input-nome");
const cpf = document.getElementById("input-cpf");
const email = document.getElementById("input-email-voluntario");
const telefone = document.getElementById("input-telefone-voluntario");
const dataNascimento = document.getElementById("input-data-nascimento");

const button = document.getElementById('submit-button-enviar');


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".error-message");

    // Adiciona a mensagem de erro
    small.textContent = message;

    // Adiciona a classe de erro
    formControl.classList.remove("success");
    formControl.classList.add("error");
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".success-message");

    small.textContent = message;
  
    // Adicionar a classe de sucesso
    formControl.classList.remove("error");
    formControl.classList.add("success");
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {

    if (nome.value === "") {
        setErrorFor(nome, "O nome é obrigatório!");
    } else {
        setSuccessFor(nome);
    }
    if (cpf.value === "") {
        setErrorFor(cpf, "O CPF é obrigatório!");
      
      } else {
        setSuccessFor(cpf);
      }

    if (email.value === "") {
        setErrorFor(email, "O e-mail é obrigatório!");
    } else if (!checkEmail(email.value)) {
        setErrorFor(email, "Por favor, insira um email válido!");
    } else {
        setSuccessFor(email);
    }

    if (telefone.value === "") {
        setErrorFor(telefone, "O telefone é obrigatório!");
      } else {
        setSuccessFor(telefone);
    }

      if (dataNascimento.value === "") {
        setErrorFor(dataNascimento, "A data de nascimento é obrigatória!");
      } else {
        setSuccessFor(dataNascimento);
      }
    
    
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();

    const selectElement = document.getElementById('selectGenero');
    const selectValue = selectElement.value;

    const voluntarios = {
        "id": "",
        "nome": nome.value,
        "cpf": cpf.value,
        "email": email.value,
        "telefone": telefone.value,
        "data_nascimento": dataNascimento.value,
        "id_genero": selectValue
    };

    createVoluntario(voluntarios);
    // console.log(voluntarios);
});
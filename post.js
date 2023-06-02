async function createRecado(recado) {
    const url = 'http://localhost:8080/v1/tomorrows-water/recado';
    const options = {
        method: 'POST',
        body: JSON.stringify(recado)
    };

    const response = await fetch(url, options);
    console.log(response);
}

const recado = {
    "id": "",
    "nome": "Cleyde Gomes da Silva",
    "email": "cleydegomes@gmail.com",
    "mensagem": "rua sem fim",
};

createRecado(recado);
console.log(recado);
/* 'use strict'
const form = document.querySelector(".forms");
const username = document.getElementById("input-nome");
const email = document.getElementById("input-email");
const password = document.getElementById("descricao-input");
const button = document.getElementById('submit-button');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }
  console.log(usernameValue);
  

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
  console.log(emailValue);
  

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }
  console.log(passwordValue);
  

  const formControls = form.querySelectorAll(".row-1");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.classList.contains("success");
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");

  // Adiciona a mensagem de erro
  // small.innerText = message;

  // Adiciona a classe de erro
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} */
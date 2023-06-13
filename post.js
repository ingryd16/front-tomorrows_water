'use strict'


async function createRecado(recado) {
  const url = 'http://localhost:8080/v1/tomorrows-water/recado';
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recado)
  };

  try {
      const response = await fetch(url, options);
      if (response.ok) {
          console.log('Dados enviados com sucesso para o servidor.');
          return true;
      } else {
          console.log('Ocorreu um erro ao enviar os dados para o servidor.');
          return false;
      }
  } catch (error) {
      console.error('Ocorreu um erro na requisição:', error);
      return false;
  }
}

const form = document.querySelector(".forms");
const username = document.getElementById("input-nome");
const email = document.getElementById("input-email");
const message = document.getElementById("descricao-input");
const button = document.getElementById('submit-button');
const successMessage = document.getElementById("success-message");

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");

  // Adiciona a mensagem de erro
  small.innerText = message;

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
  // Função para verificar o formato do email
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
  let formIsValid = true;

  if (username.value.trim() === "") {
      setErrorFor(username, "O nome de usuário é obrigatório.");
      formIsValid = false;
  } else {
      setSuccessFor(username);
  }

  if (email.value.trim() === "") {
      setErrorFor(email, "O email é obrigatório!");
      formIsValid = false;
  } else if (!checkEmail(email.value)) {
      setErrorFor(email, "Por favor, insira um email válido!");
      formIsValid = false;
  } else {
      setSuccessFor(email);
  }

  if (message.value.trim() === "") {
      setErrorFor(message, "A mensagem é obrigatória!");
      formIsValid = false;
  } else {
      setSuccessFor(message);
  }

  return formIsValid;
}

function showSuccessMessage() {
  successMessage.innerText = "Recado enviado com sucesso!";
  successMessage.style.display = "block";

  setTimeout(function () {
      successMessage.style.opacity = 0;
      setTimeout(function () {
          successMessage.style.display = "none";
          successMessage.style.opacity = 1;
      }, 1000); // Tempo de espera adicional para a transição de opacidade ocorrer
  }, 3000);
}

function resetForm() {
  // Limpar os campos de entrada
  username.value = "";
  email.value = "";
  message.value = "";

  // Remover mensagens de erro e classes de erro/sucesso
  const formControls = form.querySelectorAll(".row-1");
  formControls.forEach((formControl) => {
      const small = formControl.querySelector(".error-message");
      small.innerText = "";
      formControl.classList.remove("error");
      formControl.classList.remove("success");
  });
}

button.addEventListener("click", async (e) => {
  e.preventDefault();

  if (checkInputs()) {
      const recado = {
          "id": "",
          "nome": username.value,
          "email": email.value,
          "mensagem": message.value,
      };

      const success = await createRecado(recado);
      if (success) {
          showSuccessMessage();
          // Limpar os campos do formulário após o envio bem-sucedido
          resetForm();
      }
  }
});



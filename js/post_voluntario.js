'use strict';

async function createVoluntario(voluntarios) {
  const url = 'https://tomorrows-water.onrender.com/v1/tomorrows-water/voluntario';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(voluntarios)
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

const form = document.querySelector(".row-1");
const nome = document.getElementById("input-nome");
const cpf = document.getElementById("input-cpf");
const email = document.getElementById("input-email-voluntario");
const telefone = document.getElementById("input-telefone-voluntario");
const dataNascimento = document.getElementById("input-data-nascimento");
const successMessage = document.getElementById('success-mensagem');

const button = document.getElementById('submit-button-enviar');

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

  // Limpa a mensagem de erro
  const small = formControl.querySelector(".error-message");
  small.innerText = "";

  // Adiciona a classe de sucesso
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkEmail(input) {
  const emailValue = input.value.trim();
  if (emailValue === "") {
    setErrorFor(input, "O e-mail é obrigatório!");
    return false;
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(input, "Por favor, insira um email válido!");
    return false;
  } else {
    setSuccessFor(input);
    return true;
  }
}

function isValidEmail(email) {
  // Utilize sua própria expressão regular para validar o email
  // Este é apenas um exemplo simples
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInputs() {
  let formIsValid = true;

  if (nome.value.trim() === "") {
    setErrorFor(nome, "O nome é obrigatório!");
    formIsValid = false;
  } else {
    setSuccessFor(nome);
  }

  if (cpf.value.trim() === "") {
    setErrorFor(cpf, "O CPF é obrigatório!");
    formIsValid = false;
  } else {
    setSuccessFor(cpf);
  }

  if (!checkEmail(email)) {
    formIsValid = false;
  }

  if (telefone.value.trim() === "") {
    setErrorFor(telefone, "O telefone é obrigatório!");
    formIsValid = false;
  } else {
    setSuccessFor(telefone);
  }

  if (dataNascimento.value.trim() === "") {
    setErrorFor(dataNascimento, "A data de nascimento é obrigatória!");
    formIsValid = false;
  } else {
    setSuccessFor(dataNascimento);
  }

  return formIsValid;
}

function showSuccessMessage() {
  successMessage.innerText = 'Inscrição realizada com sucesso!';
  successMessage.style.display = 'block';

  setTimeout(function () {
    successMessage.style.opacity = 0;
    setTimeout(function () {
      successMessage.style.display = 'none';
      successMessage.style.opacity = 1;
    }, 1000);
  }, 3000);
}

function resetForm() {
  form.reset();

  const formControls = form.querySelectorAll('.forms');
  formControls.forEach((formControl) => {
    const small = formControl.querySelector('.error-message');
    small.innerText = "";
    formControl.classList.remove('error');
    formControl.classList.remove('success');
  });
}

button.addEventListener("click", async (e) => {
  e.preventDefault();

  if (checkInputs()) {
    const selectElement = document.getElementById('selectGenero');
    const selectValue = selectElement.value;

    const voluntarios = {
      "id": "",
      "nome": nome.value.trim(),
      "cpf": cpf.value.trim(),
      "email": email.value.trim(),
      "telefone": telefone.value.trim(),
      "data_nascimento": dataNascimento.value.trim(),
      "id_genero": selectValue
    };

    const success = await createVoluntario(voluntarios);

    if (success) {
      showSuccessMessage();
      resetForm();
    }
  }
});

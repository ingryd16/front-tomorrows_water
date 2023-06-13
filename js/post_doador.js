'use strict';

async function createDoador(doador) {
  const url = 'http://localhost:8080/v1/tomorrows-water/doador';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(doador)
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log('Dados enviados com sucesso para o servidor.');
      const data = await response.json(); // Obter os dados da resposta como JSON
      console.log('Objeto JSON retornado:', data);
      console.log('ID retornado pela API:', data.doador.id);
      return data.doador.id;
    } else {
      console.log('Ocorreu um erro ao enviar os dados para o servidor.');
    }
  } catch (error) {
    console.error('Ocorreu um erro na requisição:', error);
  }
}

async function createDoacao(doacoes) {
  const url = 'http://localhost:8080/v1/tomorrows-water/doacao';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(doacoes)
  };

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

const form = document.querySelector('.forms');
const nome = document.getElementById('input-nome-doador');
const email = document.getElementById('input-email-doador');
const cpf = document.getElementById('input-cpf-doador');
const data_nascimento = document.getElementById('input-nascimento-doador');
const telefone = document.getElementById('input-telefone-doador');
const button = document.getElementById('submit-button-doador');
const successMessage = document.getElementById('success-message');


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.error-message');

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.classList.remove('success');
  formControl.classList.add('error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.classList.remove('error');
  formControl.classList.add('success');
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
  if (nome.value === '') {
    setErrorFor(nome, 'O nome é obrigatório!');
  } else {
    setSuccessFor(nome);
  }

  if (email.value === '') {
    setErrorFor(email, 'O email é obrigatório!');
  } else if (!checkEmail(email.value)) {
    setErrorFor(email, 'Por favor, insira um email válido!');
  } else {
    setSuccessFor(email);
  }

  if (cpf.value === '') {
    setErrorFor(cpf, 'O CPF é obrigatório!');
  } else {
    setSuccessFor(cpf);
  }

  if (telefone.value === '') {
    setErrorFor(telefone, 'O telefone é obrigatório!');
  } else {
    setSuccessFor(telefone);
  }

  if (data_nascimento.value === "") {
    setErrorFor(data_nascimento, "A data de nascimento é obrigatória!");
  } else {
    setSuccessFor(data_nascimento);
  }
}

function showSuccessMessage() {
  successMessage.innerText = 'Doação realizada com sucesso!';
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
  nome.value = '';
  email.value = '';
  cpf.value = '';
  data_nascimento.value = '';
  telefone.value = '';

  const formControls = form.querySelectorAll('.forms');
  formControls.forEach((formControl) => {
    const small = formControl.querySelector('.error-message');
    small.innerText = "";
    formControl.classList.remove('error');
    formControl.classList.remove('success');
  });
}

button.addEventListener('click', async (e) => {
  e.preventDefault();
  checkInputs()

  const selectElement = document.getElementById('preco_doacao');
  const selectValue = selectElement.value;

  const selectTipo = document.getElementById('tipo_doacao');
  const selectValueTipo = selectTipo.value;

  const doador = {
    "nome": nome.value,
    "email": email.value,
    "cpf": cpf.value,
    "data_nascimento": data_nascimento.value,
    "telefone": telefone.value
  };

  try {
    const doadorId = await createDoador(doador);

    if (doadorId) {
      const doacoes = {
        "id": '',
        "id_doador": doadorId,
        "tipo_doacao": selectValueTipo,
        "valor": selectValue
      };

      await createDoacao(doacoes);
      console.log('Dados da doação enviados com sucesso.');

      showSuccessMessage(); // Exibir mensagem de sucesso após a conclusão do envio
      resetForm(); // Limpar o formulário após o envio bem-sucedido
    }
  } catch (error) {
    console.error(error);
  }
});



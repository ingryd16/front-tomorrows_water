// 'use strict';

// async function createDoador(doador) {
//   const url = 'http://localhost:8080/v1/tomorrows-water/doador';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(doador)
//   };

//   try {
//     const response = await fetch(url, options);
//     if (response.ok) {
//       console.log('Dados enviados com sucesso para o servidor.');
//     } else {
//       console.log('Ocorreu um erro ao enviar os dados para o servidor.');
//     }
//   } catch (error) {
//     console.error('Ocorreu um erro na requisição:', error);
//   }
// }

// async function createDoacao(doacoes) {
//   const url = 'http://localhost:8080/v1/tomorrows-water/doacao';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(doacoes)
//   };

//   try {
//     const response = await fetch(url, options);
//     if (response.ok) {
//       console.log('Dados enviados com sucesso para o servidor.');
//     } else {
//       console.log('Ocorreu um erro ao enviar os dados para o servidor.');
//     }
//   } catch (error) {
//     console.error('Ocorreu um erro na requisição:', error);
//   }
// }

// const form = document.querySelector('.forms');
// const nome = document.getElementById('input-nome-doador');
// const email = document.getElementById('input-email-doador');
// const cpf = document.getElementById('input-cpf-doador');
// const data_nascimento = document.getElementById('input-nascimento-doador');
// const telefone = document.getElementById('input-telefone-doador');
// const button = document.getElementById('submit-button-doador');

// // function setErrorFor(input, message) {
// //   const formControl = input.parentElement;
// //   const small = formControl.querySelector('.error-message');

// //   // Adiciona a mensagem de erro
// //   small.innerText = message;

// //   // Adiciona a classe de erro
// //   formControl.classList.remove('success');
// //   formControl.classList.add('error');
// // }

// // function setSuccessFor(input) {
// //   const formControl = input.parentElement;

// //   // Adicionar a classe de sucesso
// //   formControl.classList.remove('error');
// //   formControl.classList.add('success');
// // }

// // function checkEmail(email) {
// //   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// // }

// // function checkInputs() {
// //   if (razaoSocial.value === '') {
// //     setErrorFor(razaoSocial, 'A razão social da empresa é obrigatória!');
// //   } else {
// //     setSuccessFor(razaoSocial);
// //   }

// //   if (cnpj.value === '') {
// //     setErrorFor(cnpj, 'O CNPJ é obrigatório!');
// //   } else {
// //     setSuccessFor(cnpj);
// //   }

// //   if (email.value === '') {
// //     setErrorFor(email, 'O email é obrigatório!');
// //   } else if (!checkEmail(email.value)) {
// //     setErrorFor(email, 'Por favor, insira um email válido!');
// //   } else {
// //     setSuccessFor(email);
// //   }

// //   if (telefone.value === '') {
// //     setErrorFor(telefone, 'O telefone é obrigatório!');
// //   } else {
// //     setSuccessFor(telefone);
// //   }
// // }

// button.addEventListener('click', async (e) => {
//   e.preventDefault();
// //   checkInputs();

// const selectElement = document.getElementById('preco_doacao');
// const selectValue = selectElement.value;

// const selectTipo = document.getElementById('tipo_doacao');
// const selectValueTipo = selectTipo.value;


//   const doador = {
//     "id": '',
//     "nome": nome.value,
//     "email": email.value,
//     "cpf": cpf.value,
//     "data_nascimento": data_nascimento.value,
//     "telefone": telefone.value
//   };


//     const doadorId = await createDoador(doador);
//     console.log(doador);

//     if (doadorId) {
//         const doacoes = {
//             "id": '',
//             "id_doador": doadorId,
//             "tipo_doacao": selectValueTipo,
//             "valor": selectValue
           
        
//         };

//         await createDoacao(doacoes);
//         console.log(doacoes);
        
//     }    
  

 
// });

'use strict';

async function createDoador(doador) {
  try {
    const doadorResponse = await fetch('http://localhost:8080/v1/tomorrows-water/doador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doador)
    });

    if (!doadorResponse.ok) {
      console.log('Ocorreu um erro ao criar o doador.');
      return null;
    }

    const doadorData = await doadorResponse.json();
    console.log('Doador criado com sucesso:', doadorData);
    return doadorData.id;
  } catch (error) {
    console.error('Ocorreu um erro na requisição do doador:', error);
    return null;
  }
}

async function createDoacao(doacao) {
  try {
    const doacaoResponse = await fetch('http://localhost:8080/v1/tomorrows-water/doacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doacao)
    });

    if (!doacaoResponse.ok) {
      console.log('Ocorreu um erro ao criar a doação.');
      return;
    }

    const doacaoData = await doacaoResponse.json();
    console.log('Doação criada com sucesso:', doacaoData);
  } catch (error) {
    console.error('Ocorreu um erro na requisição da doação:', error);
  }
}

const form = document.querySelector('.forms');
const nome = document.getElementById('input-nome-doador');
const email = document.getElementById('input-email-doador');
const cpf = document.getElementById('input-cpf-doador');
const data_nascimento = document.getElementById('input-nascimento-doador');
const telefone = document.getElementById('input-telefone-doador');
const button = document.getElementById('submit-button-doador');

button.addEventListener('click', async (e) => {
  e.preventDefault();

  const selectElement = document.getElementById('preco_doacao');
  const selectValue = selectElement.value;

  const selectTipo = document.getElementById('tipo_doacao');
  const selectValueTipo = selectTipo.value;

  const doador = {
    "id": '',
    "nome": nome.value,
    "email": email.value,
    "cpf": cpf.value,
    "data_nascimento": data_nascimento.value,
    "telefone": telefone.value
  };

  const doadorId = await createDoador(doador.id);

  if (doadorId) {
    const doacao = {
      "tipo_doacao": selectValueTipo,
      "valor": selectValue,
      "id_doador": doadorId
    };

    await createDoacao(doacao);
  }
});

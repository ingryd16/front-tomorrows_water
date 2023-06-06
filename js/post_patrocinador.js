async function createPatrocinador(patrocinador) {
    const url = 'http://localhost:8080/v1/tomorrows-water/patrocinador';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patrocinador)
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

const form = document.querySelector(".forms");
const razaoSocial = document.getElementById("input-razao-social");
const cnpj = document.getElementById("input-cnpj");
const email = document.getElementById("input-email");
const telefone = document.getElementById("input-telefone");
const button = document.getElementById('button-enviar');

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector(".error-message");

//     // Adiciona a mensagem de erro
//     small.innerText = message;

//     // Adiciona a classe de erro
//     formControl.classList.remove("success");
//     formControl.classList.add("error");
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;

//     // Adicionar a classe de sucesso
//     formControl.classList.remove("error");
//     formControl.classList.add("success");
// }

// function checkEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

// function checkInputs() {
//     if (username.value === "") {
//         setErrorFor(username, "O nome de usuário é obrigatório.");
//     } else {
//         setSuccessFor(username);
//     }
//     console.log(username.value);


//     if (email.value === "") {
//         setErrorFor(email, "O email é obrigatório!");
//     } else if (!checkEmail(email.value)) {
//         setErrorFor(email, "Por favor, insira um email válido!");
//     } else {
//         setSuccessFor(email);
//     }
//     console.log(email.value);


//     if (message.value === "") {
//         setErrorFor(message, "A mensagem é obrigatória!");
//     } else {
//         setSuccessFor(message);
//     }
//     console.log(message.value);


//     const formControls = form.querySelectorAll(".row-1");

//     const formIsValid = [...formControls].every((formControl) => {
//         return formControl.classList.contains("success");
//     });

//     if (formIsValid) {
//         console.log("O formulário está 100% válido!");
//     }
// }

button.addEventListener("click", (e) => {
    e.preventDefault();

    const patrocinador = {
        "id": "",
        "razao_social": razaoSocial.value,
        "cnpj": cnpj.value,
        "email": email.value,
        "telefone": telefone.value
    };

    createPatrocinador(patrocinador);
    console.log(patrocinador);
});
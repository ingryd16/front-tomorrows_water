async function createVoluntario(voluntario) {
    const url = 'http://localhost:8080/v1/tomorrows-water/voluntario';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voluntario)
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
const nome = document.getElementById("input-nome");
const cpf = document.getElementById("input-cpf");
const email = document.getElementById("input-email");
const telefone = document.getElementById("input-telefone");
const dataNascimento = document.getElementById("input-data-nascimento");

const idGenero = document.getElementById('genero');
const selectValue = idGenero.value;

// const genero = document.getElementById("genero");
const button = document.getElementById('button-enviar');


button.addEventListener("click", (e) => {
    e.preventDefault();

    const voluntario = {
        "id": "",
        "nome": nome.value,
        "cpf": cpf.value,
        "email": email.value,
        "telefone": telefone.value,
        "data_nascimento": dataNascimento.value,
        "id_genero": selectValue.value,
    };

    createPatrocinador(voluntario);
    console.log(voluntario);
});
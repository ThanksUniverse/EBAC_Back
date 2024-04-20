const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const mensagem = document.getElementById('result');
const submitsSalvos = document.getElementById('allSubmits');
const notNull = document.querySelectorAll('.notNull');

let submissoes = [];
let id = 1;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Nome:', nome.value);
    console.log('E-mail:', email.value);
    console.log('CPF:', cpf.value);
    console.log('CEP:', cep.value);
    console.log('Rua:', rua.value);
    console.log('Bairro:', bairro.value);
    console.log('Cidade:', cidade.value);
    console.log('UF:', uf.value);
});

function isEmpty(elem) {
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode estar vazio.<br>` : ``
}

function validateEmail(email) {
    return email.value.match(/^[\w.-]+@[\w.-]+\.[a-z]{2,3}$/) ? '' : `Digite um <strong>e-mail</strong> válido.`;
}

function validaCEP(elem) {
    let regex = /^[0-9]{5}-[0-9]{3}$/;
    if (!regex.test(elem.value)) {
        return `Digite um <strong>CEP</strong> válido.`;
    }
    return '';
}

// ValidaCpf
function validaCPF(cpf) {
    let cpfLimpo = cpf.value.replace(/\D/g, '');
    if (!cpfLimpo.match(/^[0-9]{11}$/)) {
        return `Digite um <strong>CPF</strong> válido.`;
    }
    return '';
}

function updateAddress(data) {
    console.log(data);
    if (!data.erro) {
        rua.value = data.logradouro;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        uf.value = data.uf;
        mensagem.innerHTML = '';
    }
    else
    {
        rua.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value = '';
        mensagem.innerHTML = 'CEP não encontrado.';
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    mensagem.innerHTML = '';

    let msg = [];

    notNull.forEach(field => {
        let fieldState = isEmpty(field);
        fieldState.length > 1 ? msg.push(fieldState) : '';
    })

    const isEmail = validateEmail(email);
    isEmail.length > 1 ? msg.push(isEmail) : '';

    const isCEP = validaCEP(cep);
    isCEP.length > 1 ? msg.push(isCEP) : '';

    const isCPF = validaCPF(cpf);
    isCPF.length > 1 ? msg.push(isCPF) : '';

    if (isCEP.length == '' && msg.length == 0)
    {
        const script = document.createElement('script');
        script.src = `https://viacep.com.br/ws/${cep.value}/json/?callback=updateAddress`;
        document.body.appendChild(script);
    }

    msg.forEach(m => {
        mensagem.innerHTML += `<p>${m}</p>`;
    });


    if (mensagem.innerHTML == '') {
        mensagem.innerHTML = 'Formulário enviado com sucesso!';
        mensagem.style.color = 'green';

        submissoes.push({
            id: id++,
            nome: nome.value,
            email: email.value,
            cpf: cpf.value,
            cep: cep.value,
            rua: rua.value,
            bairro: bairro.value,
            cidade: cidade.value,
            uf: uf.value
        });
        displaySubmissions();
    }
});

function displaySubmissions() {
    if (submissoes.length > 3)
    {
        submissoes.shift();
    }
    submitsSalvos.innerHTML = '';
    submissoes.forEach(sub => {
        const subDiv = document.createElement('div');
        subDiv.style.border = '1px solid #ccc';
        subDiv.style.padding = '10px';
        subDiv.style.margin = '5px';
        subDiv.innerHTML = `
            <p>ID: ${sub.id}</p>
            <p>Nome: ${sub.nome}</p>
            <p>Email: ${sub.email}</p>
            <p>CPF: ${sub.cpf}</p>
            <p>CEP: ${sub.cep}</p>
            <p>Rua: ${sub.rua}</p>
            <p>Bairro: ${sub.bairro}</p>
            <p>Cidade: ${sub.cidade}</p>
            <p>UF: ${sub.uf}</p>
        `;
        submitsSalvos.appendChild(subDiv);
    });
}
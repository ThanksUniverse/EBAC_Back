// Função para calcular a média das notas
const calcularMedia = (notas) => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    return media;
} // Ok!

// Função para verificar a aprovação
const aprovacao = (notas) => {
    const media = calcularMedia(notas);
    const condicao = media >= 8 ? "aprovado" : "reprovado";
    return `Média: ${media.toFixed(2)} - Resultado: ${condicao}`;
} // Ok!

// Função recursiva para contagem regressiva
const contagemRegressiva = (numero) => {
    console.log(numero);
    if (numero > 0) {
        contagemRegressiva(numero - 1);
    }
} // Ok!

//contagemRegressiva(50);

// Formulário para cálculo da média
const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        if (formulario1.classList.contains('erro')) {
            return false;
        }

        const dados = new FormData(formulario1);
        const notas = [];

        for (let valor of dados.values()) {
            const numero = Number(valor);
            if (!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        const texto = aprovacao(notas);

        document.getElementById('resultado').innerHTML = texto;
    });
} // Ok!

// Função genérica para validar campos
const validaCampo = (elemento, regex, mensagem) => {
    elemento.addEventListener('blur', () => {
        if (elemento.value === "" || !regex.test(elemento.value)) {
            document.querySelector('.mensagem').innerHTML = mensagem;
            elemento.classList.add('erro');
            elemento.parentNode.classList.add('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
        }
    });
} // Ok!

// Validação de campos obrigatórios
const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
camposObrigatorios.forEach((campo) => {
    validaCampo(campo, /.+/, "Verifique o preenchimento dos campos em vermelho");
}); // Um pouco confuso com /.+/

// Validação de campos numéricos
const camposNumericos = document.querySelectorAll('input.numero');
camposNumericos.forEach((campo) => {
    validaCampo(campo, /^[\d.]+$/, "Verifique o preenchimento dos campos em destaque");
}); // Ok!

// Validação de campos de email
const camposEmail = document.querySelectorAll('input.email');
camposEmail.forEach((campo) => {
    validaCampo(campo, /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/, "Verifique o preenchimento dos campos em destaque");
}); // Ok!

class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco;
        this.nome = nome;
        this.saldo = saldo;
    }
}

class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.movimentacoes = [];
    }

    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(movimento => this.movimentacoes.push(movimento));
    }

    resumo() {
        let valorAtualizado = 0;
        let tipo = '';
        const regex = new RegExp('x', 'gi')
        this.movimentacoes.forEach(movimento => {
            movimento.banco = movimento.banco.replace(regex, "y")
            if (!movimento.nome.match(regex))
                valorAtualizado += movimento.saldo;
            tipo += movimento.nome + ' | ';
        })
        return tipo + valorAtualizado;
    }
}

const m01 = new Movimentacao("Banco do Brasil X", "Salário", 1000);
const m02 = new Movimentacao("Banco do Brasil Y", "Aluguel", -500);
const m03 = new Movimentacao("Banco do Brasil", "Luz", -100);
const m04 = new Movimentacao("Banco do Brasil", "Imposto", 4044);

const registro01 = new Registro(23, 10, 2002)
registro01.novaMovimentacao(m01, m02, m03, m04);
console.log("O saldo atual é: " + registro01.resumo());

const movimentacoesGerais = [m01, m02, m03, m04];
movimentacoesGerais.map( elemento => {
    console.log(elemento);
} )
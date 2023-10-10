export default function(nome, idade, segundosCrescer) {

    this.nome = nome;
    this.idade = idade;

    setInterval(() => {
            console.log(this.nome + " fez aniversario e agora tem: " + this.idade++ + " anos");
        }, segundosCrescer * 1000);

}
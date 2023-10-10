function Person() { // Old Method

    const pessoa = this;
    this.idade = 0;

    setInterval(function () {
        console.log(pessoa.idade++);
    }, 2000);

}
//const p1 = new Person();

function PersonNew()
{
    this.idade = 0;

    setInterval(() => {
        console.log(this.idade++);
    }, 1000)
}

const p2 = new PersonNew();

// Arrow Functions
/* 
(p1, p2, ...Person, pX) => {}

 */
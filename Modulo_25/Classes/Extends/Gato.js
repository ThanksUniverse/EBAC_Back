import Animal from '../Animal.js'

class Gato extends Animal {
    falar() {
        console.log(this.especie + ' fala miau miau')
    }

    comer() {
        console.log(this.especie + ' come ração de gato ')
    }
}

export default Gato
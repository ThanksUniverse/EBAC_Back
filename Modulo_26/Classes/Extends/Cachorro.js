import Animal from '../Animal.js'

class Cachorro extends Animal {
    falar() {
        console.log(this.especie + ' fala au au au')
    }

    comer() {
        console.log(this.especie + ' come ração ')
    }
}

export default Cachorro
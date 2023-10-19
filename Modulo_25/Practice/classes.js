class Animal {

    constructor(especie)
    {
        this.especie = especie
    }

    falar()
    {
        console.log(this.especie + ' fala');
    }

    comer()
    {
        console.log(this.especie + ' come');
    }

    dormir()
    {
        console.log(this.especie + ' dorme');
    }
}

class Cachorro extends Animal {
    falar()
    {
        console.log(this.especie + ' cachorro late');
    }

    comer()
    {
        console.log(this.especie + ' cachorro come');
    }

    dormir()
    {
        console.log(this.especie + ' cachorro dorme');
    }
}

const cachorro = new Cachorro('cachorro')
cachorro.falar();
cachorro.comer();
cachorro.dormir();
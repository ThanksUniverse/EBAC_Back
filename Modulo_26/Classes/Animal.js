export default class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    falar() {
        console.log(this.especie + ' fala ');
    }

    comer() {
        console.log(this.especie + ' come ');
    }

    dormir() {
        console.log(this.especie + ' dorme ');
    }
}

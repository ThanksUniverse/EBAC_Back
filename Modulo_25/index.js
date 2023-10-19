import Gato from './Classes/Extends/Gato.js';
import Cachorro from './Classes/Extends/Cachorro.js';

console.log("Animal --------------------------------------");
const meuGato = new Gato('Gato');
meuGato.falar();
meuGato.comer();
const meuCachorro = new Cachorro('Cachorro');
meuCachorro.falar();
meuCachorro.comer();
console.log("Animal --------------------------------------");

import People from './Exports/pessoas.js';
People.forEach(pessoa => console.log(pessoa));

import { title, Color } from './Exports/Things.js';

console.log(title); 
console.log(Color); 

import Pessoa from './Classes/Pessoa.js';
const person = new Pessoa('Pedro', 20, 3);
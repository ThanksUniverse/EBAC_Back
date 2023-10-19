import pessoas from './Exports/pessoas.js'

// Filtra meses
const filteredPeople = pessoas.filter( (pessoa)=> {
    return pessoa.name === "Pedro"
})

console.log(filteredPeople)

let toPrint = ''

// Lista meses
filteredPeople.forEach(pessoa => {
   toPrint += pessoa.name + ', '
});

// for( let c = 0; c < filteredPeople.length; c++ ){

// }

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredPeople.reduce( (prev, next) => {
    return {days: prev.birthday + next.birthday}
})

// Map - funções em arrays de retorno individual (cada valor array)
let gatos = [10, 15, 7, 8, 9]

let years = gatos.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos gatos: '  
    + years + ' '

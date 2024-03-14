const url = 'https://pokeapi.co/api/v2/pokemon';
const main = document.getElementById('main');

function getPokemon(pokemonName) {
    userInput.value = 'Carregando...';
    userInput.disabled = true;
    fetch(`${url}/${pokemonName.toLowerCase()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }
        return response.json();
    })
    .then((data) => {
        const pokemonInfo = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Habilidades:</p>
            <ul>
                ${data.abilities.map(ability => `<li>${ability.ability.name.toUpperCase()}</li>`).join('')}
            </ul>
        `;
        main.innerHTML = pokemonInfo;
    })
    .catch((error) => {
        main.innerHTML = `<p style="color: red;">${error.message}</p>`;
        console.error('Erro: ', error.message || error);
    })
    .finally(() => {
        userInput.value = '';
        userInput.disabled = false;
    })
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput');
    getPokemon(userInput.value);
    userInput.value = '';
});
const searchInput = document.getElementById('pokemon-search');
const searchBtn = document.getElementById('search-btn');
const pokemonName = document.getElementById('pokemon-name');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonType = document.getElementById('pokemon-type');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonBio = document.getElementById('pokemon-bio');

searchBtn.addEventListener('click', async () => {
    const pokemonNameValue = searchInput.value.trim();
    if (pokemonNameValue) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameValue}`);
            const pokemonData = await response.json();
            displayPokemonInfo(pokemonData);
        } catch (error) {
            console.error(error);
            alert('Pokemon not found!');
        }
    } else {
        alert('Please enter a Pokemon name!');
    }
});

function displayPokemonInfo(pokemonData) {
    pokemonName.textContent = pokemonData.name;
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonType.textContent = `Type: ${pokemonData.types.map(type => type.type.name).join(', ')}`;
    pokemonHeight.textContent = `Height: ${pokemonData.height}m`;
    pokemonWeight.textContent = `Weight: ${pokemonData.weight}kg`;
    pokemonBio.textContent = pokemonData.species.flavor_text_entries[0].flavor_text;
}
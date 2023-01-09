const types = [

'fire',
'grass',
'electric',
'water',
'ground',
'rock',
'fairy',
'poison',
'bug',
'dragon',
'psychic',
'flying',
'fighting',
'normal'

];



const POKEMON_COUNT = 129;

const getType = (data) => {
    const apiTypes = data.map((type) => type.type.name);
    const type = types.find((type) => apiTypes.indexOf(type) > -1);
    return type;
};

const fetchPokemon = async (number) => {
    if(number === undefined) return;

    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const response = await fetch(url).then((response) => response.json());
    const {id, name, types} = response;
    const type = getType(types);
    return {id, name, type}

};

const fetchPokemons = async () => {
    for (let i = 1; i <= POKEMON_COUNT; i++) {
        console.log(i);
        const pokemon = await fetchPokemon(i);
        console.log(pokemon);
    }
};

fetchPokemons();


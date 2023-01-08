const cards = document.querySelector('.cards');
const card = document.querySelector('.card');

for(let i = 0; i < 30; i++){
    console.log('i', i)
    const clone = card.cloneNode(true);
    cards.appendChild(clone);
}


const colors = {
            fire: '#e4504d',
            grass: '#9dd465',
            electric: '#f9e45f',
            water: '#6a83d6',
            ground: '#e4c967',
            rock: '#cabb7b',
            fairy: '#eeb2fa',
            poison: '#9f619d',
            bug: '#c4cf4a',
            dragon: '#857af7',
            psychic: '#e56eaf',
            flying: '#80a4f9',
            fighting: '#9b5a48',
            normal: '#bab8ab'
        }
const variables = [];
const style = [];
for(let key in colors){
variables.push(`--${key}: ${colors[key]};\n`);
const css =  `
.bg-${key} {
background: linear-gradient(to top right, var(--${key}), var(--card-bg) 25%);
}
.${key} {
background-color: var(--${key});
}
`;

style.push(css);

}

console.log(variables.join(''));
console.log(style.join('\n'));


const types = {    

    fire: '#e4504d',
    grass: '#9dd465',
    electric: '#f9e45f',
    water: '#6a83d6',
    ground: '#e4c967',
    rock: '#cabb7b',
    fairy: '#eeb2fa',
    poison: '#9f619d',
    bug: '#c4cf4a',
    dragon: '#857af7',
    psychic: '#e56eaf',
    flying: '#80a4f9',
    fighting: '#9b5a48',
    normal: '#bab8ab'} 
    
    
    
    const keys = Object.keys(types);
    
    for(const key of keys){
        types[key] = key;
    }
    
    console.log(types);


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
const marvel_heros = ["Thor", "Ironman", "Spiderman"]

const dc_heros = ["Supperman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  //Flash

// const all_reros = marvel_heros.concat(dc_heros)
// console.log(all_reros);  // [ 'Thor', 'Ironman', 'Spiderman', 'Supperman', 'Flash', 'Batman' ]

const all_newheros = [...marvel_heros, ...dc_heros]
// console.log(all_newheros);

// console.log(marvel_heros);

const another_arr = [1, 2, 3, [4, 5, 6],  7, [5,6, [4,5]]]

const real_another_arr = another_arr.flat(Infinity)

// console.log(real_another_arr);

// console.log(Array.isArray("dipendra"));
// console.log(Array.from("dipendra"));

// console.log(Array.from({name: "dipendra"})) // interesting have, it will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


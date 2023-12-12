const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let littleMovie = [];
let mediumMovie = [];
let bigMovie = [];


for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    littleMovie.push(movies[i].name);
  } else if (movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200) {
    mediumMovie.push(movies[i].name);
  } else {
    bigMovie.push(movies[i].name);
  }
}

console.log(`peliculas pequeñas menos de 100 minutos: ${littleMovie}`);
console.log(`peliculas medianas mas de 100 minutos pero menos de 200: ${mediumMovie}`);
console.log(`peliculas grandes mas de 200 minutos: ${bigMovie}`);

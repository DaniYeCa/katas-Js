const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const old = [];
const young = [];

for (let i = 0; i < users.length; i++) {

  if (users[i].years < 18) {
    young.push(users[i].name)
  } else {
    old.push(users[i].name)
  }
}

console.log(`Menores de edad: ${young}`);
console.log(`Mayores de edad: ${old}`);
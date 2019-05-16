const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Liste des entrepreneurs nés dans les années 70 : ")
for(let index in entrepreneurs) {
  if (entrepreneurs[index]["year"] > 1969 && entrepreneurs[index]["year"] < 1980 ) {
    console.log(entrepreneurs[index]);    
  }
}

let entrepreneursNames = []
console.log("Voici l'array contenant les noms des entrepreneurs :")
for(let index in entrepreneurs) {
  entrepreneursNames.push(`${entrepreneurs[index]["first"]} ${entrepreneurs[index]["last"]}`)
}
console.log(entrepreneursNames);

for(let index in entrepreneurs) {
  console.log(`${entrepreneurs[index]["first"]} ${entrepreneurs[index]["last"]} aurait ${(2019 - entrepreneurs[index]["year"])} ans aujourd'hui.`)
 }

console.log("tri par ordre alphabétique de nom des entrepreneurs :")
for(let index in entrepreneurs) {
  entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1)
 }
console.log(entrepreneurs);
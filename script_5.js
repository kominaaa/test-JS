const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
for(let index in books) {
  if (books[index]["rented"] === 0) {
    console.log("Au moins un livre qui n'a jamais été emprunté.");
    break;
  } else {
  console.log("Tous les livres ont déjà été emprunté.");
  }
}


console.log("Quel est livre le plus emprunté ?")
for(let index in books) {
  book_max = books.sort((a, b) => (a.rented < b.rented) ? 1 : -1)[0]
}
console.log(`> ${book_max.title}, emprunté ${book_max.rented} fois`);


console.log("Quel est le livre le moins emprunté ?")
for(let index in books) {
  book_min = books.sort((a, b) => (a.rented > b.rented) ? 1 : -1)[0]
}
console.log(`> ${book_min.title}, emprunté ${book_min.rented} fois`);

console.log("Trouve le livre avec l'ID: 873495")
let book_find = books.find(obj => obj.id == 873495);
console.log(`> ${book_find.title} trouvé`)


console.log("Supprime le livre avec l'ID: 133712")
for (let index in books) {
  if (books[index].id === 133712) {
    console.log(`${books[index].title} va être supprimé.`)
    books.splice(index, 1);
  }
}


console.log("Trie les livres par ordre alphabétique.")
for(let index in books) {
  books.sort((a, b) => (a.title > b.title) ? 1 : -1)
 }
console.log(books)
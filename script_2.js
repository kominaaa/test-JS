let number = prompt('De quel nombre veut-tu calculer la factorielle ?');
let result = 1

while (number > 0) {
  result *= number;
  number -= 1;
}

console.log(`Le resultat est : ${result} !`)
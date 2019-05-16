let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?");
let space = (floors - 1);
let brick = (floors - space);
let line = "";

while (floors > 0) {
  line = `${" ".repeat(space)}${"#".repeat(brick)}`; 
  floors -= 1;
  space -= 1;
  brick += 1;
  console.log(line);
}
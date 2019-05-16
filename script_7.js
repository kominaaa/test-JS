let answer = "";
let regexp = RegExp(/fortnite/i);

while(answer !== "bye") {
  answer = prompt("Wesh, kes tu veux? ('bye' pour quitter)");
  console.log(`> ${answer}`);
  if (answer.includes('?')) {
    console.log("Ouais Ouais...");
  } else if (answer === '') {
    console.log("t'es en PLS?");
  } else if (answer === answer.toUpperCase()) {
    console.log("Pwa, calme-toi...");
  } else if (regexp.test(answer)) {
    console.log("on s' fait une partie soum-soum ?");
  }  else if (answer === "bye") {
    console.log("Ciao tocard.");
    break;
  } else {
    console.log("balek.");
  }
}



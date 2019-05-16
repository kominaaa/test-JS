let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";

function transcribe(arn) {
  let codons = arn.match(/.{1,3}/g);
  let aminoAcid = []

  for(let index in codons) {
    switch (codons[index]) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        aminoAcid.push("Sérine");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        aminoAcid.push("Proline");
        break;
      case "UUA":
      case "UUG":
        aminoAcid.push("Leucine");
        break;
      case "UUU":
      case "UUC":
        aminoAcid.push("Phénylalanine");
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        aminoAcid.push("Arginine");
        break;
      case "UAU":
      case "UAC":
        aminoAcid.push("Tyrosine");
        break;
      default:
        console.log("Séquence invalide")
        break;
    }
  }
  return aminoAcid
}
console.log(`La séquence ${arn1} correspond à la chaine : ${transcribe(arn1).join("-")}`)
console.log(`La séquence ${arn2} correspond à la chaine : ${transcribe(arn2).join("-")}`)
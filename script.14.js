let vetor = [1, 2, 3, 4, 5, 6, 7, 8];

let positionRight = vetor.length - 1;

let positionLeft = 0;

let searched = 9;

let found = false;

while (positionLeft < positionRight) {
  let middle = Math.floor((positionRight + positionLeft) / 2);
  if (vetor[middle] == searched) {
    found = true;
    break;
  } else if (vetor[middle] < searched) {
    positionLeft = middle + 1;
  } else {
    positionRight = middle - 1;
  }
}

if (found) {
  console.log("Encontrou");
} else {
  console.log("Não encontrou");
}

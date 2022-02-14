let vetor1 = [4,5,8,9,3,5,2];
let vetor2 = [2,5,6,7,1,6,3,4];

let vetor3 = [];


for (let index = 0; index < vetor1.length; index ++) {
     
    vetor3[index] = vetor1[index];
}

for(let index = vetor1.length; index < vetor1.length + vetor2.length ; index ++) {
    vetor3[index] = vetor2[index - vetor1.length]
}

console.log(vetor3)
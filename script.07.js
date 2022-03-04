

let jogadas = 5;
let pontuacaoTotal = 0;
let bolinhaA = 'esquerda';
let bolinhaB =  'esquerda';
let bolinhaC =  'esquerda';

for(let index = 0; index < jogadas; index++){
    if(bolinhaA === 'esquerda' && bolinhaB === 'esquerda'){
        pontuacaoTotal += 150;
        bolinhaA = 'direita';
        bolinhaB = 'direita';
    }
    else if(bolinhaA === 'direita' && bolinhaC === 'esquerda') {
        pontuacaoTotal += 100;
        bolinhaA = 'esquerda';
        bolinhaC = 'direita';

    }
    else if(bolinhaA === 'esquerda' && bolinhaB === 'direita'){
        pontuacaoTotal += 100;
        bolinhaA = 'direita';
        bolinhaB = 'direita';
    }
    else if(bolinhaA === 'direita' && bolinhaC === 'direita'){
        pontuacaoTotal += 50;
        bolinhaA = 'esquerda';
        bolinhaC = 'esquerda';
    }

}




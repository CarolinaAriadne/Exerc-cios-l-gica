const email = "joao@.com";

function validaEmail(email) {
  let valido = true;

  if (!email.includes("@")) {
    valido = false;
  }
  const lastDot = email.lastIndexOf(".");
  const lastWord = email.substring(lastDot + 1, email.length);
  if (lastWord.length < 2 || lastDot !== email.length - lastWord.length - 1) {
    // verifica se a última palavra tem duas letras e se tem ponto antes da última palavra
    valido = false;
  }
  // verifica se o @ não é a primeira ocorrência no email, @ não pode ser o primeiro caractere
  if (email.indexOf("@") === 0) {
    valido = false;
  }
  const firtsDot = email.indexOf('.')
  const secondDot = email.indexOf('.', firtsDot +1)
  if((secondDot - firtsDot) === 1){
    valido = false;
  }
  if(email.indexOf(' ') >= 0){
    valido = false;
  }
  const arroba = email.indexOf('@')
  const dotAfterArroba = email.indexOf('.', arroba + 1)
  
  if((dotAfterArroba - arroba) === 1){
    valido = false;
  }
  return valido;
}

console.log(validaEmail(email));

// um @
// um ponto, antes da última palavra
// palavra antes do @
// ter duas letras na última palavra
// não podem haver pontos seguidos
// não pode ter espaço
// deve haver caractere entre o @ e o ponto

// VÁLIDOS
// c.ariadneadv@gmail.com
// r.adsreis@gmail.com
// le_guarino@hotmail.com
// teste@teste.com.br
// a@a.br

// INVÁLIDOS
// 9carol@gmail.com
// josé@gmail.com
// a@a.a
// carol@gmail..com

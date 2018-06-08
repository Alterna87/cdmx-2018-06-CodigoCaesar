
//A-Z --> 65 A 90
//a-z --> 97 a 122

//Funcion de cifrar

//.appendChild = "<div></div
//window.cipher = {


const cipherOn = () =>
{
  let toCipher = document.getElementById('toCipher').value;
  let offset = document.getElementById('offset').value;
//quiero que se guarde el texto ya cifrado
  let cipher = "";
  //Donde voy a guardar ya convertido en codigo ascci modificado con la formula de michelle
  let ascii = 0;

  for(let i = 0; i < toCipher.length; i++){

    //para saber si es mayuscula
    if (toCipher.charCodeAt(i) >= 65 && toCipher.charCodeAt(i) < 97) {
    ascii = (toCipher.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
 // para saber si es minuscula
  } else if (toCipher.charCodeAt(i) >= 97 && toCipher.charCodeAt(i) <= 122) {
    ascii = (toCipher.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
 // para saber si es espacio
  } else if (toCipher.charCodeAt(i) == 32) {
    cipher += " ";
  }

   cipher += String.fromCharCode(ascii);

 }
return document.getElementById('toDecipher').value = cipher;
}

//Funcion de Decifrado
const cipheroff = () => {
  let toDecipher = document.getElementById('toDecipher').value;
  let offset = document.getElementById('offset').value;
  //para guardar las letras de la letra a descifrar
let decipher = "";
let ascii = 0 ;
//
  for(let i = 0; i< toDecipher.length; i++) {

    if (toDecipher.charCodeAt(i) >= 65 && toDecipher.charCodeAt(i) < 97) {
    ascii = (toDecipher.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
  } else if(toDecipher.charCodeAt(i) >= 97 && toDecipher.charCodeAt(i) <= 122) {
    ascii = (toDecipher.charCodeAt(i) + 97 + parseInt(offset)) % 26 + 97;
  } else if (toDecipher.charCodeAt(i) == 32) {
    ascii = toDecipher.charCodeAt(i);
  }
  decipher += String.fromCharCode(ascii);
  }
    return document.getElementById('toCipher').value = decipher;

}

//};

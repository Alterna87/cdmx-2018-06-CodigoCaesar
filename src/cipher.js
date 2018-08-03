
//A-Z --> 65 A 90
//a-z --> 97 a 122
//.appendChild = "<div></div>
window.cipher = {
//Funcion de cifrar
encode: (text, offset) =>
{
//quiero que se guarde el texto ya cifrado
  let cipher = "";
  //Donde voy a guardar ya convertido en codigo ascci modificado con la formula de michelle
  let ascii = 0;

  for(let i = 0; i < text.length; i++){

    //para saber si es mayuscula
if (text.charCodeAt(i)  >= 65 && text.charCodeAt(i) <= 90) {
    ascii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
 // para saber si es minuscula
} else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
    ascii = (text.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
 // para saber si es espacio
} else {
    ascii = text.charCodeAt(i);
  }

   cipher += String.fromCharCode(ascii);

 }
return cipher;
},
//Funcion de Decifrado
decode: (text, offset) => {
  //para guardar las letras de la letra a descifrar
let decipher = "";
let ascii = 0 ;
// Recorre letra por letra de la cadena de texto
  for(let i = 0; i < text.length; i++) {
    //para saber si es mayuscula
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
    ascii = (text.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
    //para saber si es minuscula
  } else if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
    ascii = (text.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
 // para saber si es espacio
} else {
    ascii = text.charCodeAt(i);
  }
  //Junta la cadena de texto decifrada
  decipher += String.fromCharCode(ascii);
  }
    return decipher;

},

// Hacker Edition sin testeo
createCipherWithOffset: (offset) => {
return objeto = {
encode: (text) => {
    //quiero que se guarde el texto ya cifrado
    let cipher = "";
    //Donde voy a guardar ya convertido en codigo ascci modificado con la formula de michelle
    let ascii = 0;

    for(let i = 0; i < text.length; i++){

      //para saber si es mayuscula
  if (text.charCodeAt(i)  >= 65 && text.charCodeAt(i) <= 90) {
      ascii = (text.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
   // para saber si es minuscula
  } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      ascii = (text.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
   // para saber si es espacio
  } else {
      ascii = text.charCodeAt(i);
    }

     cipher += String.fromCharCode(ascii);

   }
  return cipher;
},
decode: (text) => {
  //para guardar las letras de la letra a descifrar
let decipher = "";
let ascii = 0 ;
// Recorre letra por letra de la cadena de texto
  for(let i = 0; i < text.length; i++) {
    //para saber si es mayuscula
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
    ascii = (text.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
    //para saber si es minuscula
  } else if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
    ascii = (text.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
 // para saber si es espacio
} else {
    ascii = text.charCodeAt(i);
  }
  //Junta la cadena de texto decifrada
  decipher += String.fromCharCode(ascii);
  }
    return decipher;
 }
}

}

};

//console.log(cipher.createCipherWithOffset(33));



const index =() => {

document.getElementById('formulary').innerHTML = "<form class='formu'> <label>Texto a Cifrar: </label><input type='text' id='toCipher' class='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm'><input type='button' value='Cifrar texto' onclick='ciphercall()'><br><br> <label>Offset :</label> <input type='number' min= '1'max = '33'  id= 'offset'> <br><label>Texto cifrado: </label> <input type='text' id='toDecipher' class='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm'><input type='button' value='Decifrar texto' onclick= 'deciphercall()'></form>";

}
// Muestra los inputs y botones
index();



const ciphercall =() => {
  let toCipher= document.getElementById('toCipher').value;
  let offset= document.getElementById('offset').value;
//Mandar a llamar la funciones de Cifrado
let encode = cipher.encode(toCipher, offset);
return drawinput(encode);

}

const deciphercall = () => {
toDecipher= document.getElementById('toDecipher').value;
offset= document.getElementById('offset').value;
//Mandar a llamar la funciones de Decifrar
let decode = cipher.decode(toDecipher, offset)
 return drawoutput(decode);

}
//Dibuja el resultado
const drawinput = (input) => {
return document.getElementById('toDecipher').value = input;
}

//Dibuja el resultado
const drawoutput = (input) => {
return document.getElementById('toCipher').value = input;
}

//cipher.createCipherWithOffset.encode("abc", 33);

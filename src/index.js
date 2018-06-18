

const index =() => {

document.getElementById('formulary').innerHTML = "<label>Texto a Cifrar: </label><input type='text' id='toCipher' class='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm' placeholder= 'Introduce la frase a cifrar'><input type='button' class = 'col-xl-3 col-md-12 col-sm-12 btn btn-primary btn-lg btn-block btn btn-danger align-self-center' id='button' value='Cifrar' onclick='ciphercall()'><br><label>Offset :</label> <input type='number' min= '1'max = '33'  value='33' id= 'offset'> <br><label>Texto cifrado: </label> <input type='text' id='toDecipher' class='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm' placeholder= 'Introduce la frase a decifrar'><input type='button' class ='col-xl-3 col-md-12 col-sm-12 btn btn-primary btn-lg btn-block btn btn-danger' id='button' value='Decifrar' onclick= 'deciphercall()'>";

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
document.getElementById('toCipher').value="";
return document.getElementById('toDecipher').value = input;

}

//Dibuja el resultado
const drawoutput = (input) => {
document.getElementById('toDecipher').value="";
return document.getElementById('toCipher').value = input;
}

//cipher.createCipherWithOffset.encode("abc", 33);

# CrazyCipher

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Objetivos

El objetivo principal de aprendizaje de este proyecto es tener tu primera
experiencia construyendo una aplicación web usando tus conocimientos de **User Experience Designer** y de **JavaScript developer**. Esto incluye diseñar un producto
_pensando en los usuarios_, construir una interfaz, escuchar eventos básicos del
DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios
básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación
del DOM para mostrar (escribir) los resultados.

## To Do

* Realizar Investigacion sobre los temas de: Cadenas de texto, Bucles, Arrays, Objetos, Test, Ux Design.
* Realizar logica en Pseudocodigo
* Forkear el proyecto guía "_boilerplate_"
* Logica de JavaScript (Cifrar)
* Logica de JavaScript (Decifrar)
* Search de UX Design
* Implementar diseño
* Responsive web

Puedes ver el planeamiento del proyecto [aqui](https://trello.com/b/7rxlJfmv/cifrado-cesar)

### Definición del producto)

Los usuarios que utlizarán esta páguina la mayoria solicita que sea fácil de utilizar, muy intuitiva, debido a que la utilizarán la mayoría del tiempo durante la planeación de su fiesta, es por eso que se desarrolló una páguina sin muchos elementos que llegue a saturar al usuario, es una aplicación muy simple pero cumple con el objetivo que solicita el usuario


* quiénes son los principales usuarios de producto
 * Amigos cercanos y familiares
* cuáles son los objetivos de estos usuarios en relación con el producto
 * Poder cifrar y decifrar mensajes de texto.
* cómo crees que el producto que estás creando les está resolviendo sus
  problemas
  * Realizar de manera sencilla el cifrado de dichos mensajes


### Funcionalidad:

La interfaz permite al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado


### ¿Donde la puedo utilizar?

* El link donde puedes utilizar la paguina es: [CrazyCipher](https://alterna87.github.io/cdmx-2018-06-CodigoCaesar/src/index.html)


Derechos Reservados 2018

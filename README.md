# Project Title
Práctica | Crear un Blockchain con node.js

Universidad Autónoma de Chihuahua.
Ingeniero en ciencias de la computación.
Desarrollo basado en plataformas 6CC2.
Gabriel Jesús Bustillos Fierro (353267).

## Getting Started
Vamos a aplicar nuestros conocimientos adquiridos de Javascript y  de Node.Js para programar un blockchain, para esto sigue los siguientes pasos:

1) Genera una clase Block como modelo con los siguientes atributos:

   a) Index = Identificador de la posición del bloque en la cadena.
   b) Data = El contenido del bloque
   c) previousHash = Valor del bloque anterior de la cadena

2) Genera una clase Blockchain.

3) Mediante la clase Blockchain manipula elementos Block para poder generar la cadena de bloques.

4) Genera un método mine que calcule el nuevo hash del bloque según su dificultad.

Sube la liga de gitlab con el proyecto generado.

### Prerequisites

Asegurate de tener instalado node.js en su versión reciente, además de npm podrás verificar lo anterior con los siguientes comandos:

```
node -v
npm -v
```

### Installing

Debes de clonar el repositorio en una carpeta la cual desees que contenga los archivos.

```
git clone https://github.com/gabribu/blockchain.git
```

Se extrerán los archivos main.js, blockchain.js y block.js debes de tenerlos todos localizados en una misma carpeta, luego de eso debe>

```
npm init 
```
Lo cual te arrojará una serie de entradas para que ingreses los distintos datos.
Para ejecutar los cambios deberas de correr en todo momento el archivo main.js a través del siguiente comando:

```
node main.js 
```

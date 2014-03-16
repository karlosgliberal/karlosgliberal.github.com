---
layout: post
title: Meteor simplificando nodejs
author: karlos g liberal
date: 2013-03-17 21:00
template: article.jade
url: http://blog.elfilo.net/articles/meteor-simplificando-nodejs/index.html
tags: ["frameworks", "javascript", "nodejs"]
---

Qué difícil es esto de mantener un blog con un poco de ritmo, y no será por la de cosas interesantes que quiero compartir, pero así son las cosas

Hoy quiero hablaros de [Meteor](http://meteor.com) según los propio creadores es **la mejor forma de crear aplicaciones**, si esta frase te parece pretenciosa, al loro con esta&#58;
> Meteor es un entorno ultra-simple para el desarrollo de sitios web modernos. Lo que antes tardaba semanas, incluso con las mejores herramientas, ahora te cuesta horas con Meteor

Pues, por muy increible que parezca esta frase, en cuanto te introduces un poco en Meteor ves que puede ser real.

<!--more-->

Lo primero que sorprende es su instalación&#58;

``` curl https://install.meteor.com | /bin/sh ```

Así se crea un proyecto&#58;

``` meteor create myapp ```

Ejecutar de forma local el proyecto&#58;

``` 
 $ cd myapp
 $ meteor
 Running on: http://localhost:3000/
```

Meteor ofrece la posibilidad con un comando de hacer un deploy del proyecto en su propia infraestructura&#58;
```
$ meteor deploy myapp.meteor.com
```

Se intuye que esta puede ser una forma de moneratización del proyecto, al más puro estilo [nodejitsu](http://nodejitsu.com). Lo cierto es que la simpleza de meteor tanto en la instalación como a la hora de ponerte a trabajar hacen el proyecto muy atractivo.

Meteor es un stack completo, viene con todo lo necesario para ponerte a trabajar, funciona gracias a [nodejs](http://nodejs.org) tanto en la parte de la ejecución como en el servidor. 

Aunque Meteor usa nodejs intensivamente su forma no es tan ortodoxa como en otros frameworks ([dervy](http://derbyjs.com/), [flatlirojs](http://flatironjs.org/) ), en parte por el uso que hace de [fibers](https://github.com/laverdet/node-fibers) para el control de la asincronía algo no exento de [polémica](http://bjouhier.wordpress.com/2012/03/11/fibers-and-threads-in-node-js-what-for/). Otro de los temas que ha sorprendido es que su sistema de paquetes no sea compatible con [npm](npmjs.org), les da más control sobre lo que entra en Meteor pero impide aprovecharse de la gran cantidad de paquetes en npm. De todos modos esto pinta que cambiará

Veamos ahora los 7 principios según su propia web&#58;

* **Datos en la red**&#58; No se manda porciones de Html sobre la red, se mandan datos al cliente y es él el que decide si lo renderiza.
* **Un sólo lenguaje**&#58; Escribe tanto el cliente como el servidor en un solo lenguaje Javascript.
* **La base de datos en todas partes**&#58; Utiliza de forma transparente la API de acceso a la base de datos tanto en el cliente como en el servidor.
* **Compensación de latencia**&#58; En el cliente se simula el precacheo para que se vea como si tuviera latencia cero en el acceso a la base de datos.
* **Sistema completo para la programación reactiva**&#58; Construye en tiempo real por defecto, todas las capas desde la base de datos al sistema de plantillas son accesbles por su sistema de orientación a eventos.
* **Abraza otros ecosistmas**&#58; Meteor es open source y se integra antes que remplaza otras herramientas o frameworks en open sorce.
* **Simplicity Equals Productivity**&#58; La mejora manera de que algo parezca simple es que en realidad sea simple, esto se logra con una API limpia que trae una belleza clásica.

Meteor tiene cosas curiosas, que permiten hacer "webs" tambien de forma curiosa, una de las que más sorprenden es lo que ellos llaman [programación reactiva](http://en.wikipedia.org/wiki/Reactive_programming) el ejemplo clásico es con una hoja de calculo, los datos introducidos van modificando un campo concreto.

<script src="https://gist.github.com/karlosgliberal/5185894.js"></script>

## Profundizando
La función Deps.autorun en relación con session permiten el binomio, computación ractiva + código de datos reactivos. Los argumentos de la funcion Deps.autorun se ejecutan la primera vez, pero si la sesión ```currentRoomId ``` cambia se vuelven a ejecutar. En la [documentación](http://docs.meteor.com/#reactivity) explican esto de una forma más clara.

Parte de esta magia es debido a que Meteor usa [mongodb](http://www.mongodb.org/) para la persistencia de datos, pero con un matiz. Esta persistencia también esta en el Cliente. Meteor mediante un sistema de Publicación/suscripción decide qué colecciones son y cómo son sincronizadas en el cliente, y el cliente tiene en cache toda la información que se ha sincronizado. Si a esto le unimos la movida de la "programción rectiva", pues se intuye su potencial. 

Otras de las claves es el uso que hace de [handlebarsjs](http://handlebarsjs.com/) para el sistema de plantillas, su integración es exquisita. Si algo se le puede achacar a [backbone](http://backbonejs.org/) (u otros frameworks similares) es su extraño uso de la gestión de [plantillas](http://stackoverflow.com/questions/5624929/backbone-view-el-confusion). En Meteor la cosa es tal que así&#58;

<script src="https://gist.github.com/karlosgliberal/5186400.js"></script>

En el body podemos llamar a nuestras plantillas de esta manera ```{{>categories}}``` y meteor ya sabe que tiene la plantilla ```<template name="categories">``` a su disposición.

Meteor tiene una estructura de directorios que permite ordenar el código del servidor, del cliente y del público de forma muy simple&#58;
```
➜  cesta 
client public server
```

Todos los ficheros que se colocan en el directorio ```cliente``` (o server ) son gestionados por meteor e incluidos en la ejecución de forma ordenada (esto puede ser algo raro). El directorio public se utiliza tipo assets, donde meter imágenes, o ficheros públicos. 

En el directorio cliente es donde se situa el fichero .html para las plantillas, el .js para la app del lado del cliente y el .css.  

<script src="https://gist.github.com/karlosgliberal/5186473.js"></script>

Este es un ejemplo de la lógica del cliente, en otro Post explicaré con más detalle como funciona, pero en la función ```Template.categories.events``` se puede intuir su potencial. Por cada plantilla que tenemos podemos llamar a su lista de eventos, y sobre los elementos de la plantilla hacer lo que nos plazca. Es importante tener en cuanta que el sistema de plantillas es susceptible de la rectividad que caracteriza a Meteor. Podremos cambiar en caliente porciones de html dependiendo de las acciones que ocurran, por ejemplo con los eventos. 

Esto no es más que una breve y desordenada pincelada de la potencia de Meteor. La comunidad está cogiendo forma y el proyecto está madurando mucho. Creo que es interesante tenerlo en cuenta ya que para aplicaciones con una interacción rica y el tiempo real Meteor destaca por encima de sus competidores. Espero seguir hablando de este entorno en otros posts.

Dejo esta presentación que tengo preparada de Meteor [http://www.slid.us/eeg5#/](http://www.slid.us/eeg5#/), que está realizada con [http://www.slid.us](http://www.slid.us/eeg5#/). Otro día hablaré de Slidus


---
layout: post
title: Tengo nuevo amigo http://meemoo.org/
author: karlos g liberal
date: 2012-09-11 23:00
template: article.jade
url: http://blog.elfilo.net/articles/nuevo-amigo-meemoo/index.html
tags: ["charlas", "drupal", "nodejs"]
---

Pues eso que andaba yo metiéndole un rato al [threenodes](http://idflood.github.com/ThreeNodes.js/) (mola aunque es un poco tosco) vi que el colega que lo esta desarrollando [@idflood](https://twitter.com/idflood) hablaba de [meemoo.org](http://meemoo.org) 

La idea es brutal es rollo "rayitas" que unen "cagitas" tipo [pure-data](http://puredata.info/) o los guays de [vvvv](vvvv.org) XD, 
La mecánica es similar cada módulo (serian los nods en 4v), dividido por tipos y cada uno de ellos tiene tantas entradas y salidas como corresponda, y como en todos estos softwares con la unión de ellas se hace el patch. Pero la caña reside en que cada caja es "purito html" con javascript que es el que crea las entradas y salidas. 

<!--more-->

Dicho de otra manera cualquier locura que se pueda hacer en html5 se le puede añadir estas entradas y salidas y entonces pueden ser enganchadas en meemoo.org. 
Por ejemplo puedes añadir en tu servidor un html (con su javascript) y esto puede ser añadido desde la sección de modules "search or url" 

Por supuesto podemos guardar el proyecto, crea un json con cada una de las propiedades y en el se pueden ver los enlaces a los modulos, pego un ejemplo

```
{
  "info": {
    "title": "(speech to) text to speech",
    "author": "forresto",
    "description": "(in chrome, speech to) text to speech",
    "url": "text2speech"
  },
  "nodes": [
    {
      "src": "http://forresto.github.com/meemoo-modules/speech2text.html",
      "x": 162,
      "y": 61,
      "z": 0,
      "w": 346,
      "h": 98,
      "state": {},
      "id": 1
    },
    {
      "src": "http://forresto.github.com/meemoo-speak.js/text2speech.html",
      "x": 234,
      "y": 221,
      "z": 0,
      "w": 167,
      "h": 117,
      "state": {
        "amplitude": 100,
        "pitch": 50,
        "speed": 175,
        "wordgap": 0
      },
      "id": 2
    },
```

Bueno pues si este código lo guardas en un [gist](https://gist.github.com/) puedes visualizar tus patch de esta manera [http://meemoo.org/iframework/#gist/3124854](http://meemoo.org/iframework/#gist/3124854) el número al final es el id del gist creado.

El potencial es brutal.

Os lo aviso os voy a volver locos con el juguetico 

Referencias

* [http://meemoo.org/iframework/](http://meemoo.org/iframework/) -> este es la demo que explica el temita
* [http://meemoo.org/hack-our-apps/](http://meemoo.org/hack-our-apps/) -> galeria de patch
* [http://forresto.github.com/meemoo-image/text.html](http://forresto.github.com/meemoo-image/text.html) -> ejemplo de módulo 
* [@forresto](https://twitter.com/forresto) -> el crack que lo ha desarrollado

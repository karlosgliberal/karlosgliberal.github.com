---
layout: post
category: post
published: true
title: "Primer premio en la categoría de SmartCity en el #hacksanfermin"
---

En [interzonas](http://interzonas.info) hemos ganado el primer premio en la categoría de SmartCity en el hackathon [#hacksanfermin](http://hacksanfermin.com/)

Para el que no lo sepa un hackathon es una “quedada” en un tiempo determinado para resolver o proponer soluciones tecnológicas a un tema especifico. 
Dicho de otro manera, juntar un grupo de _“entusiastas”_ durante un día (o varios) para que individua o colectivamente hagan proyectos sobre un tema. 

El hackathon #hacksanfermin tenía tres categorías **Smartcity**, **Periodismo de datos**, y **juegos** y la duración de dos días y me dio y la temática “Sanfermines”. 

Tengo que reconocer que el tema en si no me decía mucho pero el hecho de que que haga un hackathon en Iruña es un puntazó. Este tipo de eventos Siempre son fuera y la verdad que se veían buenas intención en la parte organizativa. 

Nosotros el viernes teníamos todo listo, como siempre las cosas buenas coinciden y el viernes salimos de “open space” de [Biko](http://www.biko2.com/) pillamos lo bártulos y a [Mael](https://twitter.com/mael_) que se anímo  a participar con nosotros (Ya hemos dicho más de una vez que interzonas es un taller abierto) 

El hackathón se realizaba en [Planetario de Iruña](http://pamplonetario.org/), la verdad que en el sitio y la organización fueron estupendo, la comida de calidad y siempre buenas formas, la conexión decente (pero más vale que llevamos nuestro router)

Este es la presentación de nuestra propuesta

<iframe src="//slides.com/interzonas/looking-sound-city/embed" width="776" height="620" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


Lo que queríamos hacer es con una app móvil cualquiera puede grabar un sonido y directamente el app móvil mediante web audio api, hacer un analisis de las frecuencias del sonido grabado y enviar una interpretación de estas frecuencias mandarlas a un map.

Este mapa esta creado con [Mapbox](http://mapbox.com) y la inforamción se almacena en [Firebase](http://firebase.com), que es enviada desde un demonio en nodejs. 

Aqui una captura de la app “demo” que hicimos para poder emular lugares y sonidos que luego eran enviados al mapa

![app_movil.png](/medias/app_movil.png)

Aqui un vídeo de como se van mostrando en tiempo real  punto en el mapa conforme van enviandose los sonidos 

<iframe width="776" height="620" src="//www.youtube.com/embed/lfkNHlkgSgg" frameborder="0" allowfullscreen></iframe>

Y por supuesto aquí el codigo [https://github.com/karlosgliberal/lookingsoundscity](https://github.com/karlosgliberal/lookingsoundscity) Eso si es un caos, del bueno XD

La verdad que fue un puntazo ganar, veíamos que nuestro proyecto había quedado decente y que la propuesta era original, pero al final se presentaba 9 proyectos y nunca se sabe. 
Los ganadores fuimo nosotros en Smartcity [Mapacino](http://mapacino.com/) con donde esta la prensa y los compañeros de [Ouiplay](http://www.ouiplay.es/) con happycounter
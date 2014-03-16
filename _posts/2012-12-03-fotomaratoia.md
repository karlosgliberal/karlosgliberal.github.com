---
layout: post
title: Fotomaratoia html5
author: karlos g liberal
date: 2012-12-03 15:00
template: article.jade
url: http://blog.elfilo.net/articles/fotomaratoia/index.html
---

Demo&#58; [fotomaratoia.interzonas.info](http://fotomaratoia.interzonas.info)
Codigo&#58; [github.com/karlosgliberal/fotomaraton](https://github.com/karlosgliberal/fotomaraton)

Proyecto basado en el proyecto [dvm](https://raw.github.com/rwldrn/dmv/) que como ponen en su descripción es esto&#58; 
Node.js powered, Jitsu Hosted, WebRTC connected, 100% JavaScript, Camera > Web > Server Photobooth-style image capture program.

La idea del proyecto ha sido crear un fotomatón haciendo uso de la cámara de la máquina mediante [html5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) que almacene las fotos en el servidor [nodejs](http://nodejs.org) pudiendolas mandar por correo [nodemailer](http://www.nodemailer.com/) y que se pudiera hacer un chroma key en el fondo para surtituirlo el chroma por las fotos (en este caso del evento [xare.eu](http://xare.eu). Que es el que nos hizo el encargo). El chroma key lo hemos realizado con [seriouslyjs.org](http://seriouslyjs.org). un proyecto brutal

![fotomaratoia]({{site.url}}/images/fotomratoia.jpg)

<!--more-->

El código es puro spaghetti western. Un día aprenderé que la cocina japo mola más con su rollo lean, pero por ahora todo me sale rollo italiano. 

En la [demo](http://fotomaratoia.interzonas.info) el colorpicker permite elegir el color del chroma key y cuando se pulsa a las imágenes se activa el chroma y los sustituye por la imagen elegida. Mediate [socket.io](http://http://socket.io/) mandamos al servidor tanto el buffer con la imagen del canvas modificada por seriously, así como la info del correo. 

Este es un collage con las fotos de evento&#58;

![fotomaton_xare](fotomaton_xare.jpg)

Para cualquier duda podes conmigo ([@patxangas](http://twitter.com/patxangas)).

[@aitor_rl](http://twitter.com/aitor_rl) se ha currado el diseño y que todo se vea en su sitio.

[txo](http://www.elurmaluta.net) de [eragin.com](http://eragin.com), responsables del evento, es el diseñador de las imágenes.

Funciona con estos navegadores&#58; [Canary](http://tools.google.com/dlpage/chromesxs), [Opera](http://dev.opera.com/articles/view/labs-more-fun-using-the-web-with-getusermedia-and-native-pages/) and [Opera Mobile 12](http://my.opera.com/chooseopera/blog/2012/02/27/opera-mini-7-next-and-opera-mobile-12). [Read More](http://weblog.bocoup.com/javascript-webrtc-opera-mobile-12/)

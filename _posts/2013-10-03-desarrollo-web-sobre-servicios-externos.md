---
latout: post
title: ¿Desarrollo web sobre servicios externos?
author: karlos g liberal
date: 2013-10-03 18:00
template: article.jade
url: http://blog.elfilo.net/articles/desarrollo-web-sobre-servicios-externos/index.html
tags: ["proyecto", "javascript", "nodejs", "web", "hackathon"]
---

La semana pasada escribí un [post](http://blog.elfilo.net/articles/necesario-un-gestor-de-contenidos/) sobre si es necesario un gestor de contenidos. La respuesta era "depende", y tal y como se fue comentando (gracias por todo el feedback) igual no siempre era tan necesario ese gestor de contenidos. También creo que la supuesta web 2.0 no sólo es social, también es distribuida. Y es el concepto de "nube" donde encontramos su mayor referente.

Dicho esto, la pregunta que me ronda esta semana es: ¿Es inteligente el desarrollo web sobre servicios externos?

<!--more-->

Está claro que al final casi siempre dependemos de alguien, incluso en el clásico del hosting. Lo cierto es que los servicios externos han cambiado la forma de hacer "webs". Un ejemplo sería este mismo blog: uso [github](http://github.com) para almacenar los htmls y [disqus](http://disqus.com/) para la gestión de comentarios. Esto lo podría hacer perfectamente instalando un wordpress/drupal en mi servidor y ser completamente autónomo. Pero en este caso tenía ganas de experimentar para responder estas preguntas:

¿Es inteligente esta práctica? ¿La podemos extender a nuestro clientes? 

Sin entrar en lo que ya ofrecen empresas como Amazon en la gestión de infraestructuras con su [Amazon web service](http://aws.amazon.com/es/), nuestra idea es comprobar si es factible usar SaS (Software as a Service) para el desarrollo web. La lista de estos servicios es infinita, por lo que las posibilidades también lo son. La cuestión es saber si un cliente estará cómodo con estos desarrollos híbridos. 

En [interzonas.info](http://interzonas.info) ya hemos explorado esta idea con buenos resultados. En [apps4healts](http://apps4healths.es) usamos [firebase](http://firebase.com) para la gestión de la inscripción simplificando así mucho el desarrollo. Esta forma de desarrollar se me antoja interesante sobre todo para proyectos rápidos.

Queramos o no, cada día nuestros proyectos estás más enlazados con este tipo de servicios, desde el omnipresente [google analytics](http://www.google.com/analytics/) hasta un [typekit](https://typekit.com/). Nuestras webs empiezan a ser una relación de servicios más que un ente autónomo, y creo que esta relación se puede explotar aun más y obtener resultados sorprendentes. Os iremos contando nuestras experiencias desde esta nueva perspectiva.







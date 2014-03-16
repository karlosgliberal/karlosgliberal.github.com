---
layout: post
title: Residencia SummerOfLabs Euskadi
author: karlos g liberal
date: 2012-07-26 22:00
template: article.jade
url: http://blog.elfilo.net/articles/residencia-visualizacion-summeroflabs-eu/index.html
tags: ["summeroflabs", "fluidinfo", "drupal", "d3.js"]
---

![banner]({{site.url}}/images/banner.png)

Primer post con fundamento del blogs desde la nueva era post investic.

Hoy voy a hablar del encargo/residencia que desde tabakalera nos pidieron a [@aitor_rl](http://twitter.com/aitor_rl) y a mi (futuro interzonas). La idea era sencilla en un principio, por un lado crear una herramienta de inscripción para el encuentro SummerOfLabs y por otro lado con algunos de los datos de esa inscripción realizar una visualización. 

La herramienta de inscripción (el encargo) se monto con un [drupal](http://drupal.org) conforme avanzábamos en las conversaciones vimos que podíamos aprovechar la herramienta para algo más y se convirtió en la flamante y modesta web del [SummerOfLabs euskadi](http://summeroflabs.eu)

<!--more-->

También se valoró que hubiera una primera visualización algo sencillo y que nosotros (interzonas) tuviéramos el control "editorial", es en ese momento donde "tom" (yo) vió que se podía montar una catedral. 

La visualización se realiza con el interés de los inscritos que lo indican apuntándose a un grupo cerrado de nodos (charlas, talleres etc) del encuentro. 

Estos son los elementos que tienen nuestra catedral. 

* Drupal para la gestión de inscritos y como enlace con la base de datos fluidinfo
* [fludiinfo](http://fluidinfo.com) Mi proyecto "prefe" una base de datos en la nube que permite entender el almacenamiento de forma diferente, los datos se pueden reutilizar y los datos son tu api. Es tan bonito como suena.
* [d3.js](http://d3js.org/) "La herramienta" de la visualización de datos. Ellos dicen que su biblioteca no muestra datos los transforma. Una sutiliza que tiene su sentido sobre todo en visualizaciones dinámicas

El resultado se puede ver en [http://visualabs.summeroflabs.eu/](http://visualabs.summeroflabs.eu/) es algo modesto pero para ser la primara experiencia con d3.js estamos contentos.


En posteriores post profundizare con cada uno de los elementos que hemos usado.


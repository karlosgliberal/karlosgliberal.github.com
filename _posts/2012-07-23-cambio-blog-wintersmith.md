---
layout: post
title: Cambio de blog WinterSmith es mi colega
author: karlos g liberal
date: 2012-07-23 22:00
template: article.jade
url: http://blog.elfilo.net/articles/cambio-blog-wintersmith/index.html
tags: ["blog", "nodejs", "wintersmith"]
---

La peña suele mantener con mucho gusto sus blogs. Los miman y cuentan cuantas entradas tienen, cuentos comentarios y hists, este no es mi caso. Yo podría hacer lo mismo pero con blogs en vez de con posts. Es lo que tiene, cada poco me aburro del que tenia, y me monto uno nuevo. Creo que lo hago con la excusa de que este si este será el blog definitivo donde escribiré muchas post. Las excusas son muchas:

*Ya no me gusta wordpress
*Es que con drupal trabajo todos los días 
*El diseño es muy feo. 

Sea como sea lo he vuelto ha hacer. Pero en este caso, en serio, este será el definitivo, lo prometo XD

Los motivos para cambiar de blog (excusas) son que en el blog [karlos-investic](http://www.investic.net/blog/karlos/) no tiene mucho sentido andar creando nuevas entradas,  y por supuesto la más importante yo quiero ser "guay" y quiero tener mi blog en [github](http://pages.github.com/).
<!--more-->

Como no podía ser de otra manera empece con [http://octopress.org/](http://octopress.org/) pero ya que usaba una herramienta hacker  por qué no usar una herramienta "hacker, hacker de verdad". Octopress es una caña mola mucho, te creas un markdown y luego con un push al github tienes el post creado, pero resulta que en [nodejs](http://nodejs.com) existe una herramienta similar (bueno siendo sinceros un poquito mas sencilla que octopress)

###wintersmith 

[wintersmith](http://jnordberg.github.com/wintersmith/) Es un sistema muy flexible para la generación de páginas html es curioso como funciona. 

Para instalarlos es simple, tener instalado [npm](http://npmjs.org/) y seguir estos comandos:

Instalar wintersmith

```bash
$ npm install wintersmith -g
```

Crear nuevo sitio (crear un sitio de ejemplo a modo de blog)

```bash
$ wintersmith new <path>
```
Visualizar el sitio base creado por wintersmith en el directorio articles/ están los index.md donde se crean los posts

```bash
$ cd <path>
$ wintersmith preview
```
Y por último generar los htmls 

```bash
$ wintersmith build
```

Espermos que este sea uno de una larga lista de entradas de post



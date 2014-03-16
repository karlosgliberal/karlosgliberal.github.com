---
layout: post
title: Arduino controlando un servo mediante node.js
author: karlos g liberal
date: 2011-04-11 15:00
template: article.jade
url: http://blog.elfilo.net/articles/arduino-serve-nodejs/index.html
tags: ["arduino", "nodejs"]
---

<p>Que node.js empieza ha ser un entorno muy poderoso empieza ha estar claro, el motor v8 es poderoso y la pe&ntilde;a le esta sacando chispas &nbsp;por lo menos en el contexto de node.js</p>
<p>En este caso para una "frikada" casera se me ocurrio sacar mi vieja placa de arduinio y ver si podia mover un servo (tambi&eacute;n viejo) y en un ctrl+tab tonto de dispersion, se&nbsp;encendi&oacute;&nbsp;la bombilla &iquest;y si se puede usar node.js para controlar el servo? entoces &iquest;habr&aacute; alg&uacute;n modulo que trabaje con el puerto seri&eacute;? Node.js empieza ha ser como drupal, siempre hay alguien que lo ha probado, creado o mejorado.&nbsp;</p>
<p><a href=" https://github.com/voodootikigod/node-serialport" title=" https://github.com/voodootikigod/node-serialport">https://github.com/voodootikigod/node-serialport</a></p>
<!--more-->
<p>Este es el modulo instalaci&oacute;n cl&aacute;sica con npm:</p>
<p><code>npm install serialport</code></p>
<p>y mus :)&nbsp;</p>
<p>El resultado se puede ver en el v&iacute;deo, sencillo control con un slide de jquery.ui</p>
<p><iframe frameborder="0" height="390" src="http://www.youtube.com/embed/LnJBZPeDbtE" title="YouTube video player" width="480"></iframe></p>
<p>Pego el c&oacute;digo en un gist, ya que no es mas que una pruba
<span class="more"></span>
<script src="https://gist.github.com/901812.js"> </script>

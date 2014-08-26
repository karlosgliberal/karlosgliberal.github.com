---
layout: post
category: post
published: true
title: Node.js El lado salvaje de javascript
---

<p><span style="font-size: small;">Hoy me voy ha confesar, yo como todo el mundo tengo un lado oscuro, salvaje diria y que me hace correr por el filo de la navaja. Pero mi educación de clase media trabajadora (demasiado trabajadora) me dijo que las drogas duras no es un camino original (muchos otros fueron yonkis, y pocos pueden ser tan elegantes como nacho) y el tutorial de "como hacerte un asesino en serie" que nos ofrece dexter en mi caso ya me ha llegado tarde, aparte que tengo un panico atroz a la sangre. Así que alimento mi yo oscuro con grandes dosis de JavaScript, pero he que conste javascript del duro, Mierda de la buena. no cosas adulteradas.</span></p><p><span style="font-size: small;">El lado salvaje que quiero referenciar hoy queridos amigicos y amigicas es Node.js. </span></p><p><span style="font-size: small;">Los compañeros de <a href="http://digitta.com/">digitta.com</a> se ha currado una traducción de node.js "event I/O for V8 JavaScript" </span></p><p><span style="font-size: small;">Corte y pego la intro, pero ya os digo esta es mierdada de la buena solo para peña dura, con deciros que estoy escribiendo este post con King diamond de musica de fondo. </span></p><p><span style="font-size: small;">A si soy, un salvaje</span></p><p><span style="font-size: small;"><span style="font-family: 'Palatino Linotype', georgia, 'Trebuchet MS', sans-serif; font-size: 20px; color: #333333; line-height: 26px;"><span style="font-size: small;">node.js “Evented I/O for V8 JavaScript”— es un entorno JavaScript construido sobre el rapidísimo motor V8 que provee funcionalidad de entrada y salida basada en eventos para construir servidores TCP y HTTP altamente concurrentes. El diseño de&nbsp;</span><a style="color: #dd9900;" href="http://nodejs.org/api.html"><span style="font-size: small;">la API</span></a><span style="font-size: small;">&nbsp;es soberbio — todo se consigue usando eventos y llamadas&nbsp;</span><em><span style="font-size: small;">callback</span></em><span style="font-size: small;">&nbsp;de JavaScript (incluso el acceso típico a archivos) y la pequeña librería estándar ya contiene soporte completo de HTTP y DNS.</span></span></span></p><p><span style="font-size: small;">Bueno el resto de la traducción se llega desde <a href="http://digitta.com/2009/11/nodejs.html">aquí</a>, altamente recomendable.&nbsp;Estoy trasteando mucho con node.js y os contare mis avances</span></p><p><span style="font-size: small;"><span style="font-family: Times; font-size: medium; -webkit-border-horizontal-spacing: 2px; -webkit-border-vertical-spacing: 2px;">&nbsp;</span></span></p><pre><span style="line-height: 20px;"><span style="font-size: x-small;">El lado más bestia de la vida (Walk on the wild side)
Manolo era todo un macho de pelo en pecho
pero estaba algo cansado,
estaba harto de su sexo...
así que se afeitó y se depiló
y ahora Manolo es toda una mujer
desde que va por el lado de la vida más salvaje
-sí Manoli-por el lado más salvaje de la vida.
Natalia era un poco pija, divertida y sin manías
sus amantes mantenían
su pisito de estudiante
pero eso sí,
era muy decente sus clientes eran ricos,
finos y elegantes,y así sobrevive,
por el lado más salvaje de la vida
-sí Natalia-por el lado más bestia de la vida.

Hey lei lerei lerei lei lerei lerei !!
Lai lolai lolai lolai lailo lolai !!
lailololaiiii...

Jaimito el camellito
nunca dio nada,
ni un toque por aquí,
ni un toque por allá,
si te quieres flipar
hay que pagar
y es que en esta ciudad
ya no hay nadie que no diga
Hey amigo
te vienes a dar una vuelta conmigo
Hey Jaimito

Aurelio se fué del pueblo
voy a comerme el mundo
era un poquito palurdo, campechano y aburrido
y si ahora lo vieras
en la discoteca
que marcha lleva
venga, venga, venga
bailando por el lado más bestia
-si l'Aurelio- por la pista más bestia de la vida.

María iba a 1.000 por hora
iba muy deprisa
cuanto más ciega se ponía
más a gusto se sentía
acabó con ella una taquicardia
y su mejor amiga ya me lo decía
que María iba por el lado más bestia de la vida;
Sus amigas le decían:
Vas por el lado más bestia de la vida.

Hey lei lerei lerei lei lerei lerei !!
Lai lolai lolai lolai lailo lolai !!
lailo lolai, lailo lolai lolai lolai !!
lailolaaaaaa...</span></span></pre><p>&nbsp;</p>
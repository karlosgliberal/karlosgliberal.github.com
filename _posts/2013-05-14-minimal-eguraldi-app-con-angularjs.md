---
layout: post
title: Minimal Eguraldi App con Angularjs
author: karlos g liberal
date: 2013-05-14 21:00
template: article.jade
url: http://blog.elfilo.net/articles/minimal-eguraldi-app-con-angularjs/index.html
tags: ["frameworks", "javascript", "nodejs", "angularjs"]
---

Demo: [minimaleguraldiapp.interzonas.info](http://minimaleguraldiapp.interzonas.info)
Github: [github.com/karlosgliberal/eguraldia](https://github.com/karlosgliberal/eguraldia)


El otro día me comentaban [@Aitor_rl](http://twitter.com/aitor_rl) y [@merisu](http://twitter.com/merisu) que mientras otros hacen catas de vino o cervezas yo hago catas de frameworks. Y algo de razón sí que tienen. Me gusta probar frameworks y de esta manera veo lo que hacen los buenos y aprendo mucho, sobre todo de la base, que es en lo que estoy ahora.

En esta ocasión el framework que estoy probando es [Angularjs](http://angularjs.org/). Lo curioso es cómo llegue a Angularjs.

Para la web de Interzonas (que estamos a punto de publicar) tenía ganas de meterle mano a [gruntjs](http://gruntjs.com/), un gestor de tareas al estilo maven o ant, pero para el lado del cliente. Con Gruntjs puedes automatizar la minificación de los ficheros js o css, pasar los test, o crear copias de ficheros para el paso a producción. Lo cierto es que casi podrías mandar a calentar el té, pues empieza a ser muy exagerado las cosas que está haciendo la peña con Gruntjs. Bueno, pues a la que empiezo a mirar Gruntjs me encuentro con [yoeman.io](http://yeoman.io/) que como ellos dicen: "Modern workflow for modern webapps" .

<!--more-->

Yoeman es un conjunto de herramientas que relacionadas permiten organizar y trabajar en webapps con distintos frameworks. Yoeman tiene por un lado "yo" para crear los "scaffolds" (no sé cómo traducirlos, algo así como los andamios de la aplicación ), Gruntjs que lo usaremos como gestor de tareas, y [bower.io](http://bower.io/) es un gestor de components (creado por twiiter) tipo [npm](http://npmjs.org) pero para la web ``` npm install -g bower ``` y con ```bower install jquery ``` descargaríamos jquery en el directorio componets/jquery/jquery.*. Un enrevesado sistema que permite ordenar muchas piezas para hacer webapps modernas. 

Espero hablar de gruntjs y bower en otro post. 

Pero por si te habías olvidado (fácil con tanta introducción) estábamos hablando de Angularjs. Mirando lo ejemplos de yoeman.io me fijé que Angularjs era muy referenciado en la documentación y entre esto y el movimiento que estoy viendo de gente que sigo y algún proyecto que sabía que estaba realizado con Angular, pues tomé la decisión.


Aclaro que este no será un post profundo sobre Angular, más bien unas pinceladas, estoy jugando en otro proyecto algo más complejo que el "Minimal Egurladi App" y con ese probablemente profundizaré más. 
El proyecto que se puede acceder desde [aquí](Enlace) es poca cosa. Descubrí unos iconos en cavas representando el tiempo muy guapos y que con ellos se podía hacer una app sencilla que te diga la temperatura de la ciudad y que te ponga el icono correspondiente.

![eguraldi](eguraldia.png)

La app no tiene más que un formulario que cuando das a enter o al botón hace una petición a un servicio web con datos meteorológicos, y con el json que devuelve el servicio podemos cambiar el icono y poner la temperatura. Es un proyecto sencillo pero que permite armar muchas de las piezas de Angularjs.

## Angularjs 
Angularjs es un proyecto mantenido por Google. y la verdad que con algunas cosas que estoy viendo de [Dartlang](http://www.dartlang.org/), no se me hace raro que lo estén soportando. Se puede ver un ejemplo [aquí](http://www.dartlang.org/articles/web-ui/#two-way-binding) que suena mucho a Angularjs 

¿Pero qué tiene de especial Angularjs sobre el resto de frameworks? (backbone, emberjs, meteor, etc) 

La verdad que son varias las cosas, una de las más importantes es que permite una extensión del lenguaje HTML para manipular datos y esto lo hace de forma elegante y simple a diferencia de otros entornos. 
Otro punto que a mí personalmente me ha gustado es el orden, todo tiene su sitio y las buenas prácticas hacen el proyecto muy sólido 
. Esto tiene mucho que ver con el sistema de inyección de dependencias, es fácil ver las piezas que entran en juego en un proyecto Angularjs. De todos modos igual despiezando el proyecto se pueden apreciar mejor estas virtudes.

En el index.html tenemos dos elementos importantes:

```
<body ng-app="favoritosApp">
.....
 <div class="container" ng-view="">

 </div>
 ....

```

Los elementos ``` ng-loquesea ``` es lo que Angularjs llama Directivas Y que son las que permiten extender el lenguaje html y aportarle nuevos procedimientos y funcionalidades como el data binding (enlace de datos).

Aquí vemos dos ``` ng-app="favoritosApp" ``` es la forma fácil de arrancar la aplicación de hacer el típico init(). Luego tenemos ``` ng-view="" ``` donde indicamos que aquí, en este div, es donde se situará la o las plantillas con las que trabajaremos en la app. 

Una de las cosas interesantes de Angularjs es que mucha de la lógica recae en el html y aunque la sensación sea rara (o sucia) conforme vas trabajando ves que es todo lo contrario. Lo que me parece cierto y que lo ponen en muchos tutoriales, es que la cantidad de javascript necesario para crear un app se reduce y el que se genera es más asequible para personas con pocos conocimientos en js. 

Ahora toca el turno de app.js donde se asocian el resto de módulos (ya sean, directivas, filtros, servicios etc) y donde se puede definir el sistema de rutas de la app.

```js

'use strict';

angular.module('favoritosApp', ['FavoritosAppServices', 'ui'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```

En este caso nuestra app ```favoritosApp ``` tiene estas dos dependencias que queremos cargar en el bootstrap ``` ['FavoritosAppServices', 'ui']  ``` y una sola ruta ```.when('/', {``` a esta ruta se le asocia una plantilla desde una url y un controlador MainCtrl. El resto de rutas redirigen a la ruta /. Veamos la plantilla main.html


```html
<div class="login" ng-control="MainCtrl">
  <div class="login-screen">
    <div class="login-icon">
      <canvas id="fog" width="128" height="128">
      </canvas>
      <h4><small>{{init}}</small></h4>
    </div>
    <div class="login-form">
      <div class="control-group">
        <input type="text" class="login-field" value="" placeholder="ciudad" id="ciudad" ng-model="ciudad" ng-change="borrar()" ui-keypress="{13:'keypressCallback($event)'}">
        <label class="login-field-icon fui-eye-16" for="login-pass"></label>
      </div>
      <a class="btn btn-primary btn-large btn-block" href="#" ng-click="update(ciudad)">Enviar</a>
      <a class="login-link" href="#">Quieres saber funciona?</a>
    </div>
  </div>
</div>

 ```

Por partes. En el ``` <div class="login" ng-control="MainCtrl"> ...</div>``` en este div ya vemos algo como: ``` ng-control="" ``` es otra Directiva.

En este caso estamos diciendo que este div (y su herencia) están asociados al controlador "MainCtrl" y que en este controlador recaerá el ámbito ($scope) de sus procedimientos. Por lo tanto y como se intuye Angularjs funciona con el patrón MVC pero a diferencia de otros Frameworks [el propio html](http://docs.angularjs.org/guide/compiler) con las directivas forma parte de la definición del MVC.

Esto se puede ver claro en esta línea ```<h4><small>{{init}}</small></h4>``` con el ```{{}}``` estamos haciendo el [data binding](http://docs.angularjs.org/guide/dev_guide.templates.databinding) Nuestro html hace de views y en ``` init ``` vamos sincronizado los datos del modelo y gestionados por el controlador. 

Esto también se ve en esta línea:

``` 
<input type="text" class="login-field" value="" placeholder="ciudad" id="ciudad" ng-model="ciudad" ng-change="borrar()" ui-keypress="{13:'keypressCallback($event)'}">
```

Aquí con la directiva ```ng-model="ciudad" ``` estamos haciendo otro enlace de datos bidireccional, que como se puede ver es usado por el botón mediante la directiva ```ng-click="update(ciudad)" ```. Por lo tanto tenemos muchas de las piezas 



Veamos ahora la definición del controlador 

```js
'use strict';

angular.module('favoritosApp')
  .controller('MainCtrl', function ($scope, Tiempo) {
    var icons = new Skycons({color: 'white'});
    icons.add('fog', Skycons.FOG);
    icons.play();
    $scope.init = 'Minimal app del tiempo';

    $scope.update = function (ciudad) {
      $scope.tiempo = Tiempo.get({ciudad: ciudad}, function (datos) {
        if(typeof(datos[0].error) != "undefined"){
          $scope.ciudad = "Busca otra ciudad u otro nombre";
          $scope.init = "Busca otra ciudad u otro nombre"
        }else{
          var iconoFin = _comparaIconos(datos[1].icon);
          $scope.init = datos[1].temp_c+'º '+ciudad;
          $scope.ciudad = "";
        }
      });
    }
  })

``` 
Con ``` angular.module('favoritosApp') ``` indicamos que somos parte de la app favoritosApp y asociamos un controllador 'MainCtrl' que inyectará las dependencias '$scope' y Tiempo que nos provee el servicio ```FavoritosAppServices``` que asociábamos en el app.js. No voy a comentar el tema del servicio (ya lo haré en otro post) porque quiero centrarme en el $scope o ámbito de la aplicación. El $scope es un objeto que se referencia al modelo de la aplicación, pero que en definitiva lo que permite es trabajar con ámbitos controlados tanto en los datos que queremos sincronizar ``` $scope.init ``` que referencia a ```<h4><small>{{init}}</small></h4>``` o métodos como ```$scope.update = function(ciudad){...}``` y que referencia a ```ng-click="update(ciudad)```, esto visto así igual suena raro, pero para mí fue amor a primera vista (mentira, a la segunda que al principio no lo entendía XD)

Cuando vi el tema de los $scope asociados a cada controlador me quedé encantado ya que es la típica pelea de javascript. Si no haces las cosas ordenadas al final te la das con el ámbito de tus definiciones. 

El resto creo que se entiende bien. El código está en github y es donde se puede ver todo (incuso lo feo). He dejado la apikey de servicio, si se muere se nos murió XD 

Creo que Angular tiene muchas posibilidades. Veo que esta pillando algo de vuelo pero que en comparación con otros como backbone le queda un rato. Sobre todo en un conector estable con un servicio rest como ya tienen otros entornos. 

Sobre Angularjs hay mucha documentación y manuales, así como vídeos. El tutorial de la web está bien, además también hacen referencia al tema de los test que están muy bien integrados en el entorno. 
Recomiendo este proyecto para poder arrancar con todas las piezas [Angular-seed un por donde empezar](https://github.com/angular/angular-seed)

Seguiré comentando cosas de angular.

Demo: [minimaleguraldiapp.interzonas.info](http://minimaleguraldiapp.interzonas.info)
Github: [github.com/karlosgliberal/eguraldia](https://github.com/karlosgliberal/eguraldia)

Esta es una plantilla inicial para [Ionic](http://ionicframework.com/docs/) projects.

## Cómo usar esta plantilla

*Esta plantilla no funciona por sí sola*. Los archivos compartidos de cada iniciador se [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

Para utilizar esta plantilla, cree un nuevo proyecto ionic utilizando la utilidad ionic node.js, O copiar los archivos de este repositorio en el[Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### Con Ionic CLI:

Toma el nombre después `ionic2-starter-`, Y ese es el nombre de la plantilla que se utilizará al usar el `ionic start` Comando abajo:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTutorial tutorial
```

Luego, para ejecutarlo, cd entra `myTutorial` y correr:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Sustituya ios por android si no está en un Mac.

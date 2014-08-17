---
layout: post
title:  "Nuevo estilo en la página de Información Profesional y algunas optimizaciones"
date:   2014-08-17 00:38:00
comments: true
author: "Humberto Salazar Pacios"
categories: info
---



Llevo un par de días haciendo algunos ajustes al sitio para mejorar su rendimiento. Fundamentalmente me he centrado en reducir los tiempos de carga optimizando varios elementos.

En este proceso, me he encontrado con algunas herramientas realmente sencillas y de gran utilidad. Estoy pensando en hacer un post describiendo todo el proceso para montar un sitio como este y optimizarlo hasta el máximo de sus posibilidades.

He cambiando los estilos de varios elementos, y aunque aún no estoy 100% conforme con el resultado veo que ha ido tomando forma.

Los cambios más significativos se pueden ver en el "sidebar":

- Cambio total de aspecto en cuanto a colores y formas
- Reducción de los elementos (realmente lo que hice fue mover un montón de cosas a otros lugares donde tienen más sentido para luego agregar otro montón de cosas aquí :D )

Y bueno, la [nueva página de información profesional][about] que ahora tiene una nueva estructura que debe hacer más accesible el contenido de la misma.

Vale mencionar que me cambié de [Stylus][stylus] a [Sass][sass] entre otras cosas porque se [integra de forma natural][assets] con [Jekyll][jekyll].

[about]: {{ '/about/' | prepend: site.url }}
[stylus]: http://learnboost.github.io/stylus/
[sass]: http://sass-lang.com
[jekyll]: http://jekyllrb.com
[assets]: http://jekyllrb.com/docs/assets/

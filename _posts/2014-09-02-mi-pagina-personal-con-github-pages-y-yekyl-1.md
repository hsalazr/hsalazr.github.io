---
layout: post
title:  "Mi página personal con GitHub Pages y Jekyll (I)"
comments: true
date: 2014-09-02 00:24:03 -0300
author: "Humberto Salazar Pacios"
categories: [tutorial]
---

*Si quieres tener tu propia página personal con tu CV online sin tener que invertir dinero en un nombre de dominio o un servicio de hosting y tienes conocimientos básicos sobre HTML y CSS, con esta guía, puedes lograrlo en muy poco tiempo gracias a las páginas de GitHub.*

<!--more-->

##Primeros pasos
Para comenzar necesitas completar una serie de requisitos básicos para lograr un ambiente de trabajo apto para la tarea en cuestión.

Dependiendo de lo que hagas a diario como parte de tu trabajo, puede que muchos de estos pasos no sean necesarios para ti. Pero como este tutorial es para todos, comenzamos desde el principio.

###1. Tu cuenta en github.com
<div class="col-md-6 pull-right">
<blockquote >
 <i class="icon icon-github pull-left" style="font-size:48px"></i>
 <p>GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Utiliza el framework Ruby on Rails por GitHub, Inc. </p>
  <footer class="pull-right">Tomado de: <cite title="Wikipedia"><a href="http://es.wikipedia.org/wiki/GitHub">Wikipedia</a></cite></footer>
</blockquote>
</div>

Al registrarte con el nombre de usuario de tu preferencia GitHub nos brinda la posibilidad de crear respositorios de git para cada uno de nuestros proyectos.

En cada repositorio es posible incluir una "pequeña web" a modo de descripción o documentación sobre el proyecto. Para lo cual solo debemos crear una carpeta gh-pages en la raíz del repositorio e incluir en ella al menos un fichero HTML.

Asumiendo que el nombre de usuario que elegimos fue <code>myuser</code> y el nombre del repositorio que creamos es <code>myrepo</code>. Si accedemos a <code>http://myuser.github.io/myrepo</code> seremos capaces de ver el contenido del fichero <code>index.html</code> que colocamos en gh-pages.

La buena noticia es que además de las páginas para cada uno de nuestros repositorios, GitHub nos habilita un espacio similar para nuestro usuario. Lo que nos lleva al siguiente paso.

###2. El repositorio para tu sitio

A diferencia de las páginas de los proyectos. Las páginas de usuario deben ir en un repositorio especial para ellas. Si creamos un repositorio cuyo nombre coincida exactamente con el de nuestro usuario, en este caso <code>myuser</code>, el contenido del mismo estará disponible desde <code>http://myuser.github.io/</code>

Por lo tanto, todo lo que pongamos en la raiz de ese repositorio estará disponible vía HTTP.

Se asume que todos los recursos deben ser estáticos (<code>.html</code>, <code>.css</code>, <code>.js</code>, <code>.png</code>, <code>.gif</code>) nada de (<code>.php</code>, <code>.asp</code>) o similares.

Estamos de acuerdo en que mantener una web de varias páginas a base de puro HTML es una tarea terrible, sobre todo si se supone que su contenido vaya actualizándose periódicamente. Por suerte para todos, hay una forma más "humana" de "generar" nuestro sitio estático. Llegaremos a ese punto en los pasos siguentes cuando comencemos a hablar de Jekyll.

Pero antes, debemos aprender sobre ¿cómo publicar algo en nuestro repositorio?. Lo que nos lleva al paso 3.

###3. Trabajo con git

Debes conseguir un cliente de git. Dependiendo te tu sistema operativo es probable que ya lo tengas si no lo tienes con la ayuda de Google puedes encontrar uno fácilemente.

En cuanto estés listo. Crea una carpeta en tu ordenador, dirígete a ella desde un terminal y teclea el siguiente comando para crear tu copia local del repo.

{% highlight bash %}
git clone http://github.com/myuser/myuser.git
{% endhighlight %}

Aquí es donde colocaremos todos los ficheros para poner el sitio a punto.

Para hacer una pequeña prueba, crea un fichero <code>index.html</code> y dentro escribe:

{% highlight html %}
<h1>Hola mundo!!!</h1>
{% endhighlight %}

Luego vuelve a la consola y...

{% highlight bash %}
git add index.html
git commit -m "Mi primer commit"
git push
{% endhighlight %} 

Ahora dirígete a <code>http://myuser.github.io</code> y disfruta del resultado.

De esta forma puedes crear todas las páginas que quieras y publicarlas en tu dominio personal.

En el siguiente tutorial veremos cómo usar Jekyll para hacernos la vida más facil :D.

Si tienes problemas con algún paso o algo no quedó del todo claro, házmelo saber en los comentarios de este post.

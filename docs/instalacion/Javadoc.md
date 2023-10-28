---
title: Vincular el JavaDoc de la api
---

![a](/images/banner.png)

# Vincular el `JavaDoc` de la api

Para poder ver el `JavaDoc` de las clases, métodos y atributos de la clase es necesario vincularla en
el `Build Path` de la api.

## Eclipse IDE

En Eclipse IDE se siguen los siguientes pasos:

1. Ir a la configuración del `Build Path` del proyecto.
2. Seleccionar la sección de `Libraries` y seleccionar la `api/apiLite.jar`.
3. Editar la localización del `JavaDoc`.
4. Seleccionar `JavaDoc URL` y buscar en el explorador la carpeta (**NO .rar**) donde se encuentra el `JavaDoc` de la api.
5. Presione `Validate` para comprobar si fue correctamente agregada.

![a](/gifs/javadoc.gif)

## Intellij IDEA

Actualmente, el `JavaDoc` incluido **NO** es compatible con IntelliJ IDEA.

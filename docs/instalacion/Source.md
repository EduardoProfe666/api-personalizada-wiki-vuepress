---
title: Vincular el Archivo Source de la api
---

![a](/images/banner.png)

# Vincular el `Archivo Source` de la api

Para poder ver el código fuente de las clases de la api es necesario vincular
el archivo source a la api en el `Build Path` del proyecto.

::: tip Nota:
Recuerda descargar el proyecto de la Api Personalizada en [Github](https://github.com/EduardoProfe666/Proyecto-Api-Personalizada) para poder 
vincularle el source.
:::

## Eclipse IDE

En Eclipse IDE se siguen los siguientes pasos:

1. Ir a la configuración del `Build Path` del proyecto.
2. Seleccionar la sección de `Libraries` y seleccionar la `api/apiLite.jar`.
3. Editar la localización del `Source attachment`.
4. Seleccionar `External location` y a través de `External Folder` buscar la carpeta `src` del código fuente del proyecto.

![a](/gifs/source.gif)

## Intellij IDEA

En el caso de IntelliJ IDEA no es necesario
este procedimiento, puesto que incluye un motor de De-compilación de `.class` embebido.

---
    title: Vincular el `Archivo Source` de la api
---

<img src="https://github.com/EduardoProfe666/Proyecto-Api-Personalizada/wiki/assets/img/banner.png" width="100%">

# Vincular el `Archivo Source` de la api


Para poder ver el código fuente de las clases de la api es necesario vincular
el archivo source a la api en el `Build Path` del proyecto.

## Eclipse IDE

En Eclipse IDE se siguen los siguientes pasos:

1. Ir a la configuración del `Build Path` del proyecto.
2. Seleccionar la sección de `Libraries` y seleccionar la `api/apiLite.jar`.
3. Editar la localización del `Source attachment`.
4. Seleccionar `External location` y a través de `External Folder` buscar la carpeta `src` del código fuente del proyecto.

<img alt="Descarga Github" src="https://github.com/EduardoProfe666/Proyecto-Api-Personalizada/wiki/assets/gif/source.gif" width="100%">

## Intellij IDEA

En el caso de IntelliJ IDEA no es necesario
este procedimiento, puesto que incluye un motor de De-compilación de `.class` embebido.

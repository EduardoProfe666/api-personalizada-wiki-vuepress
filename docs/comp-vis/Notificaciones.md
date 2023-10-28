---
title: Notificaciones
---

![a](/images/banner.png)

# Notificaciones

## Provisional

<b>`Notificaciones`</b>: Permitirá el empleo de un sistema de notificaciones, con posiciones variables dentro de la pantalla y diferentes tipos de notificaciones.

![a](/gifs/notificacion.gif)

::: tip Posiciones de las notificaciones

- **POSICION_SUP_IZQ** = 0
- **POSICION_SUP_DER** = 1
- **POSICION_INF_IZQ** = 2
- **POSICION_INF_DER** = 3
  :::

::: tip Tipos de notificaciones

- ERROR
- ADVERTENCIA
- INFORMACION
- EXITO
  :::

> Ejemplo de uso:
>
> ```java
> Notificaciones.lanzarNotificacion("HOLA","JELOU",2,Notificaciones.POSICION_INF_DER, Notificaciones.MENSAJE_EXITO);
> ```

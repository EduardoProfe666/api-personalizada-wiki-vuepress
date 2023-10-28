---
title: NotificacionesModernas
---

![a](/images/banner.png)

# NotificacionesModernas

## Provisional

<b>`NotificacionesModernas`</b>: Permitirá el empleo de un sistema de notificaciones modernas, con posiciones variables dentro del componente especificado y diferentes tipos de notificaciones. Incluye la posibilidad de notificar en cascada

::: warning Advertencia:
Solamente es compatible con componentes que tengan instalado un Look and Feel de `FlatLaf`. En dependencia del `FlatLaf` empleado será la visual del componente.
:::

![a](/gifs/notificaciones-modernas.gif)

::: tip Importante:

- `NotificacionesModernas` implementa el patrón `Singletone` por lo que para poder acceder a los métodos de la clase se debe "capturar" de la forma `NotificacionesModernas.getInstancia();`
- Lo primero que se debe realizar es instalar el sistema de notificaciones en un componente; preferiblemente un `JFrame` o un `JDialog`. Luego se pueden usar los métodos restantes.
  :::

> Ejemplo de uso:
>
> ```java
> JFrame frame = new JFrame();
> NotificacionesModernas.getInstancia().setJFrame(frame);
> NotificacionesModernas.getInstancia().show(Tipo.INFO,Localizacion.INF_DER,3000,"Hola!");
> Notificaciones ntf = new Notificaciones("HOLA","JELOU",2,Notificaciones.POSICION_INF_DER, Notificaciones.MENSAJE_EXITO);
> ```

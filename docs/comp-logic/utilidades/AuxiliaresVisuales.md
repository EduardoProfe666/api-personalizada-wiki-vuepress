---
title: AuxiliaresVisuales
---

![a](/images/banner.png)

# AuxiliaresVisuales

Clase de utilidades que contiene algunos métodos auxiliares para las interfaces gráficas en `Java Swing`.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
Icon icono = AuxiliaresVisuales.ajustarImagen(new Dimension(50,50), ClaseBase.class.getResource("/img/icono.png"));
```

## Índice de contenido

[[toc]]

## Métodos implementados

Los métodos disponibles son:

- [Ajustar Imagen](#ajustar-imagen)

### Ajustar Imagen

- **Arquetipo:** `convertirFechaNacimientoCiDate(String)`
- **Parámetros:** `Dimension` dimensiones objetivos (ancho x alto), `URL` de la imagen objetiva
- **Descripción:** Método que permitirá redimensionar la imagen pasada a unas dimensiones determinadas.
- **Particularidades:** Este método puede ser utilizado para redimensionar imágenes para colocarlos correctamente en `JButton`, `JLabel`, `JPanel` y otros componentes de `Java Swing`.
  Si las dimensiones o la url de la imagen pasadas son `null` se lanza un
  `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > //Permite crear un JButton con iconos y dimensiones de 28 x 28. Los iconos son para el estado sin hover y con hover.
  > JButton boton = new JButton("");
  > boton.setBounds(0, 0, 28, 28);
  > boton.setIcon(Auxiliares.ajustarImagen(new Dimension(28,28), ClaseBase.class.getResource("/img/iconos/icono01.png")));
  > boton.setRolloverIcon(Auxiliares.ajustarImagen(new Dimension(28,28), ClaseBase.class.getResource("/img/iconos/icono02.png")));
  > ```

## Código Fuente

```java
public final class AuxiliaresVisuales {
	private AuxiliaresVisuales(){}

	public static Icon ajustarImagen(Dimension dimensiones, URL urlImagen) {
		if(dimensiones==null || urlImagen==null)
			throw new IllegalArgumentException();
		ImageIcon imagen = new ImageIcon(urlImagen);

		return new ImageIcon(imagen.getImage().getScaledInstance(dimensiones.width, dimensiones.height, Image.SCALE_SMOOTH));
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.awt.Dimension;
import java.awt.Image;
import java.net.URL;
import javax.swing.Icon;
import javax.swing.ImageIcon;
```

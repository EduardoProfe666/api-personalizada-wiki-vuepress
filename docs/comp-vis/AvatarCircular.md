---
title: AvatarCircular
---

![a](/images/banner.png)

# AvatarCircular

Clase visual que permite la representación de un avatar circular con tamaño y color de borde variable dada una imagen.

Esta clase hereda de `JComponent`.

Este es un componente personalizado cuya idea original se encuentra en [este repositorio](https://github.com/DJ-Raven/java-swing-image-avatar-v2) de [DJ Raven](https://github.com/DJ-Raven).

**Preview de Componente en la Prueba Visual:**
![a](/gifs/avatar-circular.gif)

## Índice de Contenido

[[toc]]

## Constructores

- [Constructor vacío](#constructor-vacío)
- [Constructor con Imagen y Tamaño de borde](#constructor-con-imagen-y-tamaño-de-borde)

### Constructor vacío

- **Arquetipo:** `AvatarCircular()`
- **Descripción:** Permite construir el componente visual `AvatarCircular`.
- **Particularidades:** El componente es creado sin avatar (`null`) y con tamaño del borde = 0.
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular avatar = new AvatarCircular();
  > ```

### Constructor con Imagen y Tamaño de borde

- **Arquetipo:** `AvatarCircular(Icon, int)`
- **Parámetros:** `Icon` imagen a renderizar, `int` grosor del borde
- **Descripción:** Permite construir el componente visual `AvatarCircular` con la
  imagen y grosor del borde dados.
- **Particularidades:**
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular a = new AvatarCircular(new ImageIcon(ClaseBase.class.getResource("/img/avatar.png")),3);
  > ```

## Atributos de interés

- [Avatar](#avatar)
- [Tamaño del Borde](#tamaño-del-borde)

### Avatar

- **Arquetipo:** `Icon avatar`
- **Descripción:** `Icon` que determina la imagen del avatar a renderizar.
- **Métodos Relacionados:** [Getter de Avatar](#getter-de-avatar) y [Setter de Avatar](#setter-de-avatar)

### Tamaño del Borde

- **Arquetipo:** `int tamBorde`
- **Descripción:** `int` que determina el grosor del borde del avatar.
- **Métodos Relacionados:** [Getter de tamaño del borde](#getter-de-tamaño-del-borde) y [Setter de tamaño del borde](#setter-de-tamaño-del-borde)

## Métodos de interés

- [Getter de Avatar](#getter-de-avatar)
- [Setter de Avatar](#setter-de-avatar)
- [Getter de Tamaño del Borde](#getter-de-tamaño-del-borde)
- [Setter de Tamaño del Borde](#setter-de-tamaño-del-borde)
- [Cambiar color del Borde](#cambiar-color-del-borde)

### Getter de Avatar

- **Arquetipo:** `getAvatar()`
- **Descripción:** Permite obtener el `Icon` de la imagen usada para renderizar
  el avatar circular.
- **Atributos Relacionados:** [Avatar](#avatar)
- > **Ejemplo de uso:**
  >
  > ```java
  > Icon ico = new AvatarCircular().getAvatar(); // ico = null
  > ```

### Setter de Avatar

- **Arquetipo:** `setAvatar(Icon)`
- **Parámetros:** `Icon` imagen a renderizar.
- **Descripción:** Permite la imagen del avatar renderizada.
- **Particularidades:** Se recomienda que las imágenes sean con formato `.jpg` (versión ligera) o `.png` (transparencia).
  **No** se guardan los avatares que sean `null`, sino que
  se mantiene el valor anteriormente guardado.
- **Atributos Relacionados:** [Avatar](#avatar)
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular avatar = new AvatarCircular();
  > avatar.setAvatar(ClaseBase.class.getResource("/img/avatar.png"));
  > ```

### Getter de Tamaño del Borde

- **Arquetipo:** `getTamBorde()`
- **Descripción:** Permite obtener el tamaño o grosor del borde.
- **Atributos Relacionados:** [Tamaño del Borde](#tamaño-del-borde)
- > **Ejemplo de uso:**
  >
  > ```java
  > int n = new AvatarCircular().getTamBorde(); // n = 0
  > ```

### Setter de Tamaño del Borde

- **Arquetipo:** `setTamBorde(int)`
- **Parámetros:** `int` grosor del borde.
- **Descripción:** Permite cambiar el tamaño o grosor del borde del avatar.
- **Particularidades:** **No** se guardan los grosores menores que 0, sino que se mantiene
  el valor anteriormente guardado.
- **Atributos Relacionados:** [Tamaño del Borde](#tamaño-del-borde)
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular avatar = new AvatarCircular();
  > avatar.setTamBorde(3);
  > ```

### Cambiar color del Borde

- **Arquetipo:** `setForeground(Color)` (**Valor Empleado**)
- **Parámetros:** `Color` del borde
- **Descripción:** Permite cambiar el color del borde de este componente visual.
- **Particularidades:** **No** se sobreescribe el método original, sino que es usado
  para con su valor cambiar el color del borde.
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular avatar = new AvatarCircular();
  > avatar.setForeground(Color.RED);
  > ```

## Ejemplo de Uso

```java
public class Prueba extends JFrame {
	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private AvatarCircular avatarCircular;

	public Prueba() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		avatarCircular = new AvatarCircular();
		avatarCircular.setForeground(Color.ORANGE);
		avatarCircular.setTamBorde(4);
		avatarCircular.setAvatar(new ImageIcon(Prueba.class.getResource("/img/avatar.png")));
		avatarCircular.setBounds(151, 65, 136, 115);
		contentPane.add(avatarCircular);
	}
}

```

## Código Fuente

```java
public class AvatarCircular extends JComponent{

	private static final long serialVersionUID = 1L;

	private Icon avatar;

	private int tamBorde;

	public AvatarCircular(Icon avatar, int tamBorde) {
		setAvatar(avatar);
		setTamBorde(tamBorde);
	}
	public AvatarCircular(){
		this.avatar=null;
		this.tamBorde=0;
	}

	public Icon getAvatar() {
		return avatar;
	}

	public void setAvatar(Icon avatar) {
		if(avatar!=null)
			this.avatar = avatar;
	}

	public int getTamBorde() {
		return tamBorde;
	}

	public void setTamBorde(int tamBorde) {
		if(tamBorde>=0)
			this.tamBorde = tamBorde;
		repaint();
	}

	@Override
	protected void paintComponent(Graphics grphcs) {
		if (avatar != null) {
			int ancho = getWidth();
			int alto = getHeight();
			int diametro = Math.min(ancho, alto);
			int x = ancho / 2 - diametro / 2;
			int y = alto / 2 - diametro / 2;
			int borde = tamBorde * 2;
			diametro -= borde;
			Rectangle tam = ajustarImagen(avatar, diametro);
			BufferedImage img = new BufferedImage(tam.width, tam.height, BufferedImage.TYPE_INT_ARGB);
			Graphics2D g2_img = img.createGraphics();
			g2_img.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
			g2_img.fillOval(0, 0, diametro, diametro);
			Composite composite = g2_img.getComposite();
			g2_img.setComposite(AlphaComposite.SrcIn);
			g2_img.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g2_img.drawImage(toImage(avatar), tam.x, tam.y, tam.width, tam.height, null);
			g2_img.setComposite(composite);
			g2_img.dispose();
			Graphics2D g2 = (Graphics2D) grphcs;
			g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
			if (tamBorde > 0) {
				diametro += borde;
				g2.setColor(getForeground());
				g2.fillOval(x, y, diametro, diametro);
			}
			if (isOpaque()) {
				g2.setColor(getBackground());
				diametro -= borde;
				g2.fillOval(x + tamBorde, y + tamBorde, diametro, diametro);
			}
			g2.drawImage(img, x + tamBorde, y + tamBorde, null);
		}
		super.paintComponent(grphcs);
	}

	private Rectangle ajustarImagen(Icon avatar, int tam) {
		int w = tam;
		int h = tam;
		int iw = avatar.getIconWidth();
		int ih = avatar.getIconHeight();
		double escalaX = (double) w / iw;
		double escalaY = (double) h / ih;
		double escala = Math.max(escalaX, escalaY);
		int ancho = (int) (escala * iw);
		int alto = (int) (escala * ih);
		if (ancho < 1) {
			ancho = 1;
		}
		if (alto < 1) {
			alto = 1;
		}
		int cw = tam;
		int ch =tam;
		int x = (cw - ancho) / 2;
		int y = (ch - alto) / 2;
		return new Rectangle(new Point(x, y), new Dimension(ancho, alto));
	}

	private Image toImage(Icon icono) {
		return ((ImageIcon) icono).getImage();
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.awt.AlphaComposite;
import java.awt.Composite;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JComponent;
```

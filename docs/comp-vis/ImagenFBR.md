---
title: ImagenFBR
---

![a](/images/banner.png)

# ImagenFBR
Clase visual que permite la representación de una imagen con una animación de Fancy Border Radius (FBR).

Para ver la idea básica del componente puede ir a [este enlace](https://9elements.github.io/fancy-border-radius/)

Esta clase hereda de `JComponent`.

Este es un componente personalizado cuya idea original se encuentra en [este repositorio](https://github.com/DJ-Raven/java-swing-fancy-border-radius) de [DJ Raven](https://github.com/DJ-Raven).

**Preview de Componente en la Prueba Visual:**
![a](/gifs/imagen-fbr.gif)

## Índice de Contenido

[[toc]]

## Constructores

- [Constructor con Imagen, Inicio de FBR y Fin de FBR](#constructor-con-imagen-inicio-de-fbr-y-fin-de-fbr)


### Constructor con Imagen, Inicio de FBR y Fin de FBR

- **Arquetipo:** `ImagenFBR(Icon, String, String)`
- **Parámetros:** `Icon` imagen a renderizar, `String` inicio de FBR, `String` fin de FBR
- **Descripción:** Permite construir el componente visual `ImagenFBR` con la
  imagen y los valores de inicio y fin.
- **Particularidades:** Para construir el FBR con los
  * valores de start y end, puede visitar el [siguiente sitio](https://9elements.github.io/fancy-border-radius/)
- > **Ejemplo de uso:**
  >
  > ```java
  > ImagenFBR i = new ImagenFBR(new ImageIcon(PruebaVisual.class.getResource("/imagenes_prueba/avatar2.jpg")), "40% 60% 60% 40% / 60% 30% 70% 40%", "40% 60%");
  > ```

## Atributos de interés

- [Imagen](#imagen)

### Imagen

- **Arquetipo:** `Icon imagen`
- **Descripción:** `Icon` que determina la imagen del fbr a renderizar.
- **Métodos Relacionados:** [Getter de Imagen](#getter-de-imagen) y [Setter de Imagen](#setter-de-imagen)


## Métodos de interés

- [Getter de Imagen](#getter-de-imagen)
- [Setter de Imagen](#setter-de-imagen)

### Getter de Imagen

- **Arquetipo:** `getImagen()`
- **Descripción:** Permite obtener el `Icon` de la imagen usada para renderizar
  el componente.
- **Atributos Relacionados:** [Imagen](#imagen)
- > **Ejemplo de uso:**
  >
  > ```java
  > ImagenFBR i = new ImagenFBR(...);
  > Icon ico = i.getAvatar(); // ico = Icon
  > ```

### Setter de Imagen

- **Arquetipo:** `setImagen(Icon)`
- **Parámetros:** `Icon` imagen a renderizar.
- **Descripción:** Permite modificar la imagen del fbr renderizada.
- **Particularidades:** Se recomienda que las imágenes sean con formato `.jpg` (versión ligera) o `.png` (transparencia).
  **No** se guardan los avatares que sean `null`, sino que
  se mantiene el valor anteriormente guardado.
- **Atributos Relacionados:** [Imagen](#imagen)
- > **Ejemplo de uso:**
  >
  > ```java
  > AvatarCircular avatar = new AvatarCircular();
  > avatar.setAvatar(ClaseBase.class.getResource("/img/avatar.png"));
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

		avatarCircular = new ImagenFBR(new ImageIcon(PruebaVisual.class.getResource("/imagenes_prueba/avatar2.jpg")), "40% 60% 60% 40% / 60% 30% 70% 40%", "40% 60%");
		avatarCircular.setBounds(151, 65, 136, 115);
		contentPane.add(avatarCircular);
	}
}

```

## Código Fuente

```java
public class ImagenFBR extends JComponent{
	private static final long serialVersionUID = 1L;

	private Animator animator;
	private Animator animatorRotate;
	private float animate;
	private float rotate;
	private FancyAnimation fancyAnimation;
	
	private Icon imagen;

	public ImagenFBR(Icon imagen, String fbrStart, String fbrEnd) {
		this.imagen = imagen;
		fancyAnimation = new FancyAnimation(fbrStart, fbrEnd);
		animator = new Animator(5000, new TimingTargetAdapter() {
			@Override
			public void timingEvent(float fraction) {
				animate = fraction;
				repaint();
			}
		});
		animator.setResolution(5);
		animator.setRepeatCount(-1);
		animator.setRepeatBehavior(Animator.RepeatBehavior.REVERSE);

		animatorRotate = new Animator(10000, new TimingTargetAdapter() {
			@Override
			public void timingEvent(float fraction) {
				rotate = fraction;
			}
		});
		animatorRotate.setResolution(5);
		animatorRotate.setRepeatCount(-1);
		animatorRotate.setRepeatBehavior(Animator.RepeatBehavior.LOOP);
	}
	
	public Icon getImagen() {
		return imagen;
	}

	public void setImagen(Icon image) {
		this.imagen = image;
		repaint();
	}


	public void start() {
		if (!animator.isRunning()) {
			animator.start();
			animatorRotate.start();
		}
	}

	public void stop() {
		animator.stop();
		animatorRotate.stop();
	}

	@Override
	protected void paintComponent(Graphics grphcs) {
		double width = getWidth() * 0.8f;
		double height = getHeight() * 0.8f;
		double x = (getWidth() - width) / 2;
		double y = (getHeight() - height) / 2;
		BufferedImage img = new BufferedImage(getWidth(), getHeight(), BufferedImage.TYPE_INT_ARGB);
		Graphics2D g2 = img.createGraphics();
		g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		FancyBorderRadius border = new FancyBorderRadius(width, height, fancyAnimation.getAnimate(animate));
		AffineTransform tran = g2.getTransform();
		g2.translate(x, y);
		g2.rotate(Math.toRadians(360 * rotate), width / 2, height / 2);
		g2.fill(border.getShape());
		if (imagen != null) {
			g2.setTransform(tran);
			g2.setComposite(AlphaComposite.SrcIn);
			Rectangle rec = getAutoSize(imagen);
			g2.drawImage(toImage(imagen), rec.x, rec.y, rec.width, rec.height, null);
		}
		g2.dispose();
		grphcs.drawImage(img, 0, 0, null);
		super.paintComponent(grphcs);
	}

	private Rectangle getAutoSize(Icon image) {
		int w = getWidth();
		int h = getHeight();
		int iw = image.getIconWidth();
		int ih = image.getIconHeight();
		double xScale = (double) w / iw;
		double yScale = (double) h / ih;
		double scale = Math.max(xScale, yScale);
		int width = (int) (scale * iw);
		int height = (int) (scale * ih);
		if (width < 1) {
			width = 1;
		}
		if (height < 1) {
			height = 1;
		}
		int x = (w - width) / 2;
		int y = (h - height) / 2;
		return new Rectangle(new Point(x, y), new Dimension(width, height));
	}

	private Image toImage(Icon icon) {
		return ((ImageIcon) icon).getImage();
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.awt.AlphaComposite;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Point;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.image.BufferedImage;

import javax.swing.Icon;
import javax.swing.ImageIcon;
import javax.swing.JComponent;

import org.jdesktop.animation.timing.Animator;
import org.jdesktop.animation.timing.TimingTargetAdapter;

import raven.fbr.FancyAnimation;
import raven.fbr.FancyBorderRadius;
```

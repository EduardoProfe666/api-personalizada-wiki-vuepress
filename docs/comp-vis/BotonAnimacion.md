---
title: BotonAnimacion
---

![a](/images/banner.png)

# BotonAnimacion

Clase visual que permite el modelado de un botón con animación al ser presionado.

Esta clase hereda de `JButton`.

Este componente se visualiza mejor con los lafs de FlatLaf.

**Preview de Componente en la Prueba Visual:**
![a](/gifs/boton-animacion.gif)

## Índice de Contenido

[[toc]]

## Constructores

- [Constructor vacío](#constructor-vacío)

### Constructor vacío

- **Arquetipo:** `BotonAnimacion()`
- **Descripción:** Permite construir el componente visual `BotonAnimacion`.
- **Particularidades:** El componente es creado con `background` de color blanco, y con un [color de efecto](#color-de-efecto) con `rgb(173,173,173)`
- > **Ejemplo de uso:**
  >
  > ```java
  > BotonAnimacion btn = new BotonAnimacion();
  > ```

## Atributos de interés

- [Color de efecto](#color-de-efecto)

### Color de Efecto

- **Arquetipo:** `Color colorEfecto`
- **Descripción:** `Color` que determina el color de la animación.
- **Métodos Relacionados:** [Getter de Color de Efecto](#getter-de-color-de-efecto) y [Setter de Color de Efecto](#setter-de-color-de-efecto)

## Métodos de interés

- [Getter de Color de Efecto](#getter-de-color-de-efecto)
- [Setter de Color de Efecto](#setter-de-color-de-efecto)

### Getter de Color de Efecto

- **Arquetipo:** `getColorEfecto()`
- **Descripción:** Permite obtener el `Color` de la animación.
- **Atributos Relacionados:** [Color de Efecto](#color-de-efecto)
- > **Ejemplo de uso:**
  >
  > ```java
  > Color colorEfecto = new BotonAnimacion().getColorEfecto();
  > ```

### Setter de Color de Efecto

- **Arquetipo:** `setColorEfecto(Color)`
- **Parámetros:** `Color` de la animación.
- **Descripción:** Permite cambiar el `Color` de la animación.
- **Particularidades:** **No** se guardan los colores que sean `null`, sino que se mantiene
  el valor anteriormente guardado.
- **Atributos Relacionados:** [Color de Efecto](#color-de-efecto)
- > **Ejemplo de uso:**
  >
  > ```java
  > BotonAnimacion btn = new BotonAnimacion();
  > btn.setColorEfecto(Color.RED);
  > ```

## Ejemplo de Uso

```java
public class Prueba extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private BotonAnimacion btn;

	public Prueba() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		btn = new BotonAnimacion();
		btn.setForeground(Color.CYAN);
		btn.setFont(new Font("Tahoma", Font.PLAIN, 18));
		btn.setText("Hola");
		btn.setBackground(Color.RED);
		btn.setColorEfecto(Color.YELLOW);
		btn.setBounds(113, 120, 130, 76);
		contentPane.add(btn);

	}
}
```

## Código Fuente

```java
public class BotonAnimacion extends JButton {

    private static final long serialVersionUID = 1L;

	public Color getColorEfecto() {
        return colorEfecto;
    }
    public void setColorEfecto(Color colorEfecto) {
    	if(colorEfecto!=null)
    		this.colorEfecto = colorEfecto;
    }

    private Animator animator;
    private int tamMaxBtn;
    private float tamAnim;
    private Point puntoPresionado;
    private float alpha;
    private Color colorEfecto = new Color(173, 173, 173);

    public BotonAnimacion() {
        setContentAreaFilled(false);
        setBorder(new EmptyBorder(5, 5, 5, 5));
        setBackground(Color.WHITE);
        setCursor(new Cursor(Cursor.HAND_CURSOR));
        addMouseListener(new MouseAdapter() {
            @Override
            public void mousePressed(MouseEvent m) {
                tamMaxBtn = Math.max(getWidth(), getHeight()) * 2;
                tamAnim = 0;
                puntoPresionado = m.getPoint();
                alpha = 0.5f;
                if (animator.isRunning()) {
                    animator.stop();
                }
                animator.start();
            }
        });
        TimingTarget tiempoPreferido = new TimingTargetAdapter() {
            @Override
            public void timingEvent(float fraccion) {
                if (fraccion > 0.5f) {
                    alpha = 1 - fraccion;
                }
                tamAnim = fraccion * tamMaxBtn;
                repaint();
            }
        };
        animator = new Animator(400, tiempoPreferido);
        animator.setResolution(0);
    }

    @Override
    protected void paintComponent(Graphics grphcs) {
        int ancho = getWidth();
        int alto = getHeight();
        BufferedImage img = new BufferedImage(ancho, alto, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2 = img.createGraphics();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2.setColor(getBackground());
        g2.fillRoundRect(0, 0, ancho, alto, alto, alto);
        if (puntoPresionado != null) {
            g2.setColor(colorEfecto);
            g2.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, alpha));
            g2.fillOval((int) (puntoPresionado.x - tamAnim / 2), (int) (puntoPresionado.y - tamAnim / 2), (int) tamAnim, (int) tamAnim);
        }
        g2.dispose();
        grphcs.drawImage(img, 0, 0, null);
        super.paintComponent(grphcs);
    }
}
```

## Clases utilizadas (Importaciones)

```java
import java.awt.AlphaComposite;

import java.awt.Color;
import java.awt.Cursor;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.RenderingHints;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import javax.swing.JButton;
import javax.swing.border.EmptyBorder;
import org.jdesktop.animation.timing.Animator;
import org.jdesktop.animation.timing.TimingTarget;
import org.jdesktop.animation.timing.TimingTargetAdapter;
```

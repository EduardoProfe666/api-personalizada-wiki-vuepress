---
title: ManejadorLookAndFeels
---

![a](/images/banner.png)

# ManejadorLookAndFeels

Clase de utilidades que permite el manejo de los looks and feel referenciados, de una manera sencilla permitiendo
realizarlo incluso en tiempo de ejecución.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
try{
    ManejadorLookAndFeels.setLookAndFeel(ManejadorLookAndFeels.NIMBUS);
} catch(UnsupportedLookAndFeelException e) {}
```

::: tip Nota:
En la prueba visual de la api, existe una prueba de estas funcionalidades en la sección de `Utilidades Interfaz`.
:::

## Índice de contenido

[[toc]]

## Métodos implementados

Los métodos implementados son:

- [Cambiar el Look And Feel](#cambiar-el-look-and-feel)
- [Cambiar el Look And Feel de un Componente dinámicamente](#cambiar-el-look-and-feel-de-un-componente-dinámicamente)

### Cambiar el Look And Feel

- **Arquetipo:** `setLookAndFeel(int)`
- **Parámetros:** Índice del Look and Feel deseado
- **Descripción:** Método que permite el manejo de los looks and feels referenciados. Simplemente, es necesario
  el índice en esta clase del laf deseado. El método hará el cambio.
- **Particularidades:** **No** es dinámico, es decir, no puede ser empleado para cambiar
  el laf en tiempo de ejecución. Para ello, utilice [`setLookAndFeel(int)`](#cambiar-el-look-and-feel-de-un-componente-dinámicamente).
  Su uso potencial sería en el constructor de un `JFrame` al inicio para que se instale el laf seleccionado.
  Es necesario capturar la excepción con `try-catch` o `throws`.
  Si no se pasa un índice correcto se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > try{
  >  ManejadorLookAndFeels.setLookAndFeel(ManejadorLookAndFeels.NIMBUS);
  >  } catch(UnsupportedLookAndFeelException e) {}
  > ```

### Cambiar el Look And Feel de un Componente dinámicamente

- **Arquetipo:** `setLookAndFeelDinamico(int, Component)`
- **Parámetros:** Índice del Look and Feel deseado, `Component` al cual se le va a cambiar el laf
- **Descripción:** Método que permite el manejo de los looks and feels referenciados. Simplemente, es necesario
  el índice en esta clase del laf deseado. El método hará el cambio.
- **Particularidades:** Este método puede ser usado para cambiar en tiempo de ejecución el laf de manera dinámica.
  Se recomienda usarla en las ventanas contenedoras `JFrame` y `JDialog` para un mejor resultado.
  Es necesario capturar la excepción con `try-catch` o `throws`.
  Si no se pasa un índice correcto se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > JFrame frame = new JFrame();
  > try{
  >  ManejadorLookAndFeels.setLookAndFeel(ManejadorLookAndFeels.NIMBUS, frame);
  >  } catch(UnsupportedLookAndFeelException e) {}
  > ```

## Listado de Look and Feels

Los Looks and Feels disponibles son:

- `PREDETERMINADO` (**Metal**) = -1;
- `NIMBUS` = 0;
- **FlatLaf**
  - `FLATLAF_LIGHT` = 1;
  - `FLATLAF_DARK` = 2;
  - `FLATLAF_DARCULA` = 3;
  - `FLATLAF_ARC` = 4;
  - `FLATLAF_ARC_ORANGE` = 5;
  - `FLATLAF_ARC_DARK` = 6;
  - `FLATLAF_ARC_DARK_ORANGE` = 7;
  - `FLATLAF_CARBON` = 8;
  - `FLATLAF_COBALT2` = 9;
  - `FLATLAF_CYAN_LIGHT` = 10;
  - `FLATLAF_DARK_FLAT` = 11;
  - `FLATLAF_DARK_PURPLE` = 12;
  - `FLATLAF_DRACULA` = 13;
  - `FLATLAF_GRADIANTO_DARK_FUCHSIA` = 14;
  - `FLATLAF_GRADIANTO_DEEP_OCEAN` = 15;
  - `FLATLAF_MIDNIGHT_BLUE` = 16;
  - `FLATLAF_NATURE_GREEN` = 17;
  - `FLATLAF_GRAY` = 18;
  - `FLATLAF_GRUVBOX_DARK_HARD` = 19;
  - `FLATLAF_GRUVBOX_DARK_MEDIUM` = 20;
  - `FLATLAF_GRUVBOX_DARK_SOFT` = 21;
  - `FLATLAF_HIBERBEE_DARK` = 22;
  - `FLATLAF_HIGH_CONTRAST` = 23;
  - `FLATLAF_LIGHT_FLAT` = 24;
  - `FLATLAF_MATERIAL_DESIGN_DARK` = 25;
  - `FLATLAF_MONOCAI` = 26;
  - `FLATLAF_MONOKAI_PRO` = 27;
  - `FLATLAF_NORD` = 28;
  - `FLATLAF_ONE_DARK` = 29;
  - `FLATLAF_SOLARIZED_DARK` = 30;
  - `FLATLAF_SOLARIZED_LIGHT` = 31;
  - `FLATLAF_SPACEGRAY` = 32;
  - `FLATLAF_VUESION` = 33;
  - `FLATLAF_XCODE_GRAY` = 34;

## Prueba Visual

En la prueba visual, en la sección Utilidades-Modelos, se pueden probar visualmente de forma dinámica los
Looks and Feels disponibles. Dicha funcionalidad emplea el método `setLookAndFeelDinamico(int, Component)` para poder lograr su cometido.

> **Prueba Visual:**
> ![a](/gifs/look-and-feel.gif)

## Código Fuente

```java
public final class ManejadorLookAndFeels {
	private ManejadorLookAndFeels() {}
	//Predeterminados
	public static final int PREDETERMINADO = -1;
	public static final int NIMBUS = 0;
	//FlatLaf
	public static final int FLATLAF_LIGHT = 1;
	public static final int FLATLAF_DARK = 2;
	public static final int FLATLAF_DARCULA = 3;
	public static final int FLATLAF_ARC = 4;
	public static final int FLATLAF_ARC_ORANGE = 5;
	public static final int FLATLAF_ARC_DARK = 6;
	public static final int FLATLAF_ARC_DARK_ORANGE = 7;
	public static final int FLATLAF_CARBON = 8;
	public static final int FLATLAF_COBALT2 = 9;
	public static final int FLATLAF_CYAN_LIGHT = 10;
	public static final int FLATLAF_DARK_FLAT = 11;
	public static final int FLATLAF_DARK_PURPLE = 12;
	public static final int FLATLAF_DRACULA = 13;
	public static final int FLATLAF_GRADIANTO_DARK_FUCHSIA = 14;
	public static final int FLATLAF_GRADIANTO_DEEP_OCEAN = 15;
	public static final int FLATLAF_MIDNIGHT_BLUE = 16;
	public static final int FLATLAF_NATURE_GREEN = 17;
	public static final int FLATLAF_GRAY = 18;
	public static final int FLATLAF_GRUVBOX_DARK_HARD = 19;
	public static final int FLATLAF_GRUVBOX_DARK_MEDIUM = 20;
	public static final int FLATLAF_GRUVBOX_DARK_SOFT = 21;
	public static final int FLATLAF_HIBERBEE_DARK = 22;
	public static final int FLATLAF_HIGH_CONTRAST = 23;
	public static final int FLATLAF_LIGHT_FLAT = 24;
	public static final int FLATLAF_MATERIAL_DESIGN_DARK = 25;
	public static final int FLATLAF_MONOCAI = 26;
	public static final int FLATLAF_MONOKAI_PRO = 27;
	public static final int FLATLAF_NORD = 28;
	public static final int FLATLAF_ONE_DARK = 29;
	public static final int FLATLAF_SOLARIZED_DARK = 30;
	public static final int FLATLAF_SOLARIZED_LIGHT = 31;
	public static final int FLATLAF_SPACEGRAY = 32;
	public static final int FLATLAF_VUESION = 33;
	public static final int FLATLAF_XCODE_GRAY = 34;
	
	public static void setLookAndFeel(int lookAndFeel) throws UnsupportedLookAndFeelException{
		switch(lookAndFeel){
		case -1:
			UIManager.setLookAndFeel(new MetalLookAndFeel());
			break;
		case 0:
			UIManager.setLookAndFeel(new NimbusLookAndFeel());
			break;
		case 1:
			FlatLightLaf.setup();
			break;	 
		case 2:
			FlatDarkLaf.setup();
			break;
		case 3:
			FlatDarculaLaf.setup();
			break;
		case 4:
			FlatArcIJTheme.setup();
			break;
		case 5:
			FlatArcOrangeIJTheme.setup();
			break;
		case 6:
			FlatArcDarkIJTheme.setup();
		case 7:
			FlatArcDarkOrangeIJTheme.setup();
			break;
		case 8:
			FlatCarbonIJTheme.setup();
			break;
		case 9:
			FlatCobalt2IJTheme.setup();
			break;
		case 10:
			FlatCyanLightIJTheme.setup();
			break;
		case 11:
			FlatDarkFlatIJTheme.setup();
			break;
		case 12:
			FlatDarkPurpleIJTheme.setup();
			break;
		case 13:
			FlatDraculaIJTheme.setup();
			break;
		case 14:
			FlatGradiantoDarkFuchsiaIJTheme.setup();
			break;
		case 15:
			FlatGradiantoDeepOceanIJTheme.setup();
			break;
		case 16:
			FlatGradiantoMidnightBlueIJTheme.setup();
			break;
		case 17:
			FlatGradiantoNatureGreenIJTheme.setup();
			break;
		case 18:
			FlatGrayIJTheme.setup();
			break;
		case 19:
			FlatGruvboxDarkHardIJTheme.setup();
			break;
		case 20:
			FlatGruvboxDarkMediumIJTheme.setup();
			break;
		case 21:
			FlatGruvboxDarkSoftIJTheme.setup();
			break;
		case 22:
			FlatHiberbeeDarkIJTheme.setup();
			break;
		case 23:
			FlatHighContrastIJTheme.setup();
			break;
		case 24:
			FlatLightFlatIJTheme.setup();
			break;
		case 25:
			FlatMaterialDesignDarkIJTheme.setup();
			break;
		case 26:
			FlatMonocaiIJTheme.setup();
			break;
		case 27:
			FlatMonokaiProIJTheme.setup();
			break;
		case 28:
			FlatNordIJTheme.setup();
			break;
		case 29:
			FlatOneDarkIJTheme.setup();
			break;
		case 30:
			FlatSolarizedDarkIJTheme.setup();
			break;
		case 31:
			FlatSolarizedLightIJTheme.setup();
			break;
		case 32:
			FlatSpacegrayIJTheme.setup();
			break;
		case 33:
			FlatVuesionIJTheme.setup();
			break;
		case 34:
			FlatXcodeDarkIJTheme.setup();
			break;
		default:
			throw new IllegalArgumentException("Debe elegir un lookAndFeel correcto");
		}
	}
	
	public static void setLookAndFeelDinamico(int lookAndFeel, Component c) throws UnsupportedLookAndFeelException{
		setLookAndFeel(lookAndFeel);
		SwingUtilities.updateComponentTreeUI(c);
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.awt.Component;

import javax.swing.SwingUtilities;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.plaf.metal.MetalLookAndFeel;
import javax.swing.plaf.nimbus.NimbusLookAndFeel;

import com.formdev.flatlaf.FlatDarculaLaf;
import com.formdev.flatlaf.FlatDarkLaf;
import com.formdev.flatlaf.FlatLightLaf;
import com.formdev.flatlaf.intellijthemes.FlatArcDarkIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatArcDarkOrangeIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatArcIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatArcOrangeIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatCarbonIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatCobalt2IJTheme;
import com.formdev.flatlaf.intellijthemes.FlatCyanLightIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatDarkFlatIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatDarkPurpleIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatDraculaIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGradiantoDarkFuchsiaIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGradiantoDeepOceanIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGradiantoMidnightBlueIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGradiantoNatureGreenIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGrayIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGruvboxDarkHardIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGruvboxDarkMediumIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatGruvboxDarkSoftIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatHiberbeeDarkIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatHighContrastIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatLightFlatIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatMaterialDesignDarkIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatMonocaiIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatMonokaiProIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatNordIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatOneDarkIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatSolarizedDarkIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatSolarizedLightIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatSpacegrayIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatVuesionIJTheme;
import com.formdev.flatlaf.intellijthemes.FlatXcodeDarkIJTheme;
```

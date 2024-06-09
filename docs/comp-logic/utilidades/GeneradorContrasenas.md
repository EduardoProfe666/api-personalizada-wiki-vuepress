---
title: GeneradorContrasenas
---

![a](/images/banner.png)

# GeneradorContrasenas

Clase de utilidades que permite la generación de contraseñas de longitud y tipo variable.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
String pass = GeneradorContraseñas.generarContraseña(TipoContraseña.ALFABETICA);
```

::: tip Nota:
En la prueba visual de la api, existe una prueba de estas funcionalidades en la sección de `Generadores`.
:::

## Índice de contenido

[[toc]]

## Métodos implementados

- [Generar contraseña dado un TipoContraseña](#generar-contraseña-dado-un-tipocontraseña)
- [Generar contraseña dado una longitud y un TipoContraseña](#generar-contraseña-dado-una-longitud-y-un-tipocontraseña)
- [Generar contraseña dado una longitud y una piscina de caracteres](#generar-contraseña-dado-una-longitud-y-una-piscina-de-caracteres)

### Generar contraseña dado un TipoContraseña

- **Arquetipo:** `generarContraseña(TipoContraseña)`
- **Parámetros:** `TipoContraseña`
- **Descripción:** Permite generar una contraseña de longitud variable, teniendo como extremos `LONGITUD_MINIMA`(10) y
  `LONGITUD_MAXIMA`(30). Dicha contraseña se generará con caracteres del tipo especificado.
- > **Ejemplo de uso:**
  >
  > ```java
  > String pass = GeneradorContraseñas.generarContraseña(TipoContraseña.ALFABETICA);
  > ```

### Generar contraseña dado una longitud y un TipoContraseña

- **Arquetipo:** `generarContraseña(int, TipoContraseña)`
- **Parámetros:** Longitud y `TipoContraseña`
- **Descripción:** Permite generar una contraseña de longitud proporcionada y con caracteres del tipo especificado.
- > **Ejemplo de uso:**
  >
  > ```java
  > String pass = GeneradorContraseñas.generarContraseña(20,TipoContraseña.ALFABETICA);
  > ```

### Generar contraseña dado una longitud y una piscina de caracteres

- **Arquetipo:** `generarContraseña(int, CharSequence)`
- **Parámetros:** Longitud y `CharSequence` piscina de caracteres
- **Descripción:** Permite generar una contraseña de longitud proporcionada y con caracteres del `CharSequence` pasado.
- > **Ejemplo de uso:**
  >
  > ```java
  > String pass = GeneradorContraseñas.generarContraseña(23,"!@#$*&^)(+{}");
  > ```

## Enums

Los enums son:

- [TipoContraseña](#tipocontraseña)

### TipoContraseña

Enum que permite modelar los tipos de contraseñas.

Los tipos de contraseñas actualmente soportados son:

- `ALFANUMERICA`: Permite crear contraseñas de tipo alfanumérico, teniendo como CharSequence base a: <b>0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</b>
- `NUMERICA`: Permite crear contraseñas de tipo numérico, teniendo como CharSequence base a: <b>0123456789</b>
- `ALFABETICA`: Permite crear contraseñas de tipo alfabético, teniendo como CharSequence base a: <b>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</b>
- `ALFABETICA_MINUSCULA`: Permite crear contraseñas de tipo alfabético minúsculo, teniendo como CharSequence base a: <b>abcdefghijklmnopqrstuvwxyz</b>
- `ALFABETICA_MAYUSCULA`: Permite crear contraseñas de tipo alfabético mayúsculo, teniendo como CharSequence base a: <b>ABCDEFGHIJKLMNOPQRSTUVWXYZ</b>

## Código Fuente

```java
public class GeneradorContraseñas {
	private GeneradorContraseñas(){}

	private static final CharSequence alfaNum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private static final CharSequence num = "0123456789";
	private static final CharSequence alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private static final CharSequence alfaMayusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final CharSequence alfaMinusc = "abcdefghijklmnopqrstuvwxyz";

	private static final int LONGITUD_MINIMA = 10;

	private static final int LONGITUD_MAXIMA = 30;

	private static final Random rnd = new Random();

	private static CharSequence charSequence(TipoContraseña tipoCaracteresContraseña) {
		CharSequence c = null;
		switch(tipoCaracteresContraseña) {
		case ALFANUMERICA:
			c = alfaNum;
			break;
		case NUMERICA:
			c = num;
			break;
		case ALFABETICA:
			c = alfa;
			break;
		case ALFABETICA_MINUSCULA:
			c = alfaMinusc;
			break;
		case ALFABETICA_MAYUSCULA:
			c = alfaMayusc;
			break;
		}
		return c;
	}

	public static String generarContraseña(TipoContraseña tipoCaracteresContraseña) {
		return generarContraseña(rnd.nextInt(LONGITUD_MAXIMA+1-LONGITUD_MINIMA)+LONGITUD_MINIMA,
				tipoCaracteresContraseña).toString();
	}

	public static String generarContraseña(int longitud,TipoContraseña tipoCaracteresContraseña) {
		return generarContraseña(longitud, charSequence(tipoCaracteresContraseña)).toString();
	}

	public static String generarContraseña(int longitud, CharSequence caracteres) {
		StringBuilder s = new StringBuilder(longitud);

		int tamCs = caracteres.length();

		while(longitud-->0) {
			s.append(caracteres.charAt(rnd.nextInt(tamCs)));
		}

		return s.toString();
	}

	public static enum TipoContraseña{

		ALFANUMERICA,

		NUMERICA,

		ALFABETICA,

		ALFABETICA_MINUSCULA,

		ALFABETICA_MAYUSCULA
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.util.Random;
```

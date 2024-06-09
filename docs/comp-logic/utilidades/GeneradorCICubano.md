---
title: GeneradorCICubano
---

![a](/images/banner.png)

# GeneradorCICubano

Clase de utilidades que permite la generación de carnet de identidad cubanos válidos y únicos, y otras funcionalidades.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
String ci = GeneradorCICubano.generarCICubano(Sexo.Masculino, 23);
```

::: tip Nota:
En la prueba visual de la api, existe una prueba de estas funcionalidades en la sección de `Generadores`.
:::

## Índice de contenido

[[toc]]

## Formato de CI cubano

El algoritmo de generación de carnet de identidad cubano utiliza el siguiente formato para
generar los 11 dígitos del ci:

- **Dígitos 1-2:** Dígitos que representan los 2 últimos dígitos del año de nacimiento. Por ejemplo: `2002`->`02`.
- **Dígitos 3-4:** Dígitos que representan el mes de nacimiento, siendo `enero`->`01` y `diciembre`->`12`.
- **Dígitos 5-6:** Dígitos que representan el día de nacimiento. Por ejemplo: `01` y `31`.
- **Dígito 7:** Dígito que representa el siglo de nacimiento, siendo `0-5`->`Siglo XX`, `6-8`->`Siglo XXI` y `9`->`Siglo XIX`
- **Dígitos 8-9:** Dígitos aleatorios.
- **Dígitos 10:** Dígito que representa el sexo, de forma tal que si es par es masculino e impar si es femenino.
- **Dígitos 11:** Dígito aleatorio. (En verdad este es un dígito de control, pero no se pudo recolectar el algoritmo empleado para su generación)

## Métodos implementados

- [Generar CI dado Sexo y edad](#generar-ci-dado-sexo-y-edad)
- [Generar CI dado Sexo y un rango de edades](#generar-ci-dado-sexo-y-un-rango-de-edades)
- [Generar Listado de CI dado cantidad, Sexo y un rango de edades](#generar-listado-de-ci-dado-cantidad-sexo-y-un-rango-de-edades)
- [Generar informe txt de listado de CI dado cantidad, Sexo y rango de edades](#generar-informe-txt-de-listado-de-ci-dado-cantidad-sexo-y-rango-de-edades)

### Generar CI dado Sexo y edad

- **Arquetipo:** `generarCICubano(Sexo, int)`
- **Parámetros:** `Sexo` y edad
- **Descripción:** Permite generar de forma aleatoria un ci cubano válido con `Sexo` y edad dados.
- **Particularidades:** Si sexo es `null` o edad < 0, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > String ci = GeneradorCICubano.generarCICubano(Sexo.FEMENINO,1);
  > ```

### Generar CI dado Sexo y un rango de edades

- **Arquetipo:** `generarCICubano(Sexo, int, int)`
- **Parámetros:** `Sexo` y rango de edades
- **Descripción:** Permite generar de forma aleatoria un ci cubano válido con `Sexo` dado y una edad aleatoria en el rango entre edadMin y edadMax.
- **Particularidades:** Si sexo es `null`, o edadMax o edadMin son menores que 0, o edadMin > edadMax, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > String ci = GeneradorCICubano.generarCICubano(Sexo.MASCULINO,2,4);
  > ```

### Generar Listado de CI dado cantidad, Sexo y un rango de edades

- **Arquetipo:** `generarListadoCICubano(int, Sexo, int, int)`
- **Parámetros:** Cantidad de ci, `Sexo` y rango de edades
- **Descripción:** Permite generar un listado con una cantidad determinada de ci cubanos únicos y de forma aleatoria.
  Se generarán con el `Sexo` dado y una edad aleatoria en el rango entre edadMin y edadMax.
- **Particularidades:** Si sexo es `null`, o edadMax o edadMin son menores que 0, o edadMin > edadMax, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listadoCI = GeneradorCICubano.generarListadoCICubano(1000000,Sexo.ALEATORIO,10,25);
  > ```

### Generar informe txt de listado de CI dado cantidad, Sexo y rango de edades

- **Arquetipo:** `generarInformeListadoCiCubano(int, Sexo, int, int)`
- **Parámetros:** Cantidad de ci, `Sexo` y rango de edades
- **Descripción:** Permite generar un txt en la carpeta raíz que contiene un listado con una cantidad determinada de ci cubanos únicos y de forma aleatoria. Se generarán con el `Sexo` dado y una edad aleatoria en el rango entre edadMin y edadMax.
  Este archivo se crea con el nombre **Listado_Ci_Generados.txt**. Al crearse, se imprime por consola la ruta del archivo generado.
- **Particularidades:**
  Si sexo es `null`, o edadMax o edadMin son menores que 0, o edadMin > edadMax, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > GeneradorCICubano.generarInformeListadoCiCubano(200000,Sexo.ALEATORIO,25,30);
  > ```

## Enums

Los enums son:

- [Sexo](#sexo)

### Sexo

Enum que permite modelar el sexo de los ci a generar.

Los sexos actualmente soportados son:

- `FEMENINO`: Permite generar ci de sexo femenino
- `MASCULINO`: Permite generar ci de sexo masculino
- `ALEATORIO`: Permite generar ci tanto de sexo femenino como masculino

## Código Fuente

```java
public final class GeneradorCICubano {
	private GeneradorCICubano() {}
	private static final Random rnd = new Random();

	public static String generarCICubano(Sexo sexo, int edad){
		if(sexo==null || edad<0)
			throw new IllegalArgumentException("Parámetros Erróneos");
		return generarCICubano(sexo, edad, edad);
	}

	public static String generarCICubano(Sexo sexo, int edadMin, int edadMax){
		if(sexo==null || edadMax<0 || edadMin<0 || edadMin>edadMax)
			throw new IllegalArgumentException("Parámetros Erróneos");
		Date fechaMin = Auxiliares.sumarAnyosFecha(new Date(), -edadMin);
		Date fechaMax = Auxiliares.sumarAnyosFecha(new Date(), -edadMax);
		Calendar fechaNacimiento = generarFechaCalendar(fechaMin, fechaMax);

		int anyo = fechaNacimiento.get(Calendar.YEAR);
		int mes = fechaNacimiento.get(Calendar.MONTH)+1;
		int dia = fechaNacimiento.get(Calendar.DAY_OF_MONTH);
		int sigloDisminuido = anyo/100;
		int anyoCi = anyo-(sigloDisminuido*100);

		return ""+convertirEnteroDobleString(anyoCi)+convertirEnteroDobleString(mes)+convertirEnteroDobleString(dia)+generarDigitoSiglo(sigloDisminuido)+convertirEnteroDobleString(generarEntero(0,99))+generarDigitoSexo(sexo)+generarEntero(0,9);
	}

	public static List<String> generarListadoCICubano(int cantidad, Sexo sexo, int edadMin, int edadMax){
		List<String> listadoCi = new ArrayList<String>(cantidad);
		for(int i=0;i<cantidad;i++){
			String ci;
			do{
				ci = generarCICubano(sexo, edadMin, edadMax);
			}while(comprobarCiExistente(ci, listadoCi));
			listadoCi.add(ci);
		}
		Collections.sort(listadoCi);
		return listadoCi;
	}

	public static void generarInformeListadoCiCubano(int cantidad, Sexo sexo, int edadMin, int edadMax){
		File f = new File("Listado_Ci_Generados.txt");
		f.delete();
		try {
			f.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
		try(PrintWriter pw = new PrintWriter(f)){
			for(String s : generarListadoCICubano(cantidad, sexo, edadMin, edadMax)){
				pw.println(s);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Ruta del archivo generado: "+System.getProperty("user.dir")+"/Listado_Ci_Generados.txt");

	}

	private static String convertirEnteroDobleString(int entero) {
		String s = String.valueOf(entero);
		if(entero>=0 && entero<10) {
			s = "0"+s;
		}
		return s;
	}

	private static int generarDigitoSiglo(int sigloDisminuido) {
		int digito=9;

		if(sigloDisminuido==19)
			digito = rnd.nextInt(6);
		else if(sigloDisminuido==20)
			digito = rnd.nextInt(3)+6;

		return digito;
	}

	private static int generarDigitoSexo(Sexo sexo) {
		int digito=rnd.nextInt(10);
		if(sexo.equals(Sexo.FEMENINO) || (sexo.equals(Sexo.ALEATORIO) && rnd.nextBoolean())) {
			if(digito%2==0) {
				digito++;
			}

		}
		else if(digito%2==1){
			digito--;
		}
		return digito;
	}

	private static int generarEntero(int min, int max) {
		return rnd.nextInt(max-min+1)+min;
	}

	private static Calendar generarFechaCalendar(Date fechaMinima, Date fechaMaxima) {
		long max = fechaMaxima.getTime();
		long min = fechaMinima.getTime();
		long fechaLong = min + (long)(Math.random() * (max-min));

		Calendar c = new GregorianCalendar();
		c.setTimeInMillis(fechaLong);
		return c;
	}

	private static boolean comprobarCiExistente(String ci,List<String> listadoCI) {
		boolean esValido = ci!=null;

		if(esValido)
			esValido = Collections.binarySearch(listadoCI, ci)>=0;
		return esValido;
	}

	public static enum Sexo{

		FEMENINO,

		MASCULINO,

		ALEATORIO
	}

}
```

## Clases utilizadas (Importaciones)

```java
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;
```

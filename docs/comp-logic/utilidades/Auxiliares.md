---
title: Auxiliares
---

![a](/images/banner.png)

# Auxiliares

Clase de utilidades que contiene algunos métodos para el trabajo con `Date` y con el
carnet de identidad cubano, además de otros.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
String ci = "05112568423";
Date fechaNacimiento = Auxiliares.convertirFechaNacimientoCiDate(ci);
```

## Índice de contenido

[[toc]]

## Métodos implementados

- [Extraer Fecha Nacimiento de un CI en forma de `Date`](#extraer-fecha-nacimiento-de-un-ci-en-forma-de-date)
- [Determinar la edad dado un `Date`](#determinar-la-edad-dado-un-date)
- [Determinar diferencia en años dados 2 `Date`](#determinar-diferencia-en-años-dados-2-date)
- [Determinar sexo dado un CI en forma de char](#determinar-sexo-dado-un-ci-en-forma-de-char)
- [Determinar sexo dado un CI en forma de String](#determinar-sexo-dado-un-ci-en-forma-de-string)
- [Sumar años al `Date` dado](#sumar-años-al-date-dado)
- [Determinar la cantidad de caracteres de un entero](#determinar-la-cantidad-de-caracteres-de-un-entero)
- [Introducir elementos en una lista de forma ordenada](#introducir-elementos-en-una-lista-de-forma-ordenada)

### Extraer Fecha Nacimiento de un CI en forma de `Date`

- **Arquetipo:** `convertirFechaNacimientoCiDate(String)`
- **Parámetros:** `String` carnet de identidad cubano
- **Descripción:** Método para extraer la fecha de nacimiento del carnet de identidad suministrado.
- **Particularidades:** Si el `String` pasado es **null** lanza un `IllegalArgumentException`. El carnet debe estar en el
  formato válido para el correcto funcionamiento de este método.
- > **Ejemplo de uso:**
  >
  > ```java
  > String ci = "05112568423";
  > Date fechaNacimiento = Auxiliares.convertirFechaNacimientoCiDate(ci);
  > ```

### Determinar la edad dado un `Date`

- **Arquetipo:** `determinarEdad(Date)`
- **Parámetros:** `Date` fecha de nacimiento
- **Descripción:** Método para determinar la edad actual de la persona en dependencia de su fecha de nacimiento.
- **Particularidades:** Si la fecha pasada es **null** o es póstuma al día actual lanza un
  `IllegalArgumentException`
- > **Ejemplo de uso:**
  >
  > ```java
  > Date d = new Date(2020,5,3);
  > int edad = Auxiliares.determinarEdad(d);
  > ```

### Determinar diferencia en años dados 2 `Date`

- **Arquetipo:** `determinarDiferenciaAnyos(Date, Date)`
- **Parámetros:** 2 `Date` fecha inicial y fecha final.
- **Descripción:** Método para determinar la diferencia en años entre dos fechas.
- **Particularidades:** Si la fecha inicial es póstuma a la fecha final, o cualquiera de ambas fecha es `null`
  lanza un `IllegalArgumentException`
- > **Ejemplo de uso:**
  >
  > ```java
  > Date d1 = new Date(2020,9,23);
  > Date d2 = new Date(2022,3,4);
  > int  dif = Auxiliares.determinarDiferenciaAnyos(d1,d2);
  > ```

### Determinar sexo en forma de char dado un CI 

- **Arquetipo:** `determinarSexo(String)`
- **Parámetros:** `String` carnet de identidad cubano.
- **Descripción:** Método para determinar el sexo de la persona en dependencia de su carnet de identidad.
  Devuelve un `char` referente al sexo ('F'->Femenino, 'M'->Masculino).
- **Particularidades:** El carnet de identidad debe ser válido para que el algoritmo funcione.
  Si el carnet de identidad pasado es `null` o no tiene longitud 11, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > String ci = "05112568423";
  > char sexoChar = Auxiliares.determinarSexo(ci);
  > ```

### Determinar sexo en forma de String dado un CI

- **Arquetipo:** `determinarSexoString(String)`
- **Parámetros:** `String` carnet de identidad cubano.
- **Descripción:** Método para determinar el sexo de la persona en dependencia de su carnet de identidad.
  Devuelve `String` referente al sexo ("Femenino", "Masculino").
- **Particularidades:** El carnet de identidad debe ser válido para que el algoritmo funcione.
  Si el carnet de identidad pasado es `null` o no tiene longitud 11, se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > String ci = "05112568423";
  > String sexoString = Auxiliares.determinarSexoString(ci);
  > ```

### Sumar años al `Date` dado

- **Arquetipo:** `sumarAnyosFecha(Date, int)`
- **Parámetros:** `Date` fecha, `int` cantidad de años a sumar
- **Descripción:** Método para sumar (o restar) años a una fecha dada.
- **Particularidades:** Permite incrementar o decrementar una fecha en años, en dependencia del signo del entero pasado.
  Si la fecha es `null`se lanza un `IllegalArgumentException`.
- > **Ejemplo de uso:**
  >
  > ```java
  > Date d = new Date(2023,4,4);
  > Date dMod = Auxiliares.sumarAnyosFecha(d,2);
  > ```

### Determinar la cantidad de caracteres de un entero

- **Arquetipo:** `cantidadCaracteresEntero(int)`
- **Parámetros:** `int` Entero
- **Descripción:** Método para determinar la cantidad de caracteres que determinaría un
  entero en caso de ser `String`.
- > **Ejemplo de uso:**
  >
  > ```java
  > int cantCaracteres = Auxiliares.cantidadCaracteresEntero(3928);
  > ```

### Introducir elementos en una lista de forma ordenada

- **Arquetipo:** `introducirElementoListadoOrdenado(List, Comparable...)`
- **Parámetros:** Lista principal de elementos, Elementos a introducir
- **Descripción:** Método para introducir de forma ordenada un elemento (o varios) en una lista. Puede ser empleado
  para ordenar en una lista una serie de elementos, aunque no es recomendable su uso por la complejidad
  que podría alcanzar el algoritmo, en caso de que sean numerosos elementos.
- **Particularidades:** Emplea una inserción lineal por lo que se puede complicar con demasiados elementos.
  La lista debe estar previamente ordenada.
  Si alguno de los parámetros pasados es `null` se lanza un `IllegalArgumentException`
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7));
  > System.out.println("Lista antes de insertar elementos: "+lista);
  > Auxiliares.introducirElementoListadoOrdenado(lista,33,12,36,875,3422,467587,231);
  > System.out.println("Lista después de insertar elementos: "+ lista);
  > ```

## Código Fuente

```java
public final class Auxiliares {
	private Auxiliares(){}

	public static Date convertirFechaNacimientoCiDate(String ci) {
		if(ci==null){
			throw new IllegalArgumentException();
		}
		int siglo = 0;
		Date fechaNacimiento = null;

		int digitoMilenio = Byte.valueOf(""+ci.charAt(6));

		if(digitoMilenio<=5)
			siglo=20;
		else if(digitoMilenio<=8)
			siglo=21;
		else
			siglo=19;

		String anyo = (siglo-1)+ci.substring(0, 2);
		String mes = ci.substring(2,4);
		String dia = ci.substring(4,6);
		Calendar c = new GregorianCalendar(Integer.valueOf(anyo),Integer.valueOf(mes)-1, Integer.valueOf(dia));
		fechaNacimiento = c.getTime();


		return fechaNacimiento;
	}

	public static int determinarEdad(Date fechaNacimientoCi) {
		if(fechaNacimientoCi==null || fechaNacimientoCi.after(new Date()))
			throw new IllegalArgumentException();
		return determinarDiferenciaAnyos(fechaNacimientoCi, new Date());
	}

	public static int determinarDiferenciaAnyos(Date fechaInicial, Date fechaFinal) {
		if(fechaInicial==null || fechaFinal==null || fechaInicial.after(fechaFinal))
			throw new IllegalArgumentException();

		int difAnyos=0;

		Calendar fechaInic = new GregorianCalendar();
		fechaInic.setTime(fechaInicial);
		Calendar fechaFin = new GregorianCalendar();
		fechaFin.setTime(fechaFinal);

		difAnyos = fechaFin.get(Calendar.YEAR) - fechaInic.get(Calendar.YEAR);
		int difMeses = fechaFin.get(Calendar.MONTH) - fechaInic.get(Calendar.MONTH);
		int difDias = fechaFin.get(Calendar.DAY_OF_MONTH) - fechaInic.get(Calendar.DAY_OF_MONTH);

		if(difMeses<0 || (difMeses==0 && difDias<0))
			difAnyos--;


		return difAnyos;
	}

	public static char determinarSexo(String ci) {
		if(ci==null || ci.length()!=11)
			throw new IllegalArgumentException();
		char sexo = 'F';
		int aux = ci.charAt(9);
		if(aux%2==0)
			sexo = 'M';
		return sexo;
	}

	public static String determinarSexoString(String ci) {
		char sexo = determinarSexo(ci);
		return sexo == 'F' ? "Femenino" : "Masculino";
	}

	public static Date sumarAnyosFecha(Date fecha, int cantAnyos) {
		if(fecha==null)
			throw new IllegalArgumentException();
		Calendar fechaCalendar = new GregorianCalendar();
		fechaCalendar.setTime(fecha);
		fechaCalendar.set(Calendar.YEAR, fechaCalendar.get(Calendar.YEAR)+cantAnyos);
		return fechaCalendar.getTime();
	}

	public static int cantidadCaracteresEntero(int i) {
		return String.valueOf(i).length();
	}

	@SafeVarargs
	public static <T extends Comparable<? super T>> void introducirElementoListadoOrdenado(List<T> listado, T...elementos) {
		if(elementos==null || listado==null)
			throw new IllegalArgumentException();

		for(T t: elementos){
			if(t==null)
				throw new IllegalArgumentException();
		}

		for(T t : elementos){
			boolean aux=true;

			for(int i=0;i<listado.size() && aux;i++) {
				if(t.compareTo(listado.get(i))<0) {
					listado.add(i, t);
					aux=false;
				}
			}

			if(aux)
				listado.add(t);
		}
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
```

---
title: Validaciones
---

![a](/images/banner.png)

# Validaciones

Clase de utilidades que contiene algunas de las validaciones esenciales, incluyendo trabajo
con `String`, `List`, `Date`, números y validaciones referentes al carnet de identidad cubano.

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
boolean b = Validaciones.validarNumeroRango(20.3,19,25);
```

## Índice de contenido

[[toc]]

## Métodos implementados

- [Validar número en un rango dado](#validar-número-en-un-rango-dado)
- [Validar un String con un tamaño en un rango dado](#validar-un-string-con-un-tamaño-en-un-rango-dado)
- [Validar que un String tenga solo letras](#validar-que-un-string-tenga-solo-letras)
- [Validar que un String tenga solo dígitos](#validar-que-un-string-tenga-solo-dígitos)
- [Validar que un String sea alfanumérico sin espacios](#validar-que-un-string-sea-alfanumérico-sin-espacios)
- [Validar que un String no sea todo espacios](#validar-que-un-string-no-sea-todo-espacios)
- [Validar que un String no esté vacío](#validar-que-un-string-no-esté-vacío)
- [Validar que un String no tenga espacios](#validar-que-un-string-no-tenga-espacios)
- [Validar la no repetición en una lista](#validar-la-no-repetición-en-una-lista)
- [Validar la no repetición en una lista dado un Comparator](#validar-la-no-repetición-en-una-lista-dado-un-comparator)
- [Validar la no repetición de un elemento dado en una lista](#validar-la-no-repetición-de-un-elemento-dado-en-una-lista)
- [Validar la no repetición de un elemento dado en una lista dado un Comparator](#validar-la-no-repetición-de-un-elemento-dado-en-una-lista-dado-un-comparator)
- [Validar la no repetición en las listas pasadas](#validar-la-no-repetición-en-las-listas-pasadas)
- [Validar que el CI tenga la fecha de nacimiento en el rango de 2 fechas dadas](#validar-que-el-ci-tenga-la-fecha-de-nacimiento-en-el-rango-de-2-fechas-dadas)
- [Validar CI válido con una fecha de nacimiento en un rango de 2 fechas](#validar-ci-válido-con-una-fecha-de-nacimiento-en-un-rango-de-2-fechas)
- [Validar que la fecha esté en un rango de 2 fechas dadas](#validar-que-la-fecha-esté-en-un-rango-de-2-fechas-dadas)
- [Validar que los Calendars sean del mismo día](#validar-que-los-calendars-sean-del-mismo-día)
- [Validar que los Dates sean del mismo día](#validar-que-los-dates-sean-del-mismo-día)

### Validar número en un rango dado

- **Arquetipo:** `validarNumeroRango(double, double, double)`
- **Parámetros:** `double` valor, 2 `double` rangos mínimo y máximo.
- **Descripción:** Método que permitirá validar si un valor se encuentra en un rango dado.
- **Particularidades:** Retorna `false` si el rango mínimo es mayor que el rango máximo.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarNumerorRango(5.8,4,9); // b=true
  > ```

### Validar un String con un tamaño en un rango dado

- **Arquetipo:** `validarTamString(String, int, int)`
- **Parámetros:** `String` a validar, 2 `int` tamaños mínimo y máximos.
- **Descripción:** Método que permitirá validar si un `String` tiene un tamaño en un rango dado.
- **Particularidades:** Retorna `false` si el string es `null` o el tamaño mínimo es mayor que el tamaño máximo.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarTamString("abc",1,9); // b=true
  > ```

### Validar que un String tenga solo letras

- **Arquetipo:** `validarStringTodoLetra(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` está compuesto solo por letras, incluyendo los espacios.
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringTodoLetra("abc7"); // b=false
  > ```

### Validar que un String tenga solo dígitos

- **Arquetipo:** `validarStringTodoDigito(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` está compuesto solo por dígitos.
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringTodoDigito("87"); // b=true
  > ```

### Validar que un String sea alfanumérico sin espacios

- **Arquetipo:** `validarStringTodoDigitoLetraSinEspacio(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` está compuesta solo por dígitos y letras, sin espacios.
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringTodoDigitoLetraSinEspacio(" 7"); // b=false
  > ```

### Validar que un String no sea todo espacios

- **Arquetipo:** `validarStringNoTodoEspacio(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` está compuesto no solo por espacios.
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringNoTodoEspacio(" hh"); // b=true
  > ```

### Validar que un String no esté vacío

- **Arquetipo:** `validarStringNoVacio(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` no es `null` ni está vacío (`""`).
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringNoVacio(""); // b=false
  > ```

### Validar que un String no tenga espacios

- **Arquetipo:** `validarStringNoEspacio(String)`
- **Parámetros:** `String` a validar.
- **Descripción:** Método que permitirá validar si un `String` no se componga solamente por espacios.
- **Particularidades:** Retorna `false` si el string es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarStringNoEspacio("a"); // b=true
  > ```

### Validar la no repetición en una lista

- **Arquetipo:** `validarNoRepeticionLista(List)`
- **Parámetros:** `List` de elementos.
- **Descripción:** Método que permitirá validar la no repetición de los elementos de la lista.
- **Particularidades:** En esta implementación
  los elementos de la lista pasada deben implementar la interfaz `Comparable`, pues el algoritmo
  emplea el orden natural de los mismos.
  Retorna `false` si alguno de los parámetros es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,1,1));
  > boolean b = Validaciones.validarNoRepeticionLista(lista); // b=false
  > ```

### Validar la no repetición en una lista dado un Comparator

- **Arquetipo:** `validarNoRepeticionLista(List, Comparator)`
- **Parámetros:** `List` de elementos y `Comparator`.
- **Descripción:** Método que permitirá validar la no repetición de los elementos de la lista.
- **Particularidades:** En esta implementación
  se debe pasar un `Comparator` que indique el orden de los elementos de la lista, pues
  es empleado en el algoritmo.
  Retorna `false` si alguno de los parámetros es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3));
  > boolean b = Validaciones.validarNoRepeticionLista(lista,Collections.reverseOrder()); // b=true
  > ```

### Validar la no repetición de un elemento dado en una lista

- **Arquetipo:** `validarNoRepeticionElementoLista(List, Comparable)`
- **Parámetros:** `List` de elementos y elemento.
- **Descripción:** Método que permitirá validar la no repetición de un elemento en una lista.
- **Particularidades:** En esta implementación
  los elementos de la lista pasada deben implementar la interfaz `Comparable`, pues es el algoritmo
  emplea el orden natural de los mismos.
  Retorna `false` si alguno de los parámetros es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3));
  > boolean b = Validaciones.validarNoRepeticionElementoLista(lista,4); // b=true
  > ```

### Validar la no repetición de un elemento dado en una lista dado un Comparator

- **Arquetipo:** `validarNoRepeticionElementoLista(List, Object, Comparator)`
- **Parámetros:** `List` de elementos, elemento y `Comparator`.
- **Descripción:** Método que permitirá validar la no repetición de un elemento en una lista.
- **Particularidades:** En esta implementación
  se debe pasar un `Comparator` que indique el orden de los elementos de la lista, pues
  es empleado en el algoritmo.
  Retorna `false` si alguno los parámetros es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3));
  > boolean b = Validaciones.validarNoRepeticionElementoLista(lista, 4, Collections.reverseOrder()); // b=true
  > ```

### Validar la no repetición en las listas pasadas

- **Arquetipo:** `validarNoRepeticionListas(List...)`
- **Parámetros:** Serie o arreglo de `List` de elementos.
- **Descripción:** Método para validar que las listas pasadas no contengan elementos en común.
- **Particularidades:** Para usarlo se pueden pasar listas separadas por comas, o un arreglo de listas.
  Retorna `false` si alguna de las listas es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<Integer> lista1 = new ArrayList<Integer>(Arrays.asList(1,2,3));
  > List<Integer> lista2 = new ArrayList<Integer>(Arrays.asList(3,4,5));
  > List<Integer> lista3 = new ArrayList<Integer>(Arrays.asList(8));
  > boolean b = Validaciones.validarNoRepeticionListas(lista1, lista2, lista3); // b=false
  > ```

### Validar que el CI tenga la fecha de nacimiento en el rango de 2 fechas dadas

- **Arquetipo:** `validarFechaNacimientoCi(String, Date, Date)`
- **Parámetros:** `String` ci y rango de fechas de nacimiento.
- **Descripción:** Método que permitirá validar si un `String`, que corresponde a un carnet de identidad, contenga una
  fecha de nacimiento válida, dado un rango de fechas.
- **Particularidades:** Retorna `false` si el `String` ci es `null`.
  No se comprobará que el ci tenga fecha de nacimiento mínima si esta es `null`.
  No se comprobará que el ci tenga fecha de nacimiento máxima si esta es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarFechaNacimientoCi("02022368423",null,new Date()); // b=true
  > ```

### Validar CI válido con una fecha de nacimiento en un rango de 2 fechas

- **Arquetipo:** `validarCI(String, Date, Date)`
- **Parámetros:** `String` ci y rango de fechas de nacimiento.
- **Descripción:** Método que permitirá validar si un `String` corresponde a un verdadero carnet de identidad.
- **Particularidades:** Retorna `false` si el `String` ci es `null`.
  No se comprobará que el ci tenga fecha de nacimiento mínima si esta es `null`.
  No se comprobará que el ci tenga fecha de nacimiento máxima si esta es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarCI("0813246845",null,null); // b=false
  > ```

### Validar que la fecha esté en un rango de 2 fechas dadas

- **Arquetipo:** `validarRangoFecha(Date, Date, Date)`
- **Parámetros:** `Date` fecha y el rango de fechas.
- **Descripción:** Método que permitirá validar si un Date se encuentra en un rango determinado.
- **Particularidades:** Retorna `false` si alguno de los parámetros es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > Date d1 = new Date(2022,2,2);
  > Date d2 = new Date(2002,5,5);
  > Date d3 = new Date(2023,1,1);
  > boolean b = Validaciones.validarCI(d1,d2,d3); // b=true
  > ```

### Validar que los Calendars sean del mismo día

- **Arquetipo:** `validarCalendarsMismoDia(Calendar, Calendar)`
- **Parámetros:** 2 `Calendar`
- **Descripción:** Método para validar que dos `Calendar` representen el mismo día.
- **Particularidades:** Retorna `false` si alguno de los `Calendar` es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarCalendarsMismoDia(Calendar.getInstance(), Calendar.getInstance()); //b=true
  > ```

### Validar que los Dates sean del mismo día

- **Arquetipo:** `validarDatesMismoDia(Date, Date)`
- **Parámetros:** 2 `Date`
- **Descripción:** Método para validar que dos `Date` representen el mismo día.
- **Particularidades:** Retorna `false` si alguno de los `Date` es `null`.
- > **Ejemplo de uso:**
  >
  > ```java
  > boolean b = Validaciones.validarDatesMismoDia(new Date(2020,2,3), new Date(2020,2,2)); //b=false
  > ```

## Código Fuente

```java
public final class Validaciones {
	private Validaciones() {}

	public static boolean validarNumeroRango(double valor, double minV, double maxV) {
		boolean esValido = minV<=maxV;

		if(esValido)
			esValido = valor>=minV && valor<=maxV;

			return esValido;
	}

	public static boolean validarTamString(String s, int min, int max) {
		boolean esValido = s!=null && min<=max;

		if(esValido)
			esValido = s.length()>=min && s.length()<=max;

			return esValido;
	}

	public static boolean validarStringTodoLetra(String s) {
		boolean esValido = s!=null;

		for(int i=0;i<s.length() && esValido;i++)
			esValido = Character.isLetter(s.charAt(i)) || Character.isWhitespace(s.charAt(i));

		return esValido;
	}

	public static boolean validarStringTodoDigito(String s) {
		boolean esValido = s!=null;

		for(int i=0;i<s.length() && esValido;i++)
			esValido = Character.isDigit(s.charAt(i));

		return esValido;
	}

	public static boolean validarStringTodoDigitoLetraSinEspacio(String s) {
		boolean esValido = s!=null;

		for(int i=0;i<s.length() && esValido;i++)
			esValido = Character.isDigit(s.charAt(i)) || Character.isUpperCase(s.charAt(i)) || Character.isLowerCase(s.charAt(i));

		return esValido;
	}

	public static boolean validarStringNoTodoEspacio(String s) {
		boolean esValido = false;

		if(s!=null){
			for(int i=0;i<s.length() && !esValido;i++)
				if(!Character.isWhitespace(s.charAt(i)))
					esValido = true;
		}
		return esValido;
	}

	public static boolean validarStringNoVacio(String s) {
		return (s!=null && !s.isEmpty());
	}

	public static boolean validarStringNoEspacio(String s) {
		boolean esValido = (s!=null);

		for(int i=0;i<s.length() && esValido;i++)
			esValido = !Character.isWhitespace(s.charAt(i));

		return esValido;
	}

	public static boolean validarFechaNacimientoCi(String ci, Date fechaMin, Date fechaMax) {
		boolean esValido = ci!=null;

		if(esValido) {
			int siglo = 0;
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
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
			formato.setLenient(false);
			try {
				formato.parse(dia+"/"+mes+"/"+anyo);
			}catch(Exception e) {
				esValido=false;
			}
		}


		if(esValido){
			Date fecha = Auxiliares.convertirFechaNacimientoCiDate(ci);
			if(fechaMin!=null)
				esValido = fecha.compareTo(fechaMin)>=0;
			if(esValido && fechaMax!=null)
				esValido = fecha.compareTo(fechaMax)<=0;
		}

		return esValido;
	}

	public static boolean validarCI(String ci, Date fechaMin, Date fechaMax) {
		return validarStringNoVacio(ci) && validarTamString(ci,11,11) && validarStringTodoDigito(ci) && validarFechaNacimientoCi(ci,fechaMin,fechaMax);
	}

	public static boolean validarRangoFecha(Date fecha, Date fechaMin, Date fechaMax) {
		boolean esValida = (fecha!=null && fechaMin!=null && fechaMax!=null);

		if(esValida)
			esValida = (fecha.after(Auxiliares.sumarAnyosFecha(fechaMin, -1)) && fecha.before(Auxiliares.sumarAnyosFecha(fechaMax, 1)));

		return esValida;
	}

	public static <T extends Comparable<? super T>> boolean validarNoRepeticionLista(List<T> lista) {
		boolean esValida = lista!=null;

		Collections.sort(lista);

		for(int i=0;i<lista.size()-1 && esValida;i++)
			esValida = !(lista.get(i).equals(lista.get(i+1)));

		return esValida;
	}

	public static <T> boolean validarNoRepeticionLista(List<T> lista, Comparator<? super T> c){
		boolean esValida = lista!=null && c!=null;
		Collections.sort(lista, c);

		for(int i=0;i<lista.size()-1 && esValida;i++)
			esValida = !(lista.get(i).equals(lista.get(i+1)));

		return esValida;
	}

	public static <T extends Comparable<? super T>> boolean validarNoRepeticionElementoLista(List<T> lista, T elemento) {
		boolean esValida = lista!=null && elemento!=null;

		if(esValida) {
			Collections.sort(lista);
			esValida = Collections.binarySearch(lista,elemento)<0;
		}

		return esValida;
	}

	public static <T> boolean validarNoRepeticionElementoLista(List<T> lista, T elemento, Comparator<? super T> c) {
		boolean esValida = lista!=null && elemento!=null && c!=null;

		if(esValida) {
			Collections.sort(lista,c);
			esValida = Collections.binarySearch(lista,elemento,c)<0;
		}

		return esValida;
	}

	@SafeVarargs
	public static <T> boolean validarNoRepeticionListas(List<T>... listas) {
		boolean esValida = (listas!=null);

		for(int i=0;i<listas.length && esValida;i++)
			esValida = listas[i]!=null;

		if(esValida && listas.length>1){
			for(int i=0;i<listas.length && esValida;i++){
				for(int j=i+1;j<listas.length && esValida;j++){
					esValida = Collections.disjoint(listas[i], listas[j]);
				}
			}
		}
		return esValida;
	}

	public static boolean validarCalendarsMismoDia(Calendar c1, Calendar c2) {
		boolean esValido = c1!=null && c2!=null;

		if(esValido)
			esValido = c1.get(Calendar.YEAR)==c2.get(Calendar.YEAR);
		if(esValido)
			esValido = c1.get(Calendar.MONTH)==c2.get(Calendar.MONTH);
		if(esValido)
			esValido = c1.get(Calendar.DAY_OF_MONTH)==c2.get(Calendar.DAY_OF_MONTH);

		return esValido;
	}

	public static boolean validarDatesMismoDia(Date d1, Date d2) {
		boolean esValido = d1!=null && d2!=null;

		if(esValido){
			Calendar c1 = Calendar.getInstance();
			Calendar c2 = Calendar.getInstance();
			c1.setTime(d1);
			c2.setTime(d2);
			esValido = validarCalendarsMismoDia(c1,c2);
		}

		return esValido;

	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
```

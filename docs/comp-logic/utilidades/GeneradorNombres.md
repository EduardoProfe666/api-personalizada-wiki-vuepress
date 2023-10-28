---
title: GeneradorNombres
---

![a](/images/banner.png)

# GeneradorNombres

Clase de utilidades que permite la generación de nombres femeninos y masculinos, sus respectivos apellidos, y otras funcionalidades.

::: danger Importante:
La clase presenta un [bug]() a la hora de cargar los ficheros de piscinas de datos. Para evitar esto se deben copiar [los siguientes archivos](#piscinas-de-datos) en el proyecto
de tal forma que se encuentren en la ruta `src/utilidades/nombres/`.
Se deben crear las carpetas necesarias para lograr esto (`utilidades` y `nombres`)
:::

El acceso a estos métodos es de manera estática. Por ejemplo:

```java
String nombre = GeneradorNombres.generarNombre(Sexo.Masculino, Complejidad.SIMPLE);
```

## Índice de contenido

[[toc]]

## Piscinas de Datos

Los listados de nombres y apellidos que sirven de piscina de datos son los siguientes:

- [Listado de nombres masculinos](/api-personalizada-wiki-vuepress/nombres/nombres_masculinos.txt).
- [Listado de nombres femeninos](/api-personalizada-wiki-vuepress/nombres/nombres_femeninos.txt).
- [Listado de apellidos](/api-personalizada-wiki-vuepress/nombres/apellidos.txt).

## Métodos implementados

- [Generar nombre dado Sexo y Complejidad](#generar-nombre-dado-sexo-y-complejidad)
- [Generar todos los nombres dado Sexo](#generar-todos-los-nombres-dado-sexo)
- [Generar una parte de todos los nombres dados cantidad y Sexo](#generar-una-parte-de-todos-los-nombres-dados-cantidad-y-sexo)
- [Generar todos los apellidos](#generar-todos-los-apellidos)
- [Generar una parte de todos los apellidos dado una cantidad](#generar-una-parte-de-todos-los-apellidos-dado-una-cantidad)
- [Generar un apellido dado Complejidad](#generar-un-apellido-dado-complejidad)
- [Generar un nombre completo dado Sexo, Complejidad del nombre y Complejidad del apellido](#generar-un-nombre-completo-dado-sexo-complejidad-del-nombre-y-complejidad-del-apellido)
- [Generar listado de nombres completos dados cantidad, Sexo, Complejidad del nombre y Complejidad del apellido](#generar-listado-de-nombres-completos-dados-cantidad-sexo-complejidad-del-nombre-y-complejidad-del-apellido)
- [Generar Informe txt del listado de nombres completos dados cantidad, Sexo, Complejidad del nombre y Complejidad del apellido](#generar-informe-txt-del-listado-de-nombres-completos-dados-cantidad-sexo-complejidad-del-nombre-y-complejidad-del-apellido)

### Generar nombre dado Sexo y Complejidad

- **Arquetipo:** `generarNombre(Sexo, Complejidad)`
- **Parámetros:** `Sexo` y `Complejidad` del nombre
- **Descripción:** Permite generar de forma aleatoria un nombre dado su `Sexo` y `Complejidad`
- > **Ejemplo de uso:**
  >
  > ```java
  > String nombre = GeneradorNombres.generarNombre(Sexo.FEMENINO,Complejidad.SIMPLE);
  > ```

### Generar todos los nombres dado Sexo

- **Arquetipo:** `generarNombres(Sexo)`
- **Parámetros:** `Sexo`
- **Descripción:** Permite generar todos los nombres posibles del`Sexo` pasado.
- **Particularidades:** La cantidad de nombres generados es en dependencia del `Sexo` seleccionado.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listado = GeneradorNombres.generarNombres(Sexo.ALEATORIO);
  > ```

### Generar una parte de todos los nombres dados cantidad y Sexo

- **Arquetipo:** `generarNombres(int, Sexo)`
- **Parámetros:** Cantidad de nombres y `Sexo`
- **Descripción:** Permite generar una cantidad de nombres del `Sexo` pasado.
- **Particularidades:** La cantidad máxima de nombres generados es en dependencia del `Sexo` seleccionado.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listado = GeneradorNombres.generarNombres(100,Sexo.ALEATORIO);
  > ```

### Generar todos los apellidos

- **Arquetipo:** `generarApellidos()`
- **Descripción:** Permite generar todos los apellidos posibles
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listado = GeneradorNombres.generarApellidos();
  > ```

### Generar una parte de todos los apellidos dado una cantidad

- **Arquetipo:** `generarApellidos(int)`
- **Parámetros:** Cantidad de apellidos
- **Descripción:** Permite generar una cantidad de apellidos
- **Particularidades:** Tiene como máximo la cantidad de apellidos disponibles.
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listado = GeneradorNombres.generarApellidos(383);
  > ```

### Generar un apellido dado Complejidad

- **Arquetipo:** `generarApellido(Complejidad)`
- **Parámetros:** `Complejidad`
- **Descripción:** Permite generar un apellido con determinada `Complejidad`.
- > **Ejemplo de uso:**
  >
  > ```java
  > String apellido = GeneradorNombres.generarApellido(Complejidad.COMPUESTA);
  > ```

### Generar un nombre completo dado Sexo, Complejidad del nombre y Complejidad del apellido

- **Arquetipo:** `generarNombreYApellidos(Sexo, Complejidad, Complejidad)`
- **Parámetros:** `Sexo`, `Complejidad` del nombre y `Complejidad` del apellido.
- **Descripción:** Permite generar un nombre completo con nombre/s y apellido/s con determinado `Sexo`, `Complejidad` del nombre y `Complejidad` del apellido.
- > **Ejemplo de uso:**
  >
  > ```java
  > String nombreCompleto = GeneradorNombres.generarNombreYApellidos(Sexo.MASCULINO,Complejidad.COMPUESTA, Complejidad.COMPUESTA);
  > ```

### Generar listado de nombres completos dados cantidad, Sexo, Complejidad del nombre y Complejidad del apellido

- **Arquetipo:** `generarListadoNombreYApellidos(int, Sexo, Complejidad, Complejidad)`
- **Parámetros:** Cantidad de nombres a generar, `Sexo`, `Complejidad` de los nombres y `Complejidad` de los apellidos.
- **Descripción:** Permite generar una cantidad determinada de nombres con apellidos con determinado `Sexo`, `Complejidad` del nombre y `Complejidad` del apellido
- > **Ejemplo de uso:**
  >
  > ```java
  > List<String> listado = GeneradorNombres.generarListadoNombreYApellidos(1000,Sexo.ALEATORIO,Complejidad.Compuesta, Complejidad.ALEATORIA);
  > ```

### Generar Informe txt del listado de nombres completos dados cantidad, Sexo, Complejidad del nombre y Complejidad del apellido

- **Arquetipo:** `generarInformeListadoNombreYApellidos(int, Sexo, Complejidad, Complejidad)`
- **Parámetros:** Cantidad de nombres a generar, `Sexo`, `Complejidad` de los nombres y `Complejidad` de los apellidos.
- **Descripción:** Permite generar un archivo txt en la carpeta raíz que contiene un listado de nombres y apellidos con determinado `Sexo`, `Complejidad` de los nombres y `Complejidad` de los apellidos.
- **Particularidades:** Este archivo se crea con el nombre `Listado_Nombre_y_Apellidos_Generados.txt`. Al crearse, se imprime por consola la ruta del archivo generado.
- > **Ejemplo de uso:**
  >
  > ```java
  > GeneradorNombres.generarInformeListadoNombreYApellidos(100000,Sexo.MASCULINO,Complejidad.SIMPLE,Complejidad.SIMPLE);
  > ```

## Enums

Los enums son:

- [Sexo](#sexo)
- [Complejidad](#complejidad)

### Sexo

Enum que permite modelar el sexo de los nombres a generar.

Los sexos actualmente soportados son:

- `FEMENINO`: Permite generar nombres de sexo femenino
- `MASCULINO`: Permite generar nombres de sexo masculino
- `ALEATORIO`: Permite generar nombres tanto de sexo femenino como masculino

### Complejidad

Enum que permite modelar la complejidad de los nombres y apellidos a generar.

Las complejidades actualmente soportadas son:

- `SIMPLE`: Permite generar nombres y apellidos simples; es decir, nombres y apellidos con una sola ocurrencia.
  Por ejemplo: - <b>Nombre Simple</b> -> Juan - <b>Apellido Simple</b> -> Rojas - <b>Nombre y Apellido Simples</b> -> Juan Rojas
- `COMPUESTA`: Permite generar nombres y apellidos compuestos; es decir, nombres y apellidos con doble sola ocurrencia.
  Por ejemplo:
  - <b>Nombre Compuesto</b> -> Juan Alejandro
  - <b>Apellido compuesto</b> -> Rojas Rosales
  - <b>Nombre y Apellido compuestos</b> -> Juan Alejandro Rojas Rosales
- `ALEATORIA`: Permite generar nombres y apellidos tanto simples como compuestos; es decir, nombres y apellidos con una o doble ocurrencia.

## Código Fuente

```java
public final class GeneradorNombres {
	private GeneradorNombres(){}

	private static List<String> nombres_femeninos = inicializar_nombres_femeninos();
	private static List<String> nombres_masculinos = inicializar_nombres_masculinos();
	private static List<String> apellidos = inicializar_apellidos();

	public static final int cantNombresFemeninos = 2001;

	public static final int cantNombresMasculinos = 1599;

	public static final int cantNombres = cantNombresFemeninos+cantNombresMasculinos;

	public static final int cantApellidos = 4908;

	private static List<String> inicializar_nombres_femeninos(){
		List<String> nombres = new ArrayList<String>();
		File f = new File("src/utilidades/nombres/nombres_femeninos.txt");
		try(Scanner sc = new Scanner(f)){
			while(sc.hasNext()){
				nombres.add(sc.nextLine());
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return nombres;

	}
	private static List<String> inicializar_nombres_masculinos(){
		List<String> nombres = new ArrayList<String>();
		File f = new File("src/utilidades/nombres/nombres_masculinos.txt");
		try(Scanner sc = new Scanner(f)){
			while(sc.hasNext()){
				nombres.add(sc.nextLine());
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return nombres;

	}
	private static List<String> inicializar_apellidos(){
		List<String> apellidos = new ArrayList<String>();
		File f = new File("src/utilidades/nombres/apellidos.txt");
		try(Scanner sc = new Scanner(f)){
			while(sc.hasNext()){
				apellidos.add(sc.nextLine());
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return apellidos;
	}

	public static List<String> generarNombres(Sexo sexo) {
		List<String> s = new ArrayList<>();
		switch (sexo) {
		case FEMENINO:
			s.addAll(nombres_femeninos);
			break;
		case MASCULINO:
			s.addAll(nombres_masculinos);
			break;
		case ALEATORIO:
			s.addAll(nombres_femeninos);
			s.addAll(nombres_masculinos);
			break;
		default:
			throw new IllegalArgumentException("Parametros erroneos");
		}
		Collections.sort(s);

		return s;
	}

	public static List<String> generarNombres(int cantidad, Sexo sexo){
		List<String> s = generarNombres(sexo);
		Collections.shuffle(s);
		s = s.subList(0, cantidad-1);
		Collections.sort(s);
		return s;
	}

	public static List<String> generarApellidos() {
		return new ArrayList<String>(apellidos);
	}

	public static List<String> generarApellidos(int cantidad) {
		List<String> s = generarApellidos();
		Collections.shuffle(s);
		s = s.subList(0, cantidad-1);
		Collections.sort(s);
		return s;
	}

	public static String generarNombre(Sexo sexo, Complejidad complejidad) {
		List<String> s = new ArrayList<String>();
		String respuesta;
		switch(sexo){
		case FEMENINO:
			s.addAll(nombres_femeninos);
			break;
		case MASCULINO:
			s.addAll(nombres_masculinos);
			break;
		case ALEATORIO:
			s.addAll(nombres_masculinos);
			s.addAll(nombres_femeninos);
			break;
		default:
			throw new RuntimeException("Sexo NULL");
		}
		if(complejidad.equals(Complejidad.ALEATORIA)){
			respuesta = s.get(new Random().nextInt(s.size()));
			if(new Random().nextBoolean()){
				respuesta+=" "+s.get(new Random().nextInt(s.size()));
			}
		}
		else{
			respuesta = s.get(new Random().nextInt(s.size()));
			if(complejidad.equals(Complejidad.COMPUESTA))
				respuesta+=" "+s.get(new Random().nextInt(s.size()));
		}
		return respuesta;
	}

	public static String generarApellido(Complejidad complejidad) {
		String s;
		if(complejidad.equals(Complejidad.ALEATORIA)){
			s = apellidos.get(new Random().nextInt(apellidos.size()));
			if(new Random().nextBoolean())
				s+=" "+apellidos.get(new Random().nextInt(apellidos.size()));
		}
		else{
			s = apellidos.get(new Random().nextInt(apellidos.size()));
			if(complejidad.equals(Complejidad.COMPUESTA))
				s+=" "+apellidos.get(new Random().nextInt(apellidos.size()));
		}
		return s;
	}

	public static String generarNombreYApellidos(Sexo sexo, Complejidad complejidadNombre, Complejidad complejidadApellido){
		return generarNombre(sexo, complejidadNombre)+" "+generarApellido(complejidadApellido);
	}

	public static List<String> generarListadoNombreYApellidos(int cantidad, Sexo sexo,Complejidad complejidadNombre, Complejidad complejidadApellido){
		List<String> s = new ArrayList<String>();
		for(int i=0;i<cantidad;i++){
			s.add(generarNombreYApellidos(sexo, complejidadNombre, complejidadApellido));
		}
		return s;
	}

	public static void generarInformeListadoNombreYApellidos(int cantidad, Sexo sexo,Complejidad complejidadNombre, Complejidad complejidadApellido){
		File f = new File("Listado_Nombre_y_Apellidos_Generados.txt");
		f.delete();
		try {
			f.createNewFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
		try(PrintWriter pw = new PrintWriter(f)){
			for(String s : generarListadoNombreYApellidos(cantidad, sexo, complejidadNombre, complejidadApellido)){
				pw.println(s);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("Ruta del archivo generado: "+System.getProperty("user.dir")+"/Listado_Nombre_y_Apellidos_Generados.txt");

	}

	public static enum Sexo{

		FEMENINO,

		MASCULINO,

		ALEATORIO
	}

	public static enum Complejidad {

		SIMPLE,

		COMPUESTA,

		ALEATORIA
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
```

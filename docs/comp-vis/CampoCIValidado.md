---
title: CampoCIValidado
---

![a](/images/banner.png)

# CampoCIValidado

Clase visual que permite el empleo de un `JFormattedTextField` modificado para
la validación en tiempo real del carnet de identidad. Una vez válido, extrae
información del mismo, dígase edad, fecha de nacimiento y sexo.

Esta clase hereda de `JFormattedTextField`.

**Preview de Componente en la Prueba Visual:**
![a](/gifs/ci.gif)

## Índice de Contenido

[[toc]]

## Uso del CaretListener

Este componente permite validar en tiempo real el ci contenido en él. Para ello se
debe añadir un `CaretListener` de la siguiente forma:

```java
campoCIValidado = new CampoCIValidado();
campoCIValidado.addCaretListener(new CaretListener() {

    @Override
    public void caretUpdate(CaretEvent e) {
        // Aquí va el código que se ejecutará cada
        // vez que se cambia el contenido del
        // texto del componente.
    }

});
```

El componente permite extraer cierta información acerca de la persona que le pertenece
el ci pasado, por lo que dentro del código del `CaretListener` podría extraerse la información
de sexo, edad y fecha de nacimiento si el ci pasado es válido. **[Ver ejemplo](#ejemplo-de-uso)**.

## Constructores

- [Constructor vacío](#constructor-vacío)
- [Constructor con rango de fecha](#constructor-con-rango-de-fecha)

### Constructor vacío

- **Arquetipo:** `CampoCIValidado()`
- **Descripción:** Permite construir el componente visual `CampoCIValidado`.
- **Particularidades:** El componente es creado con [fecha mínima](#fecha-mínima) y [fecha máxima](#fecha-máxima) en `null`.
  Debido a que se usa un `MaskFormatter` internamente el componente lanza un `ParseException` que debe ser
  manejado en un bloque `try/catch` o con `throws`.
- > **Ejemplo de uso:**
  >
  > ```java
  > try{
  >    CampoCIValidado civ = new CampoCIValidado();
  > }catch(ParseException e){
  >    e.printStackTrace();
  > }
  >
  > ```

### Constructor con rango de fecha

- **Arquetipo:** `CampoCIValidado(Date, Date)`
- **Descripción:** Permite construir el componente visual `CampoCIValidado`.
- **Particularidades:** El componente es creado con la [fecha mínima](#fecha-mínima) y [fecha máxima](#fecha-máxima) proporcionada.
  Debido a que se usa un `MaskFormatter` internamente el componente lanza un `ParseException` que debe ser
  manejado en un bloque `try/catch` o con `throws`.
- > **Ejemplo de uso:**
  >
  > ```java
  > Date fechaMin = new Date(2002,4,5);
  > Date fechaMax = new Date();
  > try{
  >    CampoCIValidado civ = new CampoCIValidado();
  > }catch(ParseException e){
  >    e.printStackTrace();
  > }
  > ```

## Atributos de interés

- [Fecha mínima](#fecha-mínima)
- [Fecha máxima](#fecha-máxima)
- [CI válido](#ci-válido)
- [Fecha de nacimiento acorde al CI](#fecha-de-nacimiento-acorde-al-ci)
- [Edad acorde al CI](#edad-acorde-al-ci)
- [Sexo acorde al CI (char)](#sexo-acorde-al-ci-char)
- [Sexo acorde al CI (String)](#sexo-acorde-al-ci-string)

### Fecha mínima

- **Arquetipo:** `Date fechaMin`
- **Descripción:** `Date` que determina la fecha mínima de nacimiento a la que
  puede referirse el ci introducido.
- **Particularidades:** La fecha creada a la hora de validar la fecha de nacimiento del carnet de identidad, se crea
  con 0:00:00:00, por tanto, tome esto en cuenta a la hora de declarar los rangos de fecha.
  Si es `null` no se comprobará el rango inferior.
- **Métodos Relacionados:** [Getter de fecha mínima](#getter-de-fecha-mínima) y [Setter de fecha mínima](#setter-de-fecha-mínima)

### Fecha máxima

- **Arquetipo:** `Date fechaMax`
- **Descripción:** `Date` que determina la fecha máxima de nacimiento a la que
  puede referirse el ci introducido.
- **Particularidades:** La fecha creada a la hora de validar la fecha de nacimiento del carnet de identidad, se crea
  con 0:00:00:00, por tanto, tome esto en cuenta a la hora de declarar los rangos de fecha.
  Si es `null` no se comprobará el rango superior.
- **Métodos Relacionados:** [Getter de fecha máxima](#getter-de-fecha-máxima) y [Setter de fecha máxima](#setter-de-fecha-máxima)

### CI válido

- **Arquetipo:** `boolean ciValido`
- **Descripción:** `boolean` que determina si el carnet de identidad introducido es válido.
- **Particularidades:** Gracias al sistema de validación, solamente es trabajar con dicho valor agregando
  un `CaretListener` a la implementación y determinando el comportamiento a seguir en caso de que
  se encuentre validado o no.
- **Métodos Relacionados:** [Getter de ci válido](#getter-de-ci-válido)

### Fecha de nacimiento acorde al CI

- **Arquetipo:** `Date fechaNacimientoCi`
- **Descripción:** `Date` que determina la fecha de nacimiento que corresponde a la persona del
  carnet de identidad introducido.
- **Particularidades:** Si el [ciValido](#ci-válido) es `false`, su valor se mantendrá en `null`.
  Considerar que en dependencia del rango de fechas introducido (o no), este valor puede arrojar resultados extraños.
- **Métodos Relacionados:** [Getter de fecha de nacimiento acorde al ci](#getter-de-fecha-de-nacimiento-acorde-al-ci)

### Edad acorde al CI

- **Arquetipo:** `Integer edad`
- **Descripción:** `Integer` que determina la edad actual de la persona en dependencia del carnet de identidad
  introducido.
- **Particularidades:** Si el [ciValido](#ci-válido) es `false`, pues se mantendrá el valor en `null`.
  Considerar que en dependencia del rango de fechas introducido (o no), este valor puede arrojar resultados extraños.
- **Métodos Relacionados:** [Getter de edad acorde al ci](#getter-de-edad-acorde-al-ci)

### Sexo acorde al CI (char)

- **Arquetipo:** `Character sexoChar`
- **Descripción:** `Character` que determina el caracter de sexo (**F** o **M**) perteneciente a
  la persona que corresponda el carnet de identidad introducido.
- **Particularidades:** Si el [ciValido](#ci-válido) es `false`, pues se mantendrá el valor en `null`.
  Considerar que en dependencia del rango de fechas introducido (o no), este valor puede arrojar resultados extraños.
- **Métodos Relacionados:** [Getter de sexo acorde al ci (char)](#getter-de-sexo-acorde-al-ci-char)

### Sexo acorde al CI (String)

- **Arquetipo:** `String sexoString`
- **Descripción:** `String` que determina el nombre del sexo (**Femenino** o **Masculino**) perteneciente a
  la persona que corresponda el carnet de identidad introducido.
- **Particularidades:** Si el [ciValido](#ci-válido) es `false`, pues se mantendrá el valor en `null`.
  Considerar que en dependencia del rango de fechas introducido (o no), este valor puede arrojar resultados extraños.
- **Métodos Relacionados:** [Getter de sexo acorde al ci (String)](#getter-de-sexo-acorde-al-ci-string)

## Métodos de interés

- [Getter de fecha mínima](#getter-de-fecha-mínima)
- [Setter de fecha mínima](#setter-de-fecha-mínima)
- [Getter de fecha máxima](#getter-de-fecha-máxima)
- [Setter de fecha máxima](#setter-de-fecha-máxima)
- [Getter de CI válido](#getter-de-ci-válido)
- [Getter de Fecha de nacimiento acorde al CI](#getter-de-fecha-de-nacimiento-acorde-al-ci)
- [Getter de Edad acorde al CI](#getter-de-edad-acorde-al-ci)
- [Getter de Sexo acorde al CI (char)](#getter-de-sexo-acorde-al-ci-char)
- [Getter de Sexo acorde al CI (String)](#getter-de-sexo-acorde-al-ci-string)

### Getter de fecha mínima

- **Arquetipo:** `getFechaMin()`
- **Descripción:** Permite obtener la [fecha mínima](#fecha-mínima).
- **Atributos Relacionados:** [Fecha mínima](#fecha-mínima)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado(new Date(), null);
  > Date fechaMin = civ.getFechaMin();
  > ```

### Setter de fecha mínima

- **Arquetipo:** `setFechaMin(Date)`
- **Parámetros:** `Date` fecha mínima.
- **Descripción:** Permite cambiar la [fecha mínima](#fecha-mínima).
- **Particularidades:** Si la fecha máxima guardada es distinta de `null` y la fecha
  mínima proporcionada también, si la fecha mínima es posterior a la fecha máxima, se lanza un
  `IllegalArgumentException`.
- **Atributos Relacionados:** [Fecha mínima](#fecha-mínima)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > civ.setFechaMin(new Date());
  > ```

### Getter de fecha máxima

- **Arquetipo:** `getFechaMax()`
- **Descripción:** Permite obtener la [fecha máxima](#fecha-máxima).
- **Atributos Relacionados:** [Fecha máxima](#fecha-máxima)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado(null, new Date());
  > Date fechaMax = civ.getFechaMax();
  > ```

### Setter de fecha máxima

- **Arquetipo:** `setFechaMax(Date)`
- **Parámetros:** `Date` fecha máxima.
- **Descripción:** Permite cambiar la [fecha máxima](#fecha-máxima).
- **Particularidades:** Si la fecha máxima guardada es distinta de `null` y la fecha
  mínima proporcionada también, si la fecha mínima es posterior a la fecha máxima, se lanza un
  `IllegalArgumentException`.
- **Atributos Relacionados:** [Fecha máxima](#fecha-máxima)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > civ.setFechaMax(new Date());
  > ```

### Getter de CI válido

- **Arquetipo:** `getCiValido()`
- **Descripción:** Permite obtener [ciValido](#ci-válido).
- **Atributos Relacionados:** [Ci válido](#ci-válido)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > boolean b = civ.getCiValido();
  > ```

### Getter de Fecha de nacimiento acorde al CI

- **Arquetipo:** `getFechaNacimientoCi()`
- **Descripción:** Permite obtener [fechaNacimientoCi](#fecha-de-nacimiento-acorde-al-ci)
- **Atributos Relacionados:** [Fecha de Nacimiento](#fecha-de-nacimiento-acorde-al-ci)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > Date d = civ.getFechaNacimientoCi();
  > ```

### Getter de Edad acorde al CI

- **Arquetipo:** `getEdad()`
- **Descripción:** Permite obtener [edad](#edad-acorde-al-ci)
- **Atributos Relacionados:** [Edad](#edad-acorde-al-ci)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > Integer i = civ.getEdad();
  > ```

### Getter de Sexo acorde al CI (char)

- **Arquetipo:** `getSexoChar()`
- **Descripción:** Permite obtener [sexoChar](#sexo-acorde-al-ci-char)
- **Atributos Relacionados:** [Sexo Char](#sexo-acorde-al-ci-char)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > Character c = civ.getSexoChar();
  > ```

### Getter de Sexo acorde al CI (String)

- **Arquetipo:** `getSexoString()`
- **Descripción:** Permite obtener [sexoString](#sexo-acorde-al-ci-string)
- **Atributos Relacionados:** [Sexo String](#sexo-acorde-al-ci-string)
- > **Ejemplo de uso:**
  >
  > ```java
  > CampoCIValidado civ = new CampoCIValidado();
  > String s = civ.getSexoString();
  > ```

## Ejemplo de Uso

```java
// Permite crear un CampoCIValidado, el cual cuando tenga información correcta extraerá la fecha de nacimiento del mismo.
public class Prueba extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private CampoCIValidado campoCIValidado;
	private JLabel fechaNac;

	public Prueba() throws ParseException {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		campoCIValidado = new CampoCIValidado();
		campoCIValidado.addCaretListener(new CaretListener() {

			@Override
			public void caretUpdate(CaretEvent e) {
				if(campoCIValidado.getCiValido())
					fechaNac.setText("Fecha de Nacimiento: "+new SimpleDateFormat("dd/MM/yyyy").format(campoCIValidado.getFechaNacimientoCi()));
				else
					fechaNac.setText("CI no válido");
			}

		});
		campoCIValidado.setBounds(101, 151, 192, 40);
		contentPane.add(campoCIValidado);

		fechaNac = new JLabel("");
		fechaNac.setBounds(51, 34, 206, 55);
		contentPane.add(fechaNac);

	}
}
```

## Código Fuente

```java
public class CampoCIValidado extends JFormattedTextField{
	private static final long serialVersionUID = 1L;
	private Date fechaMin;
	private Date fechaMax;
	private boolean ciValido;
	private Date fechaNacimientoCi;
	private Integer edad;
	private Character sexoChar;
	private String sexoString;

	public CampoCIValidado(final Date fechaMin, final Date fechaMax) throws ParseException{
		super(new MaskFormatter("###########"));
		ciValido=false;
		determinarDatos();
		setFechaMin(fechaMin);
		setFechaMax(fechaMax);
		setFocusLostBehavior(JFormattedTextField.PERSIST);
		setColumns(11);
		addCaretListener(new CaretListener() {
			public void caretUpdate(CaretEvent e) {
				ciValido=Validaciones.validarCI(getText().trim(), fechaMin, fechaMax);
				determinarDatos();
			}
		});
	}
	public CampoCIValidado() throws ParseException{
		this(null, null);
	}
	public Date getFechaMin() {
		return fechaMin;
	}
	public void setFechaMin(Date fechaMin) {
		if(this.fechaMax!=null && fechaMin!=null && fechaMin.after(this.fechaMax))
			throw new IllegalArgumentException();

		this.fechaMin = fechaMin==null ? fechaMin : (Date)fechaMin.clone();
	}
	public Date getFechaMax() {
		return fechaMax;
	}
	public void setFechaMax(Date fechaMax) {
		if(this.fechaMin!=null && fechaMax!=null && this.fechaMin.after(fechaMax))
			throw new IllegalArgumentException();

		this.fechaMax = fechaMax==null ? fechaMax : (Date)fechaMax.clone();
	}
	public boolean getCiValido(){
		return this.ciValido;
	}
	public Date getFechaNacimientoCi() {
		return fechaNacimientoCi;
	}
	public Integer getEdad() {
		return edad;
	}
	public Character getSexoChar() {
		return sexoChar;
	}
	public String getSexoString() {
		return sexoString;
	}
	private void determinarDatos(){
		String ci = this.getText();
			this.fechaNacimientoCi = this.ciValido ? Auxiliares.convertirFechaNacimientoCiDate(ci) : null ;
			this.edad = this.ciValido ? Auxiliares.determinarEdad(fechaNacimientoCi) : null ;
			this.sexoChar = this.ciValido ? Auxiliares.determinarSexo(ci) : null ;
			this.sexoString = this.ciValido ? Auxiliares.determinarSexoString(ci) : null ;
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.text.ParseException;
import java.util.Date;

import javax.swing.JFormattedTextField;
import javax.swing.event.CaretEvent;
import javax.swing.event.CaretListener;
import javax.swing.text.MaskFormatter;

import utilidades.Auxiliares;
import utilidades.Validaciones;
```

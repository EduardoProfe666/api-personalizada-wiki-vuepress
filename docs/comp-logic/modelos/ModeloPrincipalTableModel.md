---
title: ModeloPrincipalTableModel
---

![a](/images/banner.png)

# ModeloPrincipalTableModel

Clase modelo de tabla abstracta que facilita el trabajo con `JTable`.

Para su uso solo es necesario adicionarle el comportamiento de como se generan nuevas filas con los elementos atómicos
de la lista (los elementos que se van a mostrar en el `JTable`); definir el número de columnas y sus respectivos nombres en el constructor de la
clase hija; además se parametriza el modelo con el objeto atómico de las listas.

## Índice de contenido

[[toc]]

## Métodos implementados

**Listado de métodos**:

- [Eliminar Filas](#eliminar-filas)
- [Actualizar dado List y Comparator](#actualizar-dado-list-y-comparator)
- [Actualizar dado List](#actualizar-dado-list)
- [Celda Editable](#celda-editable)

### Eliminar Filas

- **Arquetipo:** `eliminarFilas()`
- **Descripción:** Permite eliminar enteramente el contenido de la tabla.
- > **Ejemplo de uso:**
  >
  > ```java
  > TablaModelo modelo = new TablaModelo(); //Clase que hereda de ModeloPrincipalTableModel
  > modelo.eliminarFilas(); //Elimina el contenido de la tabla
  > ```

### Actualizar dado List y Comparator

- **Arquetipo:** `actualizar(List, Comparator)`
- **Parámetros:** `List` de elementos, `Comparator` de dichos elementos.
- **Descripción:** Permite actualizar la tabla con la lista pasada, y ordenarla usando el Comparator pasado.
- **Particularidades:** El método primero
  ordena la lista, luego borra el contenido de la tabla, y adiciona los elementos de la lista a la tabla.
- > **Ejemplo de uso:**
  >
  > ```java
  > TablaModelo modelo = new TablaModelo(); //Clase que hereda de ModeloPrincipalTableModel y está parametrizada con Integer
  > List<Integer> lista = new ArrayList<>(Arrays.asList(4,2,1,7,3,9,0)); //Lista a mostrar en la tabla
  > Comparator<Integer> cmp = Collections.reverseOrder(lista); //Crea un comparator que permite ordenar la lista de mayor a menor
  > modelo.actualizar(lista,cmp); //Actualiza la tabla
  > ```

### Actualizar dado List

- **Arquetipo:** `actualizar(List)`
- **Parámetros:** `List` de elementos.
- **Descripción:** Permite actualizar la tabla con la lista pasada (sin ordenarla).
- **Particularidades:** El método primero borra el contenido de la tabla, y adiciona los elementos
  de la lista a la tabla.
- > **Ejemplo de uso:**
  >
  > ```java
  > TablaModelo modelo = new TablaModelo(); //Clase que hereda de ModeloPrincipalTableModel y está parametrizada con Integer
  > List<Integer> lista = new ArrayList<>(Arrays.asList(4,2,1,7,3,9,0)); //Lista a mostrar en la tabla
  > modelo.actualizar(lista); //Actualiza la tabla
  > ```

### Celda Editable

- **Arquetipo:** `isCellEditable(int,int)`
- **Parámetros:** Fila y columna.
- **Descripción:** Se sobreescribió este método para que las celdas de la tabla no sean modificables. Si desea
  otro comportamiento sobreescribir este método.

## Métodos a implementar

**Listado de métodos**:

- [Adicionar elementos atómicos](#adicionar-elementos-atómicos)

### Adicionar elementos atómicos

- **Arquetipo:** `adicionar(T)`
- **Parámetros:** `T` elemento a agregar.
- **Descripción:** Permite implementar el comportamiento de cómo se adicionan los elementos atómicos de la lista a la tabla.
- **Particularidades:** Se recomienda implementar en este método la manera en que se agregan los elementos atómicos de la lista vinculada con la tabla.
  Use el método `addRow(Object[])` para lograr esto.
- > **Ejemplo de uso:**
  >
  > ```java
  >  //Clase que hereda de ModeloPrincipalTableModel que muestra una lista de números dada en una tabla de una columna
  >  public class ListadoTableModel extends ModeloPrincipalTableModel<Integer>{
  >      private static final long serialVersionUID = 1L;
  >      public ListadoTableModel(){
  >          String[] nombreColumnas = {"Num"};
  >          this.setColumnIdentifiers(nombreColumnas);
  >      }
  >      @Override
  >      public void adicionar(Integer t) {
  >          this.addRow(new Object[] {t});
  >      }
  >  }
  > ```

## Ejemplo de Uso

Para poder usar el modelo se deben seguir los siguientes pasos:

- Crear una clase que herede de `ModeloPrincipalTableModel`
- Parametrizar `ModeloPrincipalTableModel` con los elementos atómicos de la lista que se va a mostrar en la tabla
- Definir en el constructor de la nueva clase la cantidad y los nombres de las columnas de la tabla
- Implementar el método `adicionar(T)` el cual va a estar sustituida `T` por la clase con que se parametrizó `ModeloPrincipalTableModel`
- La implementación de `adicionar(T)` se basa en definir el comportamiento de cómo se agregan los elementos atómicos de las listas a la tabla, es decir, cómo se agregan las filas.

Un ejemplo de uso concreto:

**`Clase Persona:`**

```java
//Clase atómica de la lista a mostrar en la tabla
public class Persona {
	private String nombre;
	private String primerApellido;
	private String segundoApellido;
	private String ci;
	private Integer id;

	//Generate Getters, Setters and Constructor
}
```

**`Clase ListadoTableModel:`**

```java
//Clase que hereda de ModeloPrincipalTableModel y permite mostrar adecuadamente los datos de la lista de Persona en la tabla
public class ListadoTableModel extends ModeloPrincipalTableModel<Persona>{
	private static final long serialVersionUID = 1L;

	public ListadoTableModel(){
		String[] nombreColumnas = {"Identificador","Nombre", "Primer Apellido", "Segundo Apellido", "CI"};
		this.setColumnIdentifiers(nombreColumnas);
	}
	@Override
	public void adicionar(Persona t) {
		Integer id = t.getId();
		String nombre = t.getNombre();
		String pApellido = t.getPrimerApellido();
		String sApellido = t.getSegundoApellido();
		String ci = t.getCi();

		this.addRow(new Object[] {id,nombre,pApellido,sApellido,ci});
	}
}
```

**`Clase PruebaModeloTabla:`**

```java
//Clase que permite probar la tabla
public class PruebaModeloTabla extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTable tablaPersonas;
	private ListadoTableModel modelo;
	private ArrayList<Persona> lista;

	public PruebaModeloTabla() {
		lista = Inicializadora.inicializarListadoPersonas();
		setBounds(100, 100, 920, 500);
		setResizable(false);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);

		JScrollPane panelListado = new JScrollPane();
		panelListado.setBounds(15, 101, 884, 343);
		contentPane.add(panelListado);

		modelo = new ListadoTableModel();
		tablaPersonas = new JTable();
		tablaPersonas.setModel(modelo);
		panelListado.setViewportView(tablaPersonas);

		actualizarTabla();
		setLocationRelativeTo(null);
	}

	public void actualizarTabla(){
		modelo.actualizar(lista);
	}
}
```

## Código Fuente

```java
public abstract class ModeloPrincipalTableModel<T> extends DefaultTableModel{
	private static final long serialVersionUID = 1L;

	public void eliminarFilas() {
		this.setRowCount(0);
	}

	public abstract void adicionar(T t);

	public void actualizar(List<T> listado, Comparator<? super T> comparador) {
		try{
			Collections.sort(listado,comparador);
		}catch(Exception e){}
		actualizar(listado);
	}

	public void actualizar(List<T> listado){
		if(listado!=null) {
			this.eliminarFilas();
			for(T t : listado)
				adicionar(t);
		}
	}

	@Override
	public boolean isCellEditable(int row, int column) { //
		return false;
	}
}
```

## Clases utilizadas (Importaciones)

```java
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import javax.swing.table.DefaultTableModel;
```

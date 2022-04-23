# Informe - Práctica 9: Aplicación de procesamiento de notas de texto

En esta práctica, se ha implementado una aplicación de procesamiento de notas de texto.

## Estructura del proyecto

```bash
```

## La clase Nota

Esta clase es la encargada de representar una nota de la aplicación de procesamiento y estará formada, como mínimo, por un título, un cuerpo y un color.

El título es una especie de nombre que serviría para identificar y diferenciar una nota del resto, por ello se representa como un atributo privado string. El cuerpo de la nota desarrolla, a partir de lo anticipado en el título, el resto de datos informativos y, al igual que el título, es un atributo privado string. El color es la impresión producida por un tono de luz en los órganos visuales, en este caso, se ha optado por definir un tipo de dato Color, que contiene las cadenas (strings) con los colores permitidos:

```typescript
export type Color = 'rojo' | 'verde' | 'azul' | 'amarillo';
```

El constructor de la clase recibe los atributos de la clase se han declarado como readonly, es decir, su valor es solo de lectura, pues no cambiarán nunca durante la ejecución. A raíz de esto, solo se necesitan métodos getter en la clase nota para cada uno de los atributos:

```typescript
public getTitulo(): string {
  return this.titulo;
}

public getColor(): Color {
  return this.color;
}

public getCuerpo(): string {
  return this.cuerpo;
}
```

Además, se ha definido un método `write()` que convierte un objeto de la clase en formato JSON, ya que es un requisito guardar las notas en este formato. Este método invoca a la función `stringify()` que convierte un objeto en una cadena de texto JSON.

```typescript
public write(): string {
  return JSON.stringify(this, null, 2);
}
```

## La clase AppNotas

Esta clase se encarga de definir el comportamiento de la aplicación de las notas de texto. Para ello, define los métodos requeridos utilizando el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros.

### Añadir una nota al sistema

Para añadir una nota, se debe comprobar si ya existe el directorio donde se guardan las notas de cada usuario. Para ello, utilizamos la función `existsSync()` que se encarga de comprobar de forma síncrona si un archivo ya existe en la ruta dada o no.

- En caso de que no exista creamos la ruta. En esta práctica se ha definido una ruta que inicia en el directorio /data.
- En otro caso, creamos un objeto Nota con los parámetros recibidos. Luego, se debe comprobar si ya existe una nota con el mismo título.
  - En caso de que así fuera, deberá mostrarse un mensaje de error por la consola.
  - En caso contrario, se añadirá la nueva nota a la lista, utilizando la función `writeFileSync()` y se muestra un mensaje informativo por la consola.

```typescript
public addNota(usuario: string, titulo: string, cuerpo: string, color: Color): string {
  if (!fs.existsSync(`data/${usuario}`)) {
    fs.mkdirSync(`data/${usuario}`, { recursive: true});
  }
  const nota = new Nota(titulo, cuerpo, color);
  if (!fs.existsSync(`data/${usuario}/${titulo}.json`)) {
    fs.writeFileSync(`data/${usuario}/${titulo}.json`, nota.write());
    console.log(chalk.green('Nueva nota añadida'));
    return chalk.green('Nueva nota añadida');
  } else {
    console.log(chalk.red('Ya existe una nota con ese título'));
    return chalk.red('Ya existe una nota con ese título');
  }
}
```

## Menú de linea de comandos

En el fichero **index.ts** se definen los comandos

## El paquete Chalk

El módulo Chalk en Node.js es el módulo de terceros que se utiliza para diseñar el formato de texto y nos permite crear nuestros propios temas en el proyecto Node.js. En esta práctica, se ha implementado en cada una de los mensajes de informativo. El código de colores es el siguiente:

- Verde: mensajes informativos / color de la nota.
- Rojo: mensajes de error / color de la nota:
- Amarillo: color de la nota.
- Azul: color de la nota.

## Documentación

Para generar la documentación utilizaremos la API TypeDoc, este framework convierte los comentarios del código fuente de TypeScript en documentación HTML procesada o en un modelo JSON. Es extensible y admite una variedad de configuraciones. Disponible como módulo CLI o de Node.js. Para instalarlo, ejecutamos `npm install --save-dev typedoc`. Y añadir al fichero [package.json](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101327372/blob/main/package.json) la siguiente línea de código:

```json
"scripts": {
  "doc": "typedoc"
},
```

Ahora para generar la documentación sólo tenemos que ejecutar `npm run doc`. Y se guardará en el directorio [docs](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101327372/tree/master/docs).

## GitHub Actions

GitHub Actions es una plataforma de integración y despliegue continuos (IC/DC) que te permite automatizar tu mapa de compilación, pruebas y despliegue. En esta práctica se han definido 3 acciones, alojadas en el directorio [.github/workflows](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101327372/tree/main/.github/workflows):

- Actions de Coveralls, que es un servicio web que permite a los usuarios realizar un seguimiento de la cobertura de código de su aplicación a lo largo del tiempo para optimizar la eficacia de sus pruebas unitarias.
- Actions de Test: GitHub ejecuta las pruebas y proporciona los resultados de cada prueba en la solicitud de extracción, para que pueda ver si el cambio en su rama introduce un error.
- Actions de SonarCloud: que ayuda a evaluar el estado del código y crear aplicaciones con un código limpio y seguro. Además detecta errores y vulnerabilidades y obtiene comentarios instantáneos. Se integra con su plataforma DevOps.

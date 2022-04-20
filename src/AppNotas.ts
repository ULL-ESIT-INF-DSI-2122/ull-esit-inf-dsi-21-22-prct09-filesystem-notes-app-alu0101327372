import * as fs from 'fs';
import chalk from 'chalk';
import { Nota } from './Nota';
import { Color } from './Color';

/**
 * @class Aplicación de procesamiento de notas de texto.
 */
export class AppNotas {
  /**
   * Inicializa la app.
   */
  constructor() {}

  /**
   * Añade una nota a la lista.
   * @param usuario Usuario que añade la nota
   * @param titulo Titulo de la nota
   * @param cuerpo Cuerpo de la nota
   * @param color Color del texto de la nota
   */
  public addNota(usuario: string, titulo: string, cuerpo: string, color: Color): string {
    if (!fs.existsSync(`data/${usuario}`)) {
      fs.mkdirSync(`data/${usuario}`, { recursive: true});
    }
    const nota = new Nota(titulo, cuerpo, color);
    if (!fs.existsSync(`data/${usuario}/${titulo}.json`)) {
      fs.writeFileSync(`data/${usuario}/${titulo}.json`, nota.write());
      return chalk.green('Nueva nota añadida');
    } else {
      return chalk.red('Ya existe una nota con ese título');
    }
  }

  /**
   * Modifica una nota a la lista.
   * @param usuario Usuario que modifica la nota
   * @param titulo Titulo de la nota
   * @param cuerpo Cuerpo de la nota
   * @param color Color del texto de la nota
   */
   public modifyNota(usuario: string, titulo: string, cuerpo: string, color: Color): string {
    if (fs.existsSync(`data/${usuario}/${titulo}.json`)) {
      const nota = new Nota(titulo, cuerpo, color);
      fs.writeFileSync(`data/${usuario}/${titulo}.json`, nota.write());
      return chalk.green('Nota modificada correctamente');
    } else {
      return chalk.red('No existe una nota con ese título');
    }
   }

  /**
   * Elimina una nota de la lista.
   * @param usuario Usuario que elimina la nota
   * @param titulo Titulo de la nota
   */
   public removeNota(usuario: string, titulo: string): string {
    if (fs.existsSync(`data/${usuario}/${titulo}.json`)) {
      fs.rmSync(`data/${usuario}/${titulo}.json`);
      return chalk.green('Nota eliminada correctamente');
    } else {
      return chalk.red('No existe una nota con ese título');
    }
   }

  /**
   * Lista los títulos de las notas de la lista.
   * @param usuario Usuario del que se listan los titulos de las notas
   */
   public listNotas(usuario: string): string {
    if (fs.readdirSync(`data/${usuario}`).length === 0) {
      return chalk.red('No tienes ninguna nota en tu lista');
    } else {
      const allTitulo: string[] = fs.readdirSync(`data/${usuario}`);
      console.log(allTitulo);
      const result: string[] = [];
      allTitulo.forEach(titulo => {
        console.log(titulo)
        let data = fs.readFileSync(`data/${usuario}/${titulo}`);
        let notaObject = JSON.parse(data.toString());
        let nota: Nota = new Nota(notaObject.titulo, notaObject.cuerpo, notaObject.color);
        if (nota.getColor() == 'azul') {
          result.push(chalk.blue(nota.getTitulo()));
        } else if (nota.getColor() == 'rojo') {
          result.push(chalk.red(nota.getTitulo()));
        } else if (nota.getColor() == 'verde') {
          result.push(chalk.green(nota.getTitulo()));
        } else {
          result.push(chalk.yellow(nota.getTitulo()));
        }
      });
      return result.join('\n');
    }
   }

  /**
   * Leer una nota concreta de la lista.
   * @param usuario Usuario que elimina la nota
   * @param titulo Titulo de la nota
   */
   public readNota(usuario: string, titulo: string): void {
   }
}

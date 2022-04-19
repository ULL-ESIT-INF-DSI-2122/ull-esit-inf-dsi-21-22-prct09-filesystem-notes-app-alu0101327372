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
  public addNota(usuario: string, titulo: string, cuerpo: string, color: Color): void {
    if (!fs.existsSync(`data/users/${usuario}`)) {
      fs.mkdirSync(`data/users/${usuario}`, { recursive: true});
    }
    const nota = new Nota(titulo, cuerpo, color);
    if (!fs.existsSync(`data/users/${usuario}/${titulo}.json`)) {
      fs.writeFileSync(`data/users/${usuario}/${titulo}.json`, nota.write());
      console.log(chalk.green('Nueva nota añadida'));
    } else {
      console.log(chalk.red('Ya existe una nota con ese título'));
    }
  }

  /**
   * Modifica una nota a la lista.
   * @param usuario Usuario que modifica la nota
   * @param titulo Titulo de la nota
   * @param cuerpo Cuerpo de la nota
   * @param color Color del texto de la nota
   */
   public modifyNota(usuario: string, titulo: string, cuerpo: string, color: string): void {
   }

  /**
   * Elimina una nota de la lista.
   * @param usuario Usuario que elimina la nota
   * @param titulo Titulo de la nota
   */
   public removeNota(usuario: string, titulo: string): void {
    if (fs.existsSync(`data/users/${usuario}/${titulo}.json`)) {
      fs.rmSync(`data/users/${usuario}/${titulo}.json`);
      console.log(chalk.green('Nota eliminada correctamente'));
    } else {
      console.log(chalk.red('No existe una nota con ese título'));
    }
   }

  /**
   * Lista los títulos de las notas de la lista.
   * @param usuario Usuario del que se listan los titulos de las notas
   */
   public listNota(usuario: string): void {
  }

  /**
   * Leer una nota concreta de la lista.
   * @param usuario Usuario que elimina la nota
   * @param titulo Titulo de la nota
   */
   public readNota(usuario: string, titulo: string): void {
  }
}
/**
 * @class Representa una nota.
 */
export class Nota {
  /**
   * Inicializa una nota.
   * @param {string} titulo Titulo de la nota
   * @param {string} color Color del texto
   * @param {string} cuerpo Cuerpo de la nota
   */
  constructor(
    private titulo: string,
    private cuerpo: string,
    private color: string,
  ) {
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    this.color = color;
  }

  /**
   * Devuelve el título de la nota.
   * @returns {string}
   */
  public getTitulo(): string {
    return this.titulo;
  }

  /**
   * Devuelve el color del texto.
   * @returns {string}
   */
   public getColor(): string {
    return this.color;
  }

  /**
   * Devuelve el cuerpo de la nota.
   * @returns {string}
   */
   public getCuerpo(): string {
    return this.cuerpo;
  }

  /**
   * Escribe una nota en formato JSON.
   * @returns {string}
   */
  public write(): string {
    return `{\n\"titulo\": \"' + ${this.titulo} + '\",\n\"cuerpo\": \"'+ ${this.cuerpo} +
    '\",\n\"color\": \"' + ${this.color} + '\"\n}`;
  }
}
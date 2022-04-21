import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with addition.
 */
export class AddMapReduce extends MapReduceTemplate {
  /**
   * Constructor
   * @param arr Array to reduce
   */
  constructor(protected arr: number[]) {
    super(arr);
  }
  /**
   * Algorithm reduce
   */
  public reduce(): number {
    let result = 0;
    this.arr.forEach((element) => {
      result += element;
    });
    return result;
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    const msg = 'Starting AddMapReduce ...';
    return msg;
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    const msg = `AddMapReduce finished. Result: ${this.reduce()}`;
    return msg;
  }
}

import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with product.
 */
export class ProdMapReduce extends MapReduceTemplate {
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
    let result: number = 1;
    this.arr.forEach((element) => {
      result *= element;
    });
    return result;
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    const msg: string = 'Starting ProdMapReduce ...';
    // console.log(msg);
    return msg;
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    const msg: string = `ProdMapReduce finished. Result: ${this.reduce()}`;
    // console.log(msg);
    return msg;
  }
}
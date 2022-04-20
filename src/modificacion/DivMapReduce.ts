import { MapReduceTemplate } from './MapReduceTemplate';

/**
 * Class to an array reduce with divition.
 */
export class DivMapReduce extends MapReduceTemplate {
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
    let result: number = Math.pow(this.arr[0], 2);
    this.arr.forEach((element) => {
      result /= element;
    });
    return Math.trunc(result);
  }
  /**
   * Hook
   * @returns Returns starting message.
   */
  public beforeReduce(): string {
    const msg: string = 'Starting DivMapReduce ...';
    console.log(msg);
    return msg;
  }
  /**
   * Hook
   * @returns Returns finishing message.
   */
  public afterReduce(): string {
    const msg: string = `DivMapReduce finished. Result: ${this.reduce()}`;
    console.log(msg);
    return msg;
  }
}
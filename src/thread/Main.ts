import { EventEmitter } from "events";

export default class Main extends EventEmitter {
  public obj: { id: number, result: number[] }[] = [];
  private counter: number = 0;

  constructor(private finish = 4) {
    super();

    this.on('result', (threadId: number, result: number[]) => {
      this.obj.push({ id: threadId, result: result });
    });
    this.on('result', () => {
      if(++this.counter == this.finish) {
        console.log(this.obj.map((value) => value.result.length));
      }
    });
  }
}

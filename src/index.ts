import EventEmitter from 'eventemitter3';
import { END_EVENT, IClone, IReporter } from 'jscpd';

export default class JscpdBootstrapReporter implements IReporter {
  public attach(eventEmitter: EventEmitter): void {
    eventEmitter.on(END_EVENT, () => console.log('Detection finished!'));
  }

  public report(clones: IClone[]): void {
    console.log(clones);
  }
}

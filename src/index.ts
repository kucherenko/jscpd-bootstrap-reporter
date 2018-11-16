import EventEmitter from 'eventemitter3';
import {
  CLONE_FOUND_EVENT,
  END_EVENT,
  IClone,
  IOptions,
  IReporter,
  IStatistic,
  MATCH_SOURCE_EVENT,
  SOURCE_SKIPPED_EVENT
} from 'jscpd';

export default class implements IReporter {

  constructor(private options: IOptions) {
    console.log(this.options);
  }

  public attach(eventEmitter: EventEmitter): void {
    eventEmitter.on(MATCH_SOURCE_EVENT, () => console.log('Source detection started!'));
    eventEmitter.on(CLONE_FOUND_EVENT, () => console.log('New clone found!'));
    eventEmitter.on(SOURCE_SKIPPED_EVENT, () => console.log('Source skipped!'));
    eventEmitter.on(END_EVENT, () => console.log('Detection finished!'));
  }

  public report(clones: IClone[], statistic: IStatistic): void {
    console.log(clones);
    console.log(statistic);
  }
}

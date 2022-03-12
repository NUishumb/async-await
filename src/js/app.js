import read from './reader';
import json from './parser';

export default class GameSavingsLoader {
  static async load() {
    try {
      this.value = await json(await read());
      return this.value;
    } catch (err) {
      return err;
    }
  }
}

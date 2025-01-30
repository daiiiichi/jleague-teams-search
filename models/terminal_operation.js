import pkg from "enquirer";

export class Terminal {
  async select(name, message, choices) {
    const { Select } = pkg;
    const userSelect = new Select({
      name: name,
      message: message,
      choices: choices,
    }).run();
    return userSelect;
  }

  async input(name, message) {
    const { Input } = pkg;
    const userInput = new Input({
      name: name,
      message: message,
    }).run();
    return userInput;
  }
}

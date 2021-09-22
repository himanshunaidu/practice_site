let counter = 0;

class ConnectMessage {
  constructor(title, name, mobile, message) {
    counter += 1;
    this.id = counter;
    this.title = title;
    this.name = name;
    this.mobile = mobile;
    this.message = message;
  }

  inspect() {
    //Overrides the console.log functionality (maybe)
    return this.title + this.name + this.mobile + this.message;
  }
}

export default ConnectMessage;

class ConnectMessage {
  constructor(title, name, mobile, message) {
    this.title = title;
    this.name = name;
    this.mobile = mobile;
    this.message = message;
  }

  inspect() {
    //Overrides the console.log functionality
    return this.title + this.name + this.mobile + this.message;
  }
}

export default ConnectMessage;

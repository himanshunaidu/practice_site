const fs = require("fs");
const path = require("path");

const pathUtil = require("../util/path");

const otherContacts = [];

class Contact {
  constructor(name, mobile, dob, email) {
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.email = email;
  }

  save() {
    const p = path.join(pathUtil.mainPath, "data", "contacts.json");
    //We use readFile then writeFile instead of appendFile, because we need to store an array
    console.log("Adding");
    fs.readFile(p, (err, data) => {
      let contacts = [];
      if (!err) {
        contacts = JSON.parse(data);
      }
      contacts.push(this);
      console.log("Error 1?");
      fs.writeFile(p, JSON.stringify(contacts), (err) => {
        console.log(err);
      });
      console.log("Error 3?");
    });
  }

  static fetchAll() {
    return otherContacts;
  }
}

module.exports = Contact;

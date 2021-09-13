const fs = require("fs");
const path = require("path");

const pathUtil = require("../util/path");
const contactPath = path.join(pathUtil.mainPath, "data", "contacts.json");

const otherContacts = [];

class Contact {
  constructor(name, mobile, dob, email) {
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.email = email;
  }

  save() {
    //We use readFile then writeFile instead of appendFile, because we need to store an array
    fs.readFile(contactPath, (err, data) => {
      let contacts = [];
      if (!err) {
        contacts = JSON.parse(data);
      }
      contacts.push(this);
      fs.writeFile(contactPath, JSON.stringify(contacts), (err) => {
        if (err) {
          console.log("Error", err);
        }
      });
    });
  }

  static async fetchAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(contactPath, (err, data) => {
        if (err) {
          data = [];
        }
        resolve(JSON.parse(data));
      });
    });
  }
}

module.exports = Contact;

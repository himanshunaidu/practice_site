const fs = require("fs");
const path = require("path");

const pathUtil = require("../util/path");

//Helper Function
const contactPath = path.join(pathUtil.mainPath, "data", "contacts.json");
const readPromiseHelper = (callback) => {
  fs.readFile(contactPath, (err, contacts) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(contacts));
    }
  });
};

class Contact {
  constructor(name, mobile, dob, email) {
    this.name = name;
    this.mobile = mobile;
    this.dob = dob;
    this.email = email;
  }

  save() {
    //We use readFile then writeFile instead of appendFile, because we need to store an array
    return new Promise((resolve, reject) => {
      readPromiseHelper((contacts) => {
        contacts.push(this);
        fs.writeFile(contactPath, JSON.stringify(contacts), (err) => {
          if (err) {
            console.log("Error", err);
          }
          resolve(contacts);
        });
      });
    });
  }

  static async fetchAllPromise() {
    return new Promise((resolve, reject) => {
      readPromiseHelper((contacts) => {
        resolve(contacts);
      });
    });
  }
}

module.exports = Contact;

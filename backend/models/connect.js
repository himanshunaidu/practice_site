const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

const pathUtil = require("../util/path");

//Helper Function
const connectPath = path.join(pathUtil.mainPath, "data", "connects.json");
const readPromiseHelper = (callback) => {
  fs.readFile(connectPath, (err, connects) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(connects));
    }
  });
};

class Connect {
  constructor(title, name, mobile, message) {
    this.id = uuid.v4();
    this.title = title;
    this.name = name;
    this.mobile = mobile;
    this.message = message;
    this.date = Date.now();
  }

  save() {
    //We use readFile then writeFile instead of appendFile, because we need to store an array
    return new Promise((resolve, reject) => {
      readPromiseHelper((connects) => {
        connects.push(this);
        fs.writeFile(connectPath, JSON.stringify(connects), (err) => {
          if (err) {
            console.log("Error", err);
            reject("Error");
          }
          resolve(connects.length);
        });
      });
    });
  }

  static async fetchAllPromise() {
    return new Promise((resolve, reject) => {
      readPromiseHelper((connects) => {
        resolve(connects);
      });
    });
  }

  static async fetchByIdPromise(id) {
    return new Promise((resolve, reject) => {
      readPromiseHelper((connects) => {
        const connect = connects.find((c) => c.id === id);
        if (connect) {
          resolve(connect);
        }
        reject("Connect Message not found");
      });
    });
  }
}

module.exports = Connect;

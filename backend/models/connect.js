const uuid = require("uuid");

const dbUtil = require("../util/database");

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
    return dbUtil.execute(`insert into connect(id, title, name, mobile, date, message) 
    values('${this.id}', '${this.title}', '${this.name}', '${this.mobile}', from_unixtime(${this.date}), '${this.message}')`);
  }

  static async fetchAllPromise() {
    return dbUtil
      .execute(`Select * from connect;`)
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        return Promise.reject("Error retrieving messages");
      });
  }

  static async fetchByIdPromise(id) {
    return dbUtil
      .execute(`Select * from connect where id='${id}'`)
      .then((result) => {
        return result[0];
      })
      .catch((err) => {
        return Promise.reject("Error retrieving message");
      });
  }
}

module.exports = Connect;

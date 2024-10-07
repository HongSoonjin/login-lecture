"use strict";

// 은닉화 : 변수명 앞에 # 붙임
class UserStorage {
  static #users = {
    id: ["test1", "test2", "테스트3"],
    password: ["1111", "2222", "3333"],
    name: ["테스트1", "테스트2", "테스트3"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;

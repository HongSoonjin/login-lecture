"use strict";

const users = {
  id: ["test1", "test2", "테스트3"],
  password: ["1111", "2222", "3333"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      password = req.body.password;
    console.log(id, password);

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] == password) {
        return res.json({
          success: true,
        });
      }

      return res.json({
        success: false,
        msg: "로그인에 실패 했습니다.",
      });
    }
  },
};

module.exports = {
  output,
  process,
};

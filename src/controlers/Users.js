const db = require("../db/dbQuery");

viewUsers = async (req, res) => {
  try {
    let data = await db.getUsers();
    await res.render("../src/views/usersList.pug", { users: data });
  } catch (e) {
    console.log(e);
  }
};

addUser = async (req, res) => {
  try {
    await db.addUser(req.body);
    await res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
};

deleteUser = async (req, res) => {
  try {
    await db.delUser(req.body);
    await res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
};

updateUser = async (req, res) => {
  try {
    await db.updUser(req.body);
    await res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  viewUsers,
  addUser,
  deleteUser,
  updateUser,
};

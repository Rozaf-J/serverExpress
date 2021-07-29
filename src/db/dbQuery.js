const schemas = require("./mgSchemas/userSchema");

getUsers = () => {
  return schemas.Users.find({}, (err, data) => {
    return data;
  });
};

addUser = async (data) => {
  try {
    const newUser = await new schemas.Users(data);
    await newUser.save();
  } catch (e) {
    console.log(e);
  }
};

delUser = async (data) => {
  try {
    await schemas.Users.deleteOne(data);
  } catch (e) {
    console.log(e);
  }
};

updUser = async (data) => {
  try {
    await schemas.Users.updateOne(
      { name: data[2], age: data[3] },
      { name: data[0], age: data[1] }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getUsers,
  addUser,
  delUser,
  updUser,
};

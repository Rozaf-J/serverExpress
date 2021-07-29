const schemas = require("./mgSchemas/userSchema");

getUsers = () => {
  return schemas.Users.find({}, (err, users) => {
    return users;
  });
};

addUser = async (user) => {
  try {
    const newUser = await new schemas.Users(user);
    await newUser.save();
  } catch (e) {
    console.log(e);
  }
};

delUser = async (userId) => {
  try {
    await schemas.Users.deleteOne(userId);
  } catch (e) {
    console.log(e);
  }
};

updUser = async (updatedUser) => {
  try {
    await schemas.Users.updateOne(
      { _id: updatedUser._id },
      { name: updatedUser.name, age: updatedUser.age }
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

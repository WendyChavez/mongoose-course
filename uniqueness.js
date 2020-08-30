require("./connection");

const User = require("./models/User");

async function createUsers() {
  const usuario = new User({
    username: "Wendy",
    password: "12345"
  });
  await usuario.save();

  const usuario1 = new User({
    username: "Wendy",
    password: "23456"
  });
  await usuario1.save();

}

createUsers();

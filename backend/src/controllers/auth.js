const jwt = require("jsonwebtoken");

async function post(req, res, next) {
  console.log(req.body);
//   const userFound = await User.findOne({ email: req.body.email });
//   if (!userFound) throw new NotFound("User not found");

//   const validPassword = await userFound.comparePassword(req.body.password);
//   if (!validPassword) throw new NotFound("Invalid password");

  const token = jwt.sign(
    {
      _id: "hola",
    },
    "JWT-SECRET",
    {
      expiresIn: 60 * 60 * 24, // 24 hours
    }
  );

  return res.json({
    token:token
  });
}

module.exports = {
  post,
};

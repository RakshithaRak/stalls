const auth = require("../services/auth");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.send({ status: "failed", message: "Unauthorized" });

  try {
    await auth.verifyIdToken(authorization);
    return next();
  } catch (error) {
    console.error(error);
    return res.send({ status: "failed", message: "Unauthorized" });
  }
};

const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const checkAuth = require("../middleware/checkAuth");

const userValidator = require("../middleware/schemaValidators/userValidator");

router.post("/signup", userValidator.addUser, userController.addUser);

router.post("/token", userController.loginUser, userController.sendUserData);

router.get(
  "/profile",
  checkAuth,
  userController.getMyData,
  userController.sendUserData
);

module.exports = router;

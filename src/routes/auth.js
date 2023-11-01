const express = require("express");
const AuthController = require("../app/controllers/AuthController");

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/register", AuthController.resultregister);
router.get("/login", AuthController.resultlogin);

//router.get("/logout", AuthController.logout);

module.exports = router;

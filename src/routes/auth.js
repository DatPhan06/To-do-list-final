const express = require("express");
const AuthController = require("../app/controllers/AuthController");

const router = express.Router();

router.get("/register", AuthController.register);
router.get("/login", AuthController.login);
router.get("/logout", AuthController.resultLogout);

router.post("/register", AuthController.resultregister);
router.post("/login", AuthController.resultlogin);

//router.get("/logout", AuthController.logout);

module.exports = router;

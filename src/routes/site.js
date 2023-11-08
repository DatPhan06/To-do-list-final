const authenticateJWT = require("../authenticateJWT");
const express = require("express");
const router = express.Router();

const SiteController = require("../app/controllers/SiteController");

// router.get("/add", SiteController.add);
router.get("/home", authenticateJWT, SiteController.home);

router.get("/", SiteController.welcome);

module.exports = router;

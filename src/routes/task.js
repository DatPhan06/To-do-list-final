const express = require("express");
const router = express.Router();

const TaskController = require("../app/controllers/TaskController");

router.post("/add", TaskController.add);
router.delete("/:id", TaskController.delete);
router.put("/:id", TaskController.update);

module.exports = router;

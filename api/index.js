const express = require("express");
const router = express.Router();
const ctrlIdeas = require("../controller");

router.get("/ideas", ctrlIdeas.getAll);

router.post("/ideas", ctrlIdeas.add);

router.put("/tasks/:id", ctrlIdeas.update);

router.patch("/tasks/:id/status", ctrlIdeas.updateStatus);

router.delete("/tasks/:id", ctrlIdeas.remove);

module.exports = router;

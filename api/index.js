const express = require("express");
const router = express.Router();
const ctrlIdeas = require("../controller");

router.get("/ideas", ctrlIdeas.getAll);

router.post("/ideas", ctrlIdeas.add);

router.patch("/ideas/:id/completed", ctrlIdeas.updateCompletedStatus);

router.patch("/ideas/:id/selected", ctrlIdeas.updateSelect);

router.delete("/ideas/:id", ctrlIdeas.remove);

module.exports = router;

const express = require("express");
const router = express.Router();

const EventCtrl = require("../controllers/event-ctrl");

router.post("/", EventCtrl.createEvent);
router.put("/:id", EventCtrl.updateEvent);
router.delete("/:id", EventCtrl.deleteEvent);
router.get("/:id", EventCtrl.getEventById);
router.get("/code/:code", EventCtrl.getEventByCode);
router.get("/", EventCtrl.getEvents);

module.exports = router;

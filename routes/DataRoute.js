const express = require("express");
const router = express.Router();
const { handleDataAdd, handleDataRetrive } = require("../controllers/Data");

// sending the data to the db
router.post("/:slug", handleDataAdd);

router.get("/:slug", handleDataRetrive);

module.exports = router;

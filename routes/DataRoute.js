const express = require("express");
const router = express.Router();
const { handleDataAdd } = require("../controllers/Data");

// sending the data to the db
router.post("/:slug", handleDataAdd);

module.exports = router;

const express = require("express");
const router = express.Router();

// Home page
router.get("/testing", async (req, res) => {
  res.send("api working");
});

module.exports = router;

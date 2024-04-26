const express = require("express");
const { getContacts } = require("../conrtollers/contact-controller");
const router = express.Router();

router.get("/contacts", getContacts);

module.exports = router;

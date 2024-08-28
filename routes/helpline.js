const { Router } = require("express");

const { handleHelplineGet } = require("../components/helpline")

const router = Router();

router.get("/", handleHelplineGet);

module.exports = router;
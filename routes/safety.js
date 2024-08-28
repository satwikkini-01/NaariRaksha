const { Router } = require("express");
const { handleSafetyGet } = require("../components/safety");

const router = Router();

router.get("/", handleSafetyGet);

module.exports = router;
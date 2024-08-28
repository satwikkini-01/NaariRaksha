const { Router } = require("express");

const { handleStaticGet } = require("../components/static")

const router = Router();

router.get("/", handleStaticGet);

module.exports = router;
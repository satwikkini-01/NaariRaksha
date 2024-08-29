const { Router } = require("express");

const { handleLocationGet } = require("../components/location")

const router = Router();

router.get("/", handleLocationGet);

module.exports = router;
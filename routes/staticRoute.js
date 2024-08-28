const { Router } = require("express");

const { handleStaticGet, handleStaticPost } = require("../components/static")

const router = Router();

router.get("/", handleStaticGet);
router.post("/", handleStaticPost);

module.exports = router;
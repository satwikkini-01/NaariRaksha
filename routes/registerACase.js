const { Router } = require("express");

const { handleRegisterGet, handleRegisterPost } = require("../components/registerACase")

const router = Router();

router.get("/", handleRegisterGet);
router.post("/register", handleRegisterPost);

module.exports = router;
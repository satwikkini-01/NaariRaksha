const { Router } = require("express");
const { handleForumGet, handleMultimediaGet, handleSurvivorGet, handleStoriesPostGet, handleStoriesPostPost } = require("../components/community")

const router = Router();

router.get("/survivorStories", handleSurvivorGet);
router.get("/forum", handleForumGet);
router.get("/multimedia", handleMultimediaGet);
router.get("/survivorStories/post", handleStoriesPostGet);

router.post("/survivorStories/post", handleStoriesPostPost)

module.exports = router;
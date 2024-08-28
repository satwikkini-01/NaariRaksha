const { Router } = require("express");
const { handleFeedbackGet, handleMultimediaGet, handleSurvivorGet, handleStoriesPostGet, handleStoriesPostPost, handleFeedbackPost } = require("../components/community")

const router = Router();

router.get("/survivorStories", handleSurvivorGet);
router.get("/feedback", handleFeedbackGet);
router.get("/multimedia", handleMultimediaGet);
router.get("/survivorStories/post", handleStoriesPostGet);

router.post("/survivorStories/post", handleStoriesPostPost)
router.post("/feedback", handleFeedbackPost);

module.exports = router;
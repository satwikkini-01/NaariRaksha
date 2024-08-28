const Story = require("../models/story");
const Feedback = require("../models/feedback");

async function handleSurvivorGet(req, res){
    const allStories = await Story.find({});
    return res.render("survivorStories", {allStories});
}

function handleFeedbackGet(req, res){
    return res.render("feedback");
}

function handleMultimediaGet(req, res){
    return res.render("multimedia");
}

function handleStoriesPostGet(req, res){
    return res.render("survivorStoriesPost");
}

async function handleStoriesPostPost(req, res){
    const { name, story } = req.body;
    if(name === '') await Story.create({story});
    else await Story.create({name, story});
    const allStories = await Story.find({});
    return res.render("survivorStories", {allStories, postMsg: "Your Story Has Been Posted Successfully!"});
}

async function handleFeedbackPost(req, res){
    const { name, feedback } = req.body;
    if(name === '') await Feedback.create({feedback});
    else await Feedback.create({name, feedback});
    return res.render("feedback", {postMsg: "Thank You For Providing Us Your Feedback!"});
}

module.exports = {
    handleFeedbackGet,
    handleMultimediaGet,
    handleSurvivorGet,
    handleStoriesPostGet,
    handleStoriesPostPost,
    handleFeedbackPost,
}
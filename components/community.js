const Story = require("../models/story")

async function handleSurvivorGet(req, res){
    const allStories = await Story.find({});
    return res.render("survivorStories", {allStories});
}

function handleForumGet(req, res){
    return res.render("forum");
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

module.exports = {
    handleForumGet,
    handleMultimediaGet,
    handleSurvivorGet,
    handleStoriesPostGet,
    handleStoriesPostPost,
}
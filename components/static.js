const Contact = require("../models/contactUs");

function handleStaticGet(req, res){
    return res.render("home");
}

async function handleStaticPost(req, res){
    const { name, email, message } = req.body;
    await Contact.create({name, email, message});
    return res.redirect("/");
}

module.exports = {
    handleStaticGet,
    handleStaticPost,
}
const Complaint = require("../models/complaint");

function handleRegisterGet(req, res){
    return res.render("registerACase");
}

async function handleRegisterPost(req, res){
    const { name, age, gender, contactNumber, location, typeOfIncident, dateAndTime, locationOfIncident, description } = req.body;
    const newComplaint = await Complaint.create({name, age, gender, contactNumber, location, typeOfIncident, dateAndTime, locationOfIncident, description});
    return res.render("registerSuccess");
}

module.exports = {
    handleRegisterGet,
    handleRegisterPost,
}
const { Schema, model } = require("mongoose");

const complaintSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    typeOfIncident: {
        type: String,
        required: true,
    },
    dateAndTime: {
        type: String,
        required: true,
    },
    locationOfIncident: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    confidentiality: {
        type: Boolean,
        // required: true,
    },
}, { timestamps: true });

const Complaint = model("complaint", complaintSchema);

module.exports = Complaint;
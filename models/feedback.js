const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema({
    name: {
        type: String,
        default: "Anonymous",
    },
    feedback: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Feedback = model("feedback", feedbackSchema);

module.exports = Feedback;
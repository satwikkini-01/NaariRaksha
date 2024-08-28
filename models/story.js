const { Schema, model } = require("mongoose");

const storySchema = new Schema({
    name: {
        type: String,
        default: "Anonymous",
    },
    story: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Story = model("story", storySchema);

module.exports = Story;
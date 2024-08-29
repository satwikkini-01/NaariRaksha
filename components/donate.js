require("dotenv").config();

function handleDonateGet(req, res){
    return res.render("donate", {razorpayKey: process.env.RAZORPAY_API_KEY});
}

module.exports = {
    handleDonateGet,
}
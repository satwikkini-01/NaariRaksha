const { Router } = require("express");
const Razorpay = require('razorpay');
require("dotenv").config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

const { handleDonateGet } = require("../components/donate")

const router = Router();

router.get("/", handleDonateGet);
router.post('/order', async (req, res) => {
    const options = {
        amount: req.body.amount * 100,
        currency: 'INR',
        receipt: 'receipt_order_1',
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/verify', (req, res) => {
    const crypto = require('crypto');

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
        res.send('Payment verification successful!');
    } else {
        res.status(400).send('Payment verification failed!');
    }
});

module.exports = router;
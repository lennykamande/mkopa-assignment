
const rateLimit = require("express-rate-limit");
const recieveSmsService = require("../controllers/smsRecieve");

const smsSchema = require("../models/smsStructure");

// applying rate limit of 1 hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes minutes
    max: 50, // limit each 'from' field to 50 requests per windowMs
    statusCode: 429,
    message: "Too many requests created from this 'from' field, please try again after an hour",
    headers: true
});

// create App function
module.exports = function(app) {
    const incoming = require('../controllers/smsRecieve');
    const recieveSms = new incoming(smsSchema);
    // SMS Routes

    // inbound request endpoint
    app
    .route("/incoming/sms")
    .post(recieveSms.inboundSms)

    app
    .use(recieveSms.defaultResponse)
    
};

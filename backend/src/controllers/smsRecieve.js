// import cache
const cache = require('memory-cache');

const outgoing = require("./smsSend");
// inboundSMS function - To check an inbound sms
class recieveSmsService{
    constructor(SMSSchema){
        this.SMSSchema = SMSSchema;
        this.send = new outgoing();
    } 
     inboundSms = async (req, res) => {
            let newSMS =  this.SMSSchema (req.body);
            if (newSMS.from) {
                if (newSMS.from.toString().length < 6 || newSMS.from.toString().length > 16) {
                    res.status(400).json({
                        "message": "",
                        "error": "parameter 'from' is invalid"
                    })
                    return
                }
            } else {
                res.status(400).json({
                    "message": "",
                    "error": "parameter 'from' is missing"
                })
                return
            } 
            if (newSMS.to) {
                if (newSMS.to.toString().length < 6 || newSMS.to.toString().length > 16) {
                    res.status(400).json({
                        "message": "",
                        "error": "parameter 'to' is invalid"
                    })
                    return
                }
            } else {
                res.status(400).json({
                    "message": "",
                    "error": "parameter 'to' is missing"
                })
                return
            } 
            if (newSMS.text) {
                if (newSMS.text.length < 1 || newSMS.text.length > 120) {
                    res.status(400).json({
                        "message": "",
                        "error": "parameter 'text' is invalid"
                    })
                    return
                }
            } else {
                res.status(400).json({
                    "message": "",
                    "error": "parameter 'text' is missing"
                })
                return
            }
            if (newSMS.text.includes("STOP") || newSMS.text.includes("STOP\n") || newSMS.text.includes("STOP\r") || newSMS.text.includes("STOP\r\n")) {
                cache.put(newSMS.from, newSMS.to, 1.44e+7) //caching for 4 hours
            }
            //import function to send messages if okay
            const outgoing = require("./smsSend");
            // inject sendSms with parameters
            
            const url = process.env.THIRD_PARTY_URL || 'http://localhost/3030/sms';
            const send = outgoing(newSMS, url);
            let finalText = send.sendSms;
            return finalText;
         
    };
     defaultResponse = async (req, res) => {
        res.status(405).json({
            "message": "Method Not Allowed"
        })
    }

};

module.exports = recieveSmsService
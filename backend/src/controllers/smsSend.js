const axios = require('axios')
const SmsSent = require('./smsSent');
// inject the Sms Schema instead of sms going out
function sendSmsService (SMSSchema, url) {
    
    async function sendSms () {
        //Most sms services have a sort of header     
            const newSMS = new SMSSchema (req.body);
            
            // Send message to 3rd party api
            const smsSent = newSmsSent(newSMS.body)
            smsSent.sent(newSMS.to);
            try {
                const data = {
                    from: newSMS.from,
                    body: newSMS.text,
                     to: newSMS.to
                } ;
                await axios.post(url, data);
                    res.status(201).json({
                        "message": resp.data
                    })
                //emit event on successful request
                smsSent.sent(newSMS.to);
                } 
            catch (err) {
                // Handle Error Here
                console.error(err);
            }
        return newSMS;
            
        } 

    
    return {
        sendSms
    }
}

module.exports = sendSmsService
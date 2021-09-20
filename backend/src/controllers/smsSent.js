const EventEmitter = require("events");

class SmsSent extends EventEmitter{
    constructor(sms)
    {
        super();
        this.sms = sms;
    }

    sent(to)
    {
        this.emit("Message Sent Successfully ${to}")
    }
}

module.exports = SmsSent
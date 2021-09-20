let SMS = require('../src/models/smsStructure');

// Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('SMS', () => {
    beforeEach((done) => {  // Before each test we empty the database
        SMS.remove({}, (err) => {
           done();
        });
    });

 /*
  * Test the /POST inboundSMS route
  */
  describe('/POST inboundSMS', () => {
    it('It should POST an inbound SMS', (done) => {
        let sms = {
            from: 1234567890,
            to: 1234567,
            text: "A payment of 1234 has been made to MKOPA"
        }
      chai.request(server)
          .post('/incoming/sms')
          .send(sms)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
            done();
          });
        });
    });

 /*
  * Test the /POST outboundSMS route
  */
  describe('/POST outboundSMS', () => {
    it('It should POST an outbound SMS', (done) => {
        let sms = {
            from: 1234567890,
            to: 1234567,
            text: "Hello World"
        }
      chai.request(server)
          .post('/outbound/sms')
          .send(sms)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
            done();
          });
        });
    });
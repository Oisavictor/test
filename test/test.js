const chai = require("chai");
const chaiHtpp = require("chai-http");
const server = require("../app");

// Assertion Style
chai.should();
chai.use(chaiHtpp);

describe('Test server', function() {
    describe('/GET route status', () => {
        it('it should GET the countdown page status', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    if (err) throw err;
                    res.should.have.status(200);
                done();
                
            });
            
        });
        
    });

    describe('/GET route object', () => {
        this.timeout(500);
        it('it should GET the page object', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    if (err) throw err;
                    res.body.should.be.a('object');
                done()
                
            });
            
        });
        
    });
});
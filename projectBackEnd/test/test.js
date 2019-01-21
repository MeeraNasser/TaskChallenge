'use strict';
process.env.NODE_ENV = 'test';
const chai = require('chai');
// const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const should = chai.should();
// chai.use(chaiHttp);

describe('Tasks Tests', function() {
  // GET - List all Tasks
 it('should return status and id for all Tasks', function() {
    return chai.request(app)
      .get('/tasks/retrieveTasks')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res.body[0]).to.have.property('status');
        expect(res.body[0]).to.have.property('id');
        expect(res).to.be.json;
      })
      .catch(function (err) {
        expect(err).to.have.status(500);
        expect(err).to.be.json;
      })
 });

  // GET _________ Update Task status __________

  it('should update task status', (done) => {
             chai.request(app)
                  .get('/tasks/updateTaskStatus')
                  .send({taskID:"1",taskStatus:"pending"})
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.have.property('message').eql('Task Status Updated Successfully');
                     if(err)
                     console.log(err);
                   done();
                 });
    });

});

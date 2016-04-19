var test= require('supertest');
var app = require('../app');

describe('get',function(){
	it('expect 200',function(done){
test(app).get('/').expect(200,done);
})
})
"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
var supertest = require("supertest");
describe('app', function () {
    var request;
    beforeEach(function () {
        request = supertest(index_1["default"]);
    });
    it('should return a successful response for GET /', function (done) {
        request.get('/')
            .expect(200, done);
    });
});
//# sourceMappingURL=index.test.js.map
// 'use strict';

// const schema = require("../delete-people/peopleSchema.js");
// const app = require('../server.js');
// let postFunction = require('../post-people/index.js');
// let getFunction = require('../get-people/index.js');

// const supertest = require('supertest');
// const { expect } = require('@jest/globals');
// const fakeServer = supertest(app)


// describe('Testing post function', () => {

//     it('post', async() => {

//         let url = 'https://tc98q747f3.execute-api.us-east-1.amazonaws.com/people'

//         let test = app.post(url, postFunction(e)).send({ name: 'Nihad', age: 24 });
//         console.log(test);
//         expect(test._data.name).toEqual('Nihad');
//         expect(test.statusCode).toEqual(201);
//     });


//     it('get', async() => {
//         let url = 'https://tc98q747f3.execute-api.us-east-1.amazonaws.com/people'

//         let test = fakeServer.get(url, await getFunction);


//         expect(test.statusCode).toEqual('Nihad');
//     });


// });
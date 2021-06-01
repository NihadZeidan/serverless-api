'use strict'

const Dynamoose = require('dynamoose');


const PeopleSchema = new Dynamoose.Schema({
    id: String,
    name: String,
    age: Number

});

let peopleS = Dynamoose.model('people', PeopleSchema);

module.exports = peopleS
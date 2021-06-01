'use strict';

const peopleSchema = require('./peopleSchema.js');


module.exports = exports.handler = async(event) => {
    // everything coming form body will be string, so we need to return it to Obj
    try {
        const id = event.pathParameters ? event.pathParameters.id : null
        let people;

        if (id) {
            people = await peopleSchema.query('id').eq(id).exec()
            people = people[0]
        } else {
            people = await peopleSchema.scan().exec()

        }


        return {
            statusCode: 200,
            body: JSON.stringify(people)
        }

    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }

}
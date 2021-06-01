'use strict';

const peopleSchema = require('./peopleSchema.js');


exports.handler = async(event) => {
    // everything coming form body will be string, so we need to return it to Obj
    try {
        const id = event.pathParameters ? event.pathParameters.id : null

        const { name, age } = JSON.parse(event.body);

        // let people = await peopleSchema.query('id').eq(id).exec();

        let toUpdate = await peopleSchema.update({ 'id': id }, { "name": name, "age": age });

        return {
            statusCode: 200,
            body: JSON.stringify(toUpdate)
        }

    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }

}
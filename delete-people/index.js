'use strict';

const peopleSchema = require('./peopleSchema.js');


exports.handler = async(event) => {

    try {
        const id = event.pathParameters ? event.pathParameters.id : null


        let toDelete = await peopleSchema.delete({ 'id': id });

        return {
            statusCode: 202,
            body: '[]'
        }

    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }

}
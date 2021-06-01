const peopleSchema = require('./peopleSchema.js');
const uuid = require('uuid').v4;

module.exports = exports.handler = async(event) => {
    // everything coming form body will be string, so we need to return it to Obj
    try {
        const { name, age } = JSON.parse(event.body);
        const id = uuid();

        let record = {
            id: id,
            name: name,
            age: age
        }

        let newSchema = new peopleSchema(record);
        let newR = await newSchema.save();

        return {
            statusCode: 201,
            body: JSON.stringify(newR)
        }
    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }

}
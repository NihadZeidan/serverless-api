'use strict';


const express = require('express')
const app = express();

let url = 'https://tc98q747f3.execute-api.us-east-1.amazonaws.com/people'

app.listen(url, () => console.log('good'))

module.exports = app
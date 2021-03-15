const jwt = require('jsonwebtoken');
require('dotenv').config();

let token = jwt.sign({user: 'Jordi', access: 'premium'}, process.env.JWT_KEY);

console.log(token);

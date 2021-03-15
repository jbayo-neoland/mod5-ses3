const bcrypt = require('bcrypt');

let plainPassword = process.argv.slice(2).join(' ');

let encryptedPassword = bcrypt.hashSync(plainPassword, 10);

console.log(encryptedPassword);

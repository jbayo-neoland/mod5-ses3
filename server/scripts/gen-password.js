const bcrypt = require('bcrypt');
require('dotenv').config(); // BUSCAR ARCHIVO .env a partir de ./

let plainPassword = process.argv.slice(2).join(' ');
console.log(plainPassword)
console.log(__dirname , parseInt(process.env.BCRYPT_ROUNDS));
let encryptedPassword = bcrypt.hashSync(plainPassword, parseInt(process.env.BCRYPT_ROUNDS));

console.log(encryptedPassword);

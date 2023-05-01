/* eslint-disable linebreak-style */
const mysql = require('mysql2/promise');
require('dotenv').config();


// console.log(process.env.MYSQL_HOST);
// console.log(process.env.MYSQL_USER);
// console.log(process.env.MYSQL_PASSWORD);
// console.log(process.env.MYSQL_DB);


const connection = mysql.createPool({
    host: process.env.MYSQL_HOST, // ou o IP do seu servidor MySQL
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,


});

module.exports = connection;
// connection.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao MySQL: ' + err.stack);
//         return;
//     }

//     console.log('Conectado ao MySQL com sucesso!');
// });



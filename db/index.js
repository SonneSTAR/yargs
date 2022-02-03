const {Client} = require('pg')

const cliente = new Client ({
    user: "postgres",
    host:"localhost",
    database: "ropadb",
    password:"root",
    port: 5432
})

cliente.connect()
    .then(() => console.log('cliente conectado!'))
    .catch(e => console.log('error' + e));
    
module.exports = cliente;
const { Client } = require('pg')


const cliente = new Client({
    user: "postgres",
    host: "localhost",
    database: "ropadb",
    password: "root",
    port: 5432
})






cliente.connect()
    .then(() => console.log('cliente conectado!'))
    .catch(e => console.log('error' + e));



//CREATE
const queryInsert = {
    text: 'INSERT INTO ropa (nombre,color,talla) VALUES ($1,$2,$3) RETURNING *',
    values: ["Ricardo", "ROJO", "XL"]
};
async function create() {
    try {
        const respuesta = await cliente.query(queryInsert)
        console.log(respuesta.rows)
    } catch (error) {
        console.log(error)
    } finally {
        await cliente.end()
    }
}

//CONSULTAR/READ
const query = "SELECT * FROM ropa";

async function consultar() {
    try {
        const respuesta = await cliente.query(query)
        console.log(respuesta.rows)
    } catch (error) {
        console.log(error)
    } finally {
        await cliente.end()
    }

};



//UPDATE
const queryUpdate = {
    text: 'UPDATE ropa SET talla = $1 WHERE nombre = $2 RETURNING *',
    values: ["PI", "Ricardo"]
};
async function update() {
    try {
        const respuesta = await cliente.query(queryUpdate)
        console.log(respuesta.rows)
    } catch (error) {
        console.log(error)
    } finally {
        await cliente.end()
    }
};

//DELETE
const queryEliminar = {
    text: 'DELETE from ropa WHERE id = $1 RETURNING *',
    values: [8]
};
async function eliminar() {
    try {
        const respuesta = await cliente.query(queryEliminar)
        console.log(respuesta.rows)
    } catch (error) {
        console.log(error)
    } finally {
        await cliente.end()
    }
};

eliminar()

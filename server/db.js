const Pool = require("pg").Pool // we are making an instance of the pool which is getting the pool object from the pg api

const pool = new Pool({
    user: "playabook",
    password: "8896",
    host: "localhost",
    port: 5432,
    database: "english"

});

module.exports = pool;
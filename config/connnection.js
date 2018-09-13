let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});

connection.connect((err)=>{
    if (err) {
        console.log(`Error Connecting: ${err.stack}`) // what is err.stack?
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
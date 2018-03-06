const mysql = require('mysql');

var con = mysql.createConnection({



    host : "localhost",
    user : "root",
    password : "root",
    database : "Student",
    socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock"
});

con.connect((err) => {

    if(err) {

        throw err;
    }

    console.log("Connected With MySql");
})

module.exports = {con};
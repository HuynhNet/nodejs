var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "first_project"
});

connect.connect( (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connect database successfunly!");
    }
});

module.exports = connect;
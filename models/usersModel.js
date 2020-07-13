var DB = require('./connect_db');

var User = {
    getAllUser: (callback) => {
        var sql = 'SELECT * FROM users';
        return DB.query(sql, callback);
    },

    addUser: (callback, user) => {
        var sql = 'INSERT INTO users SET ?';
        return DB.query(sql, [user], callback);
    }
}

module.exports = User;
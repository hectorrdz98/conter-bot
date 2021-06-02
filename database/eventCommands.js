const sqlite3 = require('sqlite3').verbose();

module.exports = {
    getLastEvent: function (callback) {
        let db = new sqlite3.Database('./conterDB.db');
        var data = [];
        db.serialize(function() {
            db.each("SELECT * FROM events ORDER BY id DESC", function(err, row) {
                data.push(row);
            }, function () {
                db.close();
                callback(data[0]); 
            });
        });
    },
    insertEvent: function (title, description, duration, players, callback) {
        let db = new sqlite3.Database('./conterDB.db');
        let data = [title, description, duration, players];
        let sql = ` INSERT INTO events(title, description, duration, players)
                       VALUES(?, ?, ?, ?)`;
        db.run(sql, data, function(err) {
            if (err) {
                return console.error(err.message);
            }
        });
        db.close();
    },
    updateName: function (id, name) {
        let db = new sqlite3.Database('./conterDB.db');
        let data = [name, id];
        let sql = ` UPDATE users
                       SET name = ?
                     WHERE id = ?`;
        db.run(sql, data, function(err) {
            if (err) {
                return console.error(err.message);
            }
        });
        db.close();
    }
}

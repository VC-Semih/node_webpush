const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

module.exports.initDb = () => {
    db.run("CREATE TABLE subscription (id integer primary key  auto_increment , endpoint TEXT)");
};

module.exports.saveSubscription = ( body ) => {
    return new Promise(((resolve, reject) => {
        db.run("INSERT INTO subscription (endpoint) values (?)", [body], function (err) {
                if(err){
                    reject(err.message)
                }
                resolve(this.lastID)
        });
    }));
}
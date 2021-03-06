const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');


    var sequelize = new Sequelize('onlinemarket', 'root', 'root', {
      host: '127.0.0.1',
      dialect: 'mysql'
    });

    var pool = mysql.createPool({
      connectionLimit: 10,
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root'
    });

      
      pool.query('CREATE DATABASE IF NOT EXISTS onlinemarket', function (err) {
                      if (err) throw err;
                      pool.query('USE onlinemarket', function (err) {
                          if (err) throw err;
                                  pool.query('CREATE TABLE IF NOT EXISTS users('
                                  + 'ID INT NOT NULL AUTO_INCREMENT,'
                                  + 'username VARCHAR(255) NOT NULL,'
                                  + 'password VARCHAR(255) NOT NULL,'
                                  + 'first_name VARCHAR(255),'
                                  + 'last_name VARCHAR(255),'
                                  + 'PRIMARY KEY(ID)'
                                  +  ');', function (err) {
                                      if (err) throw err;
                                  pool.query('CREATE TABLE IF NOT EXISTS posts('
                                  + 'ID INT NOT NULL AUTO_INCREMENT,'
                                  + 'title VARCHAR(255) NOT NULL,'
                                  + 'description VARCHAR(255) NOT NULL,'
                                  + 'category VARCHAR(255) NOT NULL,'
                                  + 'city VARCHAR(255) NOT NULL,'
                                  + 'country VARCHAR(255) NOT NULL,'
                                  + 'images VARCHAR(255) NOT NULL,'
                                  + 'price DECIMAL(10,2) NOT NULL,'
                                  + 'postDate DATE NOT NULL,'
                                  + 'deliveryType VARCHAR(255) NOT NULL,'
                                  + 'sellerName VARCHAR(255) NOT NULL,'
                                  + 'mobile VARCHAR(255) NOT NULL,'
                                  + 'PRIMARY KEY(ID)'
                                  +  ');', function (err) {
                                      if (err) throw err;
                              });
                          });
                      });
                      console.log("successfully connected to database!");
                    }).then(() => {
                      //db should exist now, initializing Sequelize after that
                      sequelize;

                      callback(sequelize);
                      pool.end();   // close the connection
                    
                      sequelize.authenticate().then(() => {
                        console.log('Database connection has been established successfully.');
                      }).catch(err => {
                        console.error('Unable to connect to the database: ' + err);
                      });
      }).catch(err => {
        console.log(err)
      });
  

  module.exports = { sequelize };
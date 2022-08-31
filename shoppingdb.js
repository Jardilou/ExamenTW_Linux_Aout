let mysql = require('mysql');
var shoppingdb = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'shopping'
});
shoppingdb.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("connected");
    }
});
module.exports = shoppingdb;
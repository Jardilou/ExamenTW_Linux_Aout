const Item = require('../models/itemModel');
let item = require('../models/itemModel');
let shoppingdb = require('../shoppingdb');


exports.addItem = function (req, res) {
    
    Item = new item(req.body.name, req.body.quantity);
    shoppingdb.query("INSERT INTO items set ?", {"name": Item.name, "quantity": Item.quantity},function(err,result){
        if(err) {
            console.log(Item.name)
            console.log(err);
        }else{    
            res.redirect('/');
        }
    })
};



exports.displayForm = function (req, res) {
    res.render('additem.ejs')
};
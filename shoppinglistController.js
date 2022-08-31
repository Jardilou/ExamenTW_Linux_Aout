let shoppinglist = require('../models/shoppinglistModel');
let shoppingdb = require('../shoppingdb');

exports.displayList = function(req,res){
    var Shoppinglist = new shoppinglist();
    shoppingdb.query("SELECT * from items;",function(err,result){
        if(err) {
            console.log(err);
        }else{
            result.forEach(item => {
                Shoppinglist.addItem(item)
            });
            res.render('shoppinglist.ejs',{data:Shoppinglist});
        }                
    })
}

exports.removeItem = function (req, res) {
    Item = new item(req.body.name, req.body.quantity);
    shoppingdb.query("REMOVE FROM items set ?", {"name": Item.name, "quantity": Item.quantity},function(err,result){
        if(err) {
            console.log(err);
        }else{    
            res.redirect('/shoppinglist');
        }
    })
};


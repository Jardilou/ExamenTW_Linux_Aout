let express = require('express');
let router = express.Router();
let shoppinglistController = require('./controllers/shoppinglistController.js');
let additemController = require('./controllers/additemController.js');

router.get('/',additemController.displayForm);
router.get('/shoppinglist',shoppinglistController.displayList);
router.post('/addItem',additemController.addItem);
router.get('/displayForm',additemController.displayForm);

router.post('/removeItem',shoppinglistController.removeItem);

module.exports = router;
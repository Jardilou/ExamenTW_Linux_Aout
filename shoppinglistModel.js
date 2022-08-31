class shoppinglist{
    constructor(){
        this.items = [];
    }
    addItem(element){
        this.items.push(element);
    }
    removeItem(element){
        this.items.pop(element);
    }
};
module.exports = shoppinglist;
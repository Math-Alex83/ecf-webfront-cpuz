class Item{
    constructor(_item){
        Object.assign(this, _item);
    }

    getValues(){
        return Object.values(this);
    }

    getKeys(){
        return Object.keys(this);
    }
}

export {Item};
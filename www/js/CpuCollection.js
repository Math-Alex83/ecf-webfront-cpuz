import {DataBase} from "./DataBase.js";
import {Item} from "./Item.js";

class CpuCollection{
    constructor(){
        this.collection = [];
        this.collectionWork = [];
        this.source = "/cpuz.json";
    }

    async getCollection(){
        let data = await DataBase.fetchData(this.source);
        /*console.log(data);*/
         this.collection = data;
        this.collection = this.collection.map(i=>new Item(i));
        this.collectionWork = Array.from(this.collection);
        console.log(this.collection);
     }
}
    export {CpuCollection};
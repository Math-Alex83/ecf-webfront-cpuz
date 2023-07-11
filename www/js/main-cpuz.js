import { CpuCollection } from "./CpuCollection.js";
import{UserInterf} from "./UserInterface.js";
import{Event} from "./Event.js";

let data = new CpuCollection();

Event.collection = data;
await data.getCollection();

let ui = new UserInterf(data);
ui.generateTable();

console.log('Je suis ... ^^ !');


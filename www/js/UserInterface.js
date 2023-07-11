class UserInterf{
    constructor(_collection){
        this.collection = _collection;
        this.tbody = document.getElementById("tbody");
    }

    generateTable(){
        this.tbody.innerHTML = ""
        for(let _item of this.collection.collection){
            let row = this.generateRow(_item);
            this.tbody.appendChild(row);
        }
    }

    generateRow(_item){
        let row = document.createElement("tr");
        for(let value of _item.getValues()){
            let cell = this.generateCell(value);
            row.appendChild(cell);
        }
        return row;
    }

    generateCell(_value){
        let cell = document.createElement("td");
        cell.textContent = _value;
        return cell;
    }

    generateFulName(_marque,_fam,_model){
        let fulName = document.querySelectorAll('#brand, #family, #model')
        fulName.textContent = this.generateCell(_marque,_fam,_model);
        return this.generateRow();
    }
}

export {UserInterf}
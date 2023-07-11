class DataBase{
    static async fetchData(_url){
        let response = await fetch("./cpuz.json");
        let json = await response.json();
        return json;
    }
}
  
export {DataBase};
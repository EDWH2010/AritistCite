class InfoData{
    
    static name="InfoData";

    infoContent;

    constructor(content){
        this.infoContent = content;
    }
    static getName(){
        return this.name;
    }

    getContent(){
        return this.infoContent;
    }
}

class NewsInfoData extends InfoData{

    static name="NewsInfoData";
    infoDate;

    constructor(content,date){
        super(content);
        this.infoDate = date;
    }

    getDate(){
        return this.infoDate;
    }
    
}

class MovieInfoData extends InfoData{

     static name="MovieInfoData";
    infoDate;

    constructor(content,date){
        super(content);
        this.infoDate = date;
    }

    
}


const NewsInfoArray = [];
const LiveInfoArray = [];
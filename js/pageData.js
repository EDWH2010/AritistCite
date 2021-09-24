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

class LiveInfoData extends InfoData{
    static name="NewsInfoData";
    infoDate;
    address;

    constructor(content,date,address){
        super(content);
        this.infoDate = date;
        this.address = address;
    }

    getDate(){
        return this.infoDate;
    }

    getAddress(){
        return this.address;
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

class DiscoInfoData extends InfoData{
    static name="DiscoInfoData";
    imageSrc;

    constructor(content,src){
        super(content);
        this.imageSrc = src;
    }

}

const PAGETYPE = 'pageType';
const PAGECOUNT = 'pageCount';

const NEWSITEM = 'newsItem';
const LIVEITEM = 'liveItem';
const DISCOITEM = 'discoItem';



const NewsInfoArray = [];
const LiveInfoArray = [];
const discoInfoArray = [];
export class Widget{
    Id: number;
    Name : string;
    Type : string;
    Width : Number;
    Height : Number;

    constructor(
        id: number = -1,
        name:string = "Add Widget",
        type:string = "WIDGET_NULL",
        width:number = 100,
        height:number = 100,
    ){
        var self = this;
        
        self.Id = id;
        self.Name = name;
        self.Type = type;
        self.Width = width;
        self.Height = height;
    }

    getID(){
        var self = this;
        return self.Id;
    }

    setID(id:number = -1){
        var self = this;

        self.Id = id;
    }
    edit(id, name, type, width, height, data)
    {
        var self = this;
        
        self.Id = id;
        self.Name = name;
        self.Type = type;
        self.Width = width;
        self.Height = height;
    }
}
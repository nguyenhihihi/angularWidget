import {Widget} from './widget.modules';

export class WidgetDatabase extends Widget{
    Data : object;
    constructor(data : object, id: number, name:string, type:string, width:number, height:number){
        
        super(id, name, type, width, height);

        var self = this;
        self.Data = data; 
        
        self.Id = id;
        self.Name = name;
        self.Type = "WIDGET_DATABASE";
        self.Width = width;
        self.Height = height;
    }

    edit(id, name, type, width, height, data)
    {
        var self = this;
        
        self.Id = id;
        self.Name = name;
        self.Type = type;
        self.Width = width;
        self.Height = height;
        self.Data = data;
    }
}
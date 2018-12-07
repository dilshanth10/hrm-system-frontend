export class Holiday {
    id: number;
    start: Date;
    end?: Date;
    title: string;
    color: Colors = new Colors();
    allDay: boolean;
    resizable:Resizable = new Resizable();
    draggable: boolean;
}
export class Colors {
    id: number;
    name: string;
    primary: string;
    secondary: string;
}
export class Resizable  {
    id:number;
    beforeStart: boolean;
    afterEnd: boolean;    
}
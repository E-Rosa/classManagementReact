interface IBox {    
    x : number;
    y : number;
    height : number;
    width : number;
}

class Box {
public x: number;
public y: number;
public height: number;
public width: number;

constructor(obj?: IBox) {    
    this.x = obj?.x ?? 0
    this.y = obj?.y ?? 0
    this.height = obj?.height ?? 0
    this.width = obj?.width ?? 0;
}   
}


class Box2 {
public x: number;
public y: number;
public height: number;
public width: number;

constructor();
constructor(obj: IBox);	
constructor(obj?: IBox) {    
    this.x = obj?.x ?? 0
    this.y = obj?.y ?? 0
    this.height = obj?.height ?? 0
    this.width = obj?.width ?? 0;
}   
}
console.log(new Box2())
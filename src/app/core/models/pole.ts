
export class Pole {
    id: number;
    name: string;
    poleManagerName: string;
    description: string;
    capacity: number; //number of all places in pole 
    reserved: number; //number of reserved places in pole 

    constructor(id: number, name: string, poleManagerName: string, description: string, capacity: number, reserved: number) {
        this.id = id;
        this.name = name;
        this.poleManagerName = poleManagerName;
        this.description = description;
        this.capacity = capacity;
        this.reserved = reserved;

    }
}
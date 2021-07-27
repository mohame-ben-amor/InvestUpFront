import { PoleManager } from "./poleManager";

export class Pole {
    id: number;
    name: string;
    poleManager: PoleManager;
    description: string;
    capacity: number; //number of all places in pole 
    reserved: number; //number of reserved places in pole 

}
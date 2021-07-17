import { Pole } from "./pole";
import { User } from "./user";

export class PoleManager extends User{

    constructor( public id:number,public firstname:string, public lastname:string){
        super();
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
import { Pole } from "./pole";
import { Role } from "./role";
import { UserStatus } from "./userStatus";
import { WithHoldingStatus } from "./withHoldingStatus";

export class PoleManager {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    telNum: string;
    adress: string;
    userStatus: UserStatus;
    presential:number;
    remote:number;
    withHoldingStatus: WithHoldingStatus;
    role: Role;
    pole: Pole;
}
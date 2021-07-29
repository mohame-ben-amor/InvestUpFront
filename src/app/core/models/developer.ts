import { Planification } from "./planification";
import { Project } from "./project";
import { Role } from "./role";
import { UserStatus } from "./userStatus";
import { WithHoldingStatus } from "./withHoldingStatus";

export class Developer {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    telNum: string;
    adress: string;
    userStatus: UserStatus;
    presential:number;
    remote:number;
    withHoldingType: WithHoldingStatus;
    role: Role;
    projects: Project[];
    historiques:Planification[];
}
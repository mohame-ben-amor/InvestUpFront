import { UserStatus } from "./userStatus";

export class Planification {
    id: number;
    startingDate: string;
    deadline: string;
    developerId: number;
    projectManagerDecision: UserStatus;
    poleManagerDecision: UserStatus;
}
export class Planification {
    id: number;
    developerName: string;
    startingDate: string;
    deadline: string;
    projectManagerDecision: string;
    poleManagerDecision: string;;

    constructor(id: number, developerName: string, startingDate: string,deadline: string, projectManagerDecision: string, poleManagerDecision: string) {
        this.id = id;
        this.developerName = developerName;
        this.startingDate = startingDate;
        this.deadline = deadline;
        this.projectManagerDecision = projectManagerDecision;
        this.poleManagerDecision = poleManagerDecision;

    }
}
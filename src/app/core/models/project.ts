import { ProjectManager } from "./projectManager";

export class Project {
    id: number;
    name: string;
    idProjectManager: number;

    constructor(id: number, name: string, idProjectManager) {
        this.id = id;
        this.name = name;
        this.idProjectManager = idProjectManager;
    }
}
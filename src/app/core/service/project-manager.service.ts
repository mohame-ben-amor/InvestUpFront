import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Developer } from "../models/developer";
import { Project } from "../models/project";
import { ProjectManager } from "../models/projectManager";
import { WithHoldingStatus } from "../models/withHoldingStatus";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class ProjectManagerService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.get<ProjectManager[]>(Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + "/findAll", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    editWithHoldingType(id: number, optionalWithHoldingType: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let withHoldingType = this.toEnum(optionalWithHoldingType);
        let url = Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + `/update/withHoldingType/${id}/${withHoldingType}`;
        return this.http.patch<ProjectManager>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    delete(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + `/delete/${id}`;
        return this.http.delete(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    updateRole(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + `/update/role/${id}`;
        return this.http.post<ProjectManager>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    createProject(projectManagerId: number, name: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.post<Project>(Constants.APP_PORT + Constants.PROJECT_ENDPOINT + "/create", {
            projectManagerId, name
        }, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    updateProjectsList(idProjectManager: number, idProject: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + `/update/projectList/${idProjectManager}/${idProject}`;
        return this.http.patch<void>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    getAllDevelopersByProjectManager(idProjectManager: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + `/findDevelopersByIdProjectManager/${idProjectManager}`;
        return this.http.get<Developer[]>(url,{
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    getAllProjectsByProjectManager(idProjectManager: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_ENDPOINT + `/filterByProjectManager/${idProjectManager}`;
        return this.http.get<Project[]>(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    updatePassword(currentPassword: string, newPassword: string, token: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.patch(Constants.APP_PORT + Constants.PROJECT_MANAGER_ENDPOINT + "/update/password", {
            currentPassword, newPassword, token
        }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    toEnum(value: string): string {
        switch (value) {
            case WithHoldingStatus.IN_VACATION:
                return "IN_VACATION";
            case WithHoldingStatus.SICK_DAYS:
                return "SICK_DAYS";

            case WithHoldingStatus.SUSPENSION:
                return "SUSPENSION";
            case WithHoldingStatus.NONE:
                return "NONE";
        }
    }
}
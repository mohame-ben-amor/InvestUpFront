import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) { }
    token = "";

    getAllProjects() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];

        return this.http.get<Project[]>(Constants.APP_PORT + "user/project/showall", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    getMyProjects(){
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];

        return this.http.get<Project[]>(Constants.APP_PORT + "user/entreoreneur/project/myprojects", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }
}
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

    getMyProjects() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];

        return this.http.get<Project[]>(Constants.APP_PORT + "user/entrepreneur/project/myprojects", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    editName(id: number, name: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.put(Constants.APP_PORT + "user/entrepreneur/project/update", { id, name }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editDescription(id: number, description: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.put(Constants.APP_PORT + "user/entrepreneur/project/update", { id, description }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editAchievement(id: number, achievement: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.put(Constants.APP_PORT + "user/entrepreneur/project/update", { id, achievement }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editLogo(id: number, logo: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.put(Constants.APP_PORT + "user/entrepreneur/project/update", { id, logo }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }




}
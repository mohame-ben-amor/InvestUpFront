import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Developer } from "../models/developer";
import { Project } from "../models/project";
import { WithHoldingStatus } from "../models/withHoldingStatus";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];

        return this.http.get<Project[]>(Constants.APP_PORT + Constants.PROJECT_ENDPOINT + "/findAll", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    delete(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.PROJECT_ENDPOINT + `/delete/${id}`;

        return this.http.delete(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
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
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PoleManager } from "../models/poleManager";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class PoleManagerService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];

        return this.http.get<PoleManager[]>(Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + "/findAll", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }
}
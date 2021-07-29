import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { PoleManager } from "../models/poleManager";
import { WithHoldingStatus } from "../models/withHoldingStatus";
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

    getById(idPoleManager:number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];

        return this.http.get<PoleManager>(Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT +  `/filterById/${idPoleManager}`, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    editWithHoldingType(id: number, optionalWithHoldingType: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let withHoldingType = this.toEnum(optionalWithHoldingType);
        let url = Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + `/update/withHoldingType/${id}/${withHoldingType}`;
        return this.http.patch<PoleManager>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    //Assignement of pole manager to one pole ! 
    updatePole(idPoleManager: number, idPole: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + `/update/pole/${idPoleManager}/${idPole}`;
        return this.http.patch(url, null, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    deletePole(idPoleManager: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + `/delete/pole/${idPoleManager}`;
        return this.http.patch(url, null,{
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    delete(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + `/delete/${id}`;
        return this.http.delete(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    updatePassword(currentPassword: string, newPassword: string, token: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.patch(Constants.APP_PORT + Constants.POLE_MANAGER_ENDPOINT + "/update/password", {
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
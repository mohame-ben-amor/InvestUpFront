import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pole } from "../models/pole";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class PoleService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + '/findAll';
        return this.http.get<Pole[]>(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    updatePoleManager(idPole: number, idPoleManager: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/update/poleManager/${idPole}/${idPoleManager}`;
        return this.http.patch<Pole>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    delete(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/delete/${id}`;
        return this.http.delete(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }
}

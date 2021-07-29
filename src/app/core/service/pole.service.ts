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

    filterById(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/filterById/${id}`;
        return this.http.get<Pole>(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    updatePolecapacity(id: number, capacity: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/update/capacity/${id}/${capacity}`;
        return this.http.patch<Pole>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });

    }
    
    updatePoledescription(id: number, description: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/update/description/${id}/${description}`;
        return this.http.patch<Pole>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });

    }

    updatePolename(id: number, name: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/update/name/${id}/${name}`;
        return this.http.patch<Pole>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    updatePolereserved(id: number, reserved: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.POLE_ENDPOINT + `/update/reserved/${id}/${reserved}`;
        return this.http.patch<Pole>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

}


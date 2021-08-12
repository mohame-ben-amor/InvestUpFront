import { UpperCasePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class InvestorService {
    constructor(private http: HttpClient) { }
    token: String;
    upper = new UpperCasePipe();

    editName(name: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.patch(Constants.APP_PORT + "user/edit", { name }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }
    editAdresse(adresse: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.patch(Constants.APP_PORT + "user/edit", { adresse }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editProfil(profil: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.patch(Constants.APP_PORT + "user/edit", { profil }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editSexe(sexe: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.patch(Constants.APP_PORT + "user/edit", { sexe }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    editBirthday(birthday: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];
        return this.http.patch(Constants.APP_PORT + "user/edit", { birthday }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

}
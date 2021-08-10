import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];

        return this.http.get<User[]>(Constants.APP_PORT + Constants.USER_ENDPOINT + "/findAll", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token

            })
        })
    }

    getUser(id: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["token"];

        return this.http.get<User>(Constants.APP_PORT + `user/getuser/${id}`, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token,
                "id": id.toString()
            })
        })
    }
}
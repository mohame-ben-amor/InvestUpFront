import { UpperCasePipe } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  tap } from "rxjs/operators";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient) { }
    token: String;
    upper = new UpperCasePipe();

    createUser(
        adress: string,
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        role: string,
        telNum: string,) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        //<User> c'est le type de retour de l'API
        //this.http.post<User>
        return this.http
            .post(Constants.APP_PORT + Constants.USER_ENDPOINT + "/create",
                {
                    adress, email, firstname, lastname, password, role, telNum
                },
                {
                    headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
                })
            .pipe(
                tap(user => {
                    //Tap taaml traitement aa reponse ama ma ghir ma tbadel el response 
                    //nestaamloha par exemple bch ntastiw hajet est ce que mawjoda fl response wella ! 
                    console.log("User service " + user);
                    //return user;
                }),
                /*
                catchError(errorRes => {
                    let errorMessage = "message par default"
                    if (!errorRes.error || !errorRes.error.error) { //hathi fl case kan el erro aando format manaarfohesh
                        return throwError(errorMessage)
                    }
                    switch (errorRes.error.error) {
                        case "Exist_email":
                            errorMessage = "customezed error ! ";
                            break;
                        case "sss":
                            errorMessage = "ssss";
                            break;
                    }
                    return throwError(errorMessage);
                })
                */


            );
    }

    createPole(name: string, description: string, capacity: number, reserved: number, poleManagerId: number) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.post(Constants.APP_PORT + Constants.POLE_ENDPOINT + "/create", {
            name, description, capacity, reserved, poleManagerId
        }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    updatePassword(currentPassword: string, newPassword: string, token: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        return this.http.patch(Constants.APP_PORT + Constants.ADMIN_ENDPOINT + "/update/password", {
            currentPassword, newPassword, token
        }, {
            headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
        })
    }

    upperCaseTransformer(value: string): string {
        return this.upper.transform(value);
    }

}
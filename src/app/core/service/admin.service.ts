import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "../models/user";
import { UserStatus } from "../models/userStatus";
import { WithHoldingStatus } from "../models/withHoldingStatus";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    constructor(private http: HttpClient) { }
    token: String;

    createUser(
        adress: string,
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        role: string,
        telNum: string,
        userStatus: UserStatus,
        withHoldingType: WithHoldingStatus) {

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        console.log("token from the service : " + this.token);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            'Authorization': 'Bearer ' + this.token,
        });

        //<User> c'est le type de retour de l'API
        //this.http.post<User>
        return this.http
            .post("http://localhost:8080/telework/api/user/create",
                {
                    adress, email, firstname, lastname, password, role, telNum, userStatus, withHoldingType
                },
                {
                    headers: new HttpHeaders().set("Authorization",'Bearer ' + this.token)
                })
            .pipe(
                tap(user => {
                    //Tap taaml traitement aa reponse ama ma ghir ma tbadel el response 
                    //nestaamloha par exemple bch ntastiw hajet est ce que mawjoda fl response wella ! 
                    console.log("User service ddd" + user);
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

    getAllAdmins(id: number) {
        return this.http.get<User>(Constants.APP_PORT + Constants.ADMIN_ENDPOINT + "/filterById/",
            {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + this.token,
                }),
                params : new HttpParams().set('id',id.toString())
            }
        ).pipe(
            map((admin) => {
                console.log(admin.id);
                const adminArray: User[] = [];
                adminArray.push(admin);
                return adminArray;
            })
        );
    }


}
import { UpperCasePipe } from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
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
    upper = new UpperCasePipe();

    createUser(
        adress: string,
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        role: string,
        telNum: string,
        userStatusParam: UserStatus,
        withHoldingTypeParam: WithHoldingStatus) {
        let userStatus = this.upperCaseTransformer(userStatusParam);
        let withHoldingType = this.upperCaseTransformer(withHoldingTypeParam);
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        //<User> c'est le type de retour de l'API
        //this.http.post<User>
        return this.http
            .post(Constants.APP_PORT + Constants.USER_ENDPOINT + "/create",
                {
                    adress, email, firstname, lastname, password, role, telNum, userStatus, withHoldingType
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

    getAll(id: number) {
        return this.http.get<User>(Constants.APP_PORT + Constants.ADMIN_ENDPOINT + "/filterById/",
            {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + this.token,
                }),
                params: new HttpParams().set('id', id.toString())
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

    upperCaseTransformer(value: string): string {
        return this.upper.transform(value);
    }

}
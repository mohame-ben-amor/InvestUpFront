import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Developer } from "../models/developer";
import { WithHoldingStatus } from "../models/withHoldingStatus";
import { Constants } from "../utils/constants";


@Injectable({
    providedIn: 'root',
})
export class DeveloperService {
    constructor(private http: HttpClient) { }
    token = "";

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];

        return this.http.get<Developer[]>(Constants.APP_PORT + Constants.DEVELOPER_ENDPOINT + "/findAll", {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    updateWithHoldingType(id: number, optionalWithHoldingType: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let withHoldingType=this.toEnum(optionalWithHoldingType);
        let url = Constants.APP_PORT + Constants.DEVELOPER_ENDPOINT + `/update/withHoldingType/${id}/${withHoldingType}`;
        return this.http.patch<Developer>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }

    delete(id:number){
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.DEVELOPER_ENDPOINT + `/delete/${id}`;
        return this.http.delete(url,{
            headers:new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        })
    }
    updateRole(id:number){
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.DEVELOPER_ENDPOINT + `/update/role/${id}`;
        return this.http.post<Developer>(url, null, {
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
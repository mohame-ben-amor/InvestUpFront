import { UpperCasePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class EntrepreneurService {
    constructor(private http: HttpClient) { }
    token: String;
    upper = new UpperCasePipe();

    

}
import { UpperCasePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Planification } from "../models/planification";
import { UserStatus } from "../models/userStatus";
import { Constants } from "../utils/constants";

@Injectable({
    providedIn: 'root',
})
export class HistoriqueService {
    constructor(private http: HttpClient) { }
    token: String;
    upper = new UpperCasePipe();

    createPlanification(
        deadline: string,
        developerId: number,
        poleManagerDecisionParam: string,
        projectManagerDecisionParam: string,
        startingDate: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let poleManagerDecision = this.toEnum(poleManagerDecisionParam);
        let projectManagerDecision = this.toEnum(projectManagerDecisionParam);
        return this.http
            .post(Constants.APP_PORT + Constants.HISTORIQUE_ENDPOINT + "/create",
                {
                    deadline, developerId, poleManagerDecision, projectManagerDecision, startingDate
                },
                {
                    headers: new HttpHeaders().set("Authorization", 'Bearer ' + this.token)
                }
            );
    }

    getAll() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.HISTORIQUE_ENDPOINT + '/findAll';
        return this.http.get<Planification[]>(url, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    updatePoleManagerDecision(idHistorique: number, idDeveloper: number, decision: string) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser["accessToken"];
        let url = Constants.APP_PORT + Constants.HISTORIQUE_ENDPOINT + `/update/decisionPoleManager/${idHistorique}/${idDeveloper}/${decision}`;
        return this.http.patch<Planification>(url, null, {
            headers: new HttpHeaders({
                "Authorization": 'Bearer ' + this.token
            })
        });
    }

    toEnum(value: string): string {
        switch (value) {
            case UserStatus.NOT_DEFINED:
                return "NOT_DEFINED";
            case UserStatus.PRESENTIAL:
                return "PRESENTIAL";
            case UserStatus.REMOTE:
                return "REMOTE";
        }
    }
}
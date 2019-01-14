import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Session } from "./models";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(public http: HttpClient, public authService: AuthService) {}

  getAll(path: string): any {
    return this.http.get(environment.API_ENDPOINT + path, {
      headers: { "x-access-token": this.authService.getToken() },
    });
  }
  getById(id: string): Observable<any> {
    return this.http.get(environment.API_ENDPOINT + `/session/${id}`, {
      headers: { "x-access-token": this.authService.getToken() },
    });
  }
}

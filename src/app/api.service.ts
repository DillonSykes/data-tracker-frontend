import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AuthService } from "./auth.service";

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
}

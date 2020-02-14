import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

import { Subitem } from "../states";

@Injectable()
export class SubitemService {
  private readonly URL_SUBITEM =
    "https://my-json-server.typicode.com/viniciussnunes/angular-ngrx-substates/subitem";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Subitem[]> {
    return this.http.get<Subitem[]>(this.URL_SUBITEM).pipe(delay(500));
  }
}

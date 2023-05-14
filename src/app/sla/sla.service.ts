import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user/user";
import {Sla} from "./Sla";

@Injectable({
  providedIn: 'root'
})
export class SlaService {
  slas: Sla[] = [];

  constructor(private http: HttpClient) { }

  public getSlas(url: string): Observable<Sla[]> {

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")

    return this.http.get<Sla[]>(url);
  }
  public DeleteSla(id:number): Observable<void> {

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")

    return this.http.delete<void>("http://localhost:8080/deleteSLA/"+id);
  }
  public editsla(mysla:Sla): Observable<Sla> {

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")

    return this.http.put<Sla>("http://localhost:8080/sla/updateSLA",mysla);
  }

  
  
}

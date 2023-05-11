import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Commande } from './commande';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  public getCommandeId(id : Number): Observable<Commande>{
    return this.http.get<Commande>("http://localhost:8080/Commande/showCommande"+id)
  }
  
  public getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>("http://localhost:8080/Commande/showCommandes");
}

}

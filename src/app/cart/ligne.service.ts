
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Cart } from './cart';
import { ligne } from './ligne';

@Injectable({
  providedIn: 'root'
})
export class LigneService {

  constructor(private http: HttpClient) { }


  


public getLigne(id: number): Observable<ligne[]> {
    return this.http.get<ligne[]>("http://localhost:8080/LigneDeCommande/showLigneDeCommande/" + id);
}

public AddLigne( id: number, ligne:ligne): Observable<Cart> {
  
  return this.http.post<Cart>('http://localhost:8080/ShoppingCart/'+id+'/addLigneShop', ligne);
}

public AddLi(idPanier: number, idProduit: number): Observable<ligne> {
  const url = "http://localhost:8080/LigneDeCommande/addLigneDeCommande/" + idPanier + "/" + idProduit;
  return this.http.post<ligne>(url, {}, { responseType: 'json' });
}


}
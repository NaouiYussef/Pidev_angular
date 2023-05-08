import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Cart } from './cart';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }


  
  public getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>('http://localhost:8080/ShoppingCart/showShop');
}

public AddCart( user: User): Observable<Cart> {
  console.log("user: ", user)
  return this.http.post<Cart>('http://localhost:8080/ShoppingCart/addCart', user);
}



}

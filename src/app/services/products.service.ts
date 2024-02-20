import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/products');
  }

  addProduct(addProductRequest: Product): Observable<Product> {
    addProductRequest.productId = '11000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/api/products', addProductRequest);
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/api/products/' + productId);
  }

  updateProduct(productId: string, updateProductRequest: Product): Observable<Product> {
    return this.http.put<Product>(this.baseApiUrl + '/api/products/' + productId,
    updateProductRequest);
  }
}

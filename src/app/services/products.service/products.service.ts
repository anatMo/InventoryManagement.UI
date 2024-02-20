import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/products');
  }

  addProduct(addProductRequest: Product): Observable<Product> {
    addProductRequest.productId = '11000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/products', addProductRequest);
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/products/' + productId);
  }

  updateProduct(productId: string, updateProductRequest: Product): Observable<Product> {
    return this.http.put<Product>(this.baseApiUrl + '/products/' + productId,
    updateProductRequest);
  }

  deleteProduct(productId: string): Observable<Product> {
    return this.http.delete<Product>(this.baseApiUrl + '/products/' + productId);
  }
}

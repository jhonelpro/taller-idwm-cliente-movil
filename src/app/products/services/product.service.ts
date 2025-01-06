import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { QueryParams } from '../interfaces/queryParams';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;
  private errors: string[] = [];

  async getProducts(IQueryParams: QueryParams): Promise<Product[]> {
    try{
      const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhc2FAYXNkYXNkLmNvbSIsImdpdmVuX25hbWUiOiJkYXNhQGFzZGFzZC5jb20iLCJuYW1laWQiOiJhMjlkNDMwYi1hZjg3LTRkMGYtOTE4Zi1iMTdkN2MzMmUwNTUiLCJqdGkiOiJkMDhmNzA3My1lMDUwLTQzMGUtOTlhYi0xODA1NzQ1ZjUyZDQiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTczNjEyMjM4MSwiZXhwIjoxNzM2MjA4NzgxLCJpYXQiOjE3MzYxMjIzODEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwIn0.3qHGg1P-4N0-zUWYf8ymRL9tE1Wa0LRAMJH9z11ThNdVEdji9orkloE94e2zPBiru78Z8ES_9kO_AcEUpNKYFQ';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      let QueryParams = new HttpParams();
      if(IQueryParams.sortByPrice) QueryParams = QueryParams.set('sortByPrice', IQueryParams.sortByPrice);

      if(IQueryParams.IsDescending !== null && IQueryParams.IsDescending !== undefined) 
        {
          QueryParams = QueryParams.set('IsDescending', IQueryParams.IsDescending.toString());
      }
      if(IQueryParams.pageNumber) QueryParams = QueryParams.set('pageNumber', IQueryParams.pageNumber.toString());
      if(IQueryParams.pageSize) QueryParams = QueryParams.set('pageSize', IQueryParams.pageSize.toString());
      if(IQueryParams.productType) QueryParams = QueryParams.set('productType', IQueryParams.productType);
      
      const response = await firstValueFrom(this.http.get<Product[]>(`${this.baseUrl}/getProductsClient`, { params: QueryParams, headers: headers }));
      return response;
    
  } catch (error) {
      console.log("Error en el servicio de productos", error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
  
}

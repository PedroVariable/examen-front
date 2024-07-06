import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Ejemplo de método para obtener productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos`);
  }

  // Otros métodos para llamar a tus APIs
  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/productos/${id}`);
  }

  createProducto(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/productos`, producto);
  }

  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/productos/${id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/productos/${id}`);
  }
}

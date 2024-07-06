import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = `${environment.apiUrl}/Productos`;

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  searchProductos(nombre: string, categoriaId: number): Observable<Producto[]> {
    return this.getProductos().pipe(
      map(productos => productos.filter(producto =>
        (nombre ? producto.nombre.toLowerCase().includes(nombre.toLowerCase()) : true) &&
        (categoriaId ? producto.categoriaId === categoriaId : true)
      ))
    );
  }
}

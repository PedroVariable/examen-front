import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from '../interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  searchNombre: string = '';
  searchCategoriaId: number = 0;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchNombre = params['nombre'] || '';
      this.searchCategoriaId = +params['categoriaId'] || 0;
      this.loadProductos();
    });
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.filtrarProductos();
    });
  }

  filtrarProductos(): void {
    this.productosFiltrados = this.productos.filter(producto =>
      (this.searchNombre ? producto.nombre.toLowerCase().includes(this.searchNombre.toLowerCase()) : true) &&
      (this.searchCategoriaId ? producto.categoriaId === this.searchCategoriaId : true)
    );
  }

  onSearch(): void {
    this.filtrarProductos();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        nombre: this.searchNombre,
        categoriaId: this.searchCategoriaId
      },
      queryParamsHandling: 'merge'
    });
  }

  onNombreInputChange(): void {
    this.filtrarProductos();
  }
}

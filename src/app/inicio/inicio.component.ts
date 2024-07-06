import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicios/categoria.service';
import { ProductoService } from '../productos/producto.service';
import { Categoria } from '../interfaces/categoria';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  categorias: Categoria[] = [];
  productosDestacados: Producto[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  
}

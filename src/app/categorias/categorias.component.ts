import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../servicios/categoria.service';
import { Categoria } from '../interfaces/categoria';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
}

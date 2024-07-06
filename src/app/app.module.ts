import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { routes } from './app.routes'; // Importar las rutas

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriasComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

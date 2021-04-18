import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompraComponent } from './components/compra/compra.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

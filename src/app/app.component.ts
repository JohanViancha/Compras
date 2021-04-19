import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  productos:Producto[];
  compras:Producto[];

  constructor(){
    this.productos = [];
    this.compras = [];
  }
  ngOnInit(): void {
    
  }

  registrarProducto(producto){
    this.productos.push(producto);
  }

  registrarCompra(producto){
    this.compras.push(this.productos[producto]);
    this.productos.splice(producto,1);
  
  }

  eliminarCompra(producto){

    console.log(this.compras);
    let index = this.compras.findIndex((element,index) =>element["nombre"] == producto.nombre );

    this.compras.splice(index,1);
    this.productos.push(producto);
    

  }

  
}

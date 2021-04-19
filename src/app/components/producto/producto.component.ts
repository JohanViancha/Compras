import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Output() productoNuevo = new EventEmitter<Producto>();
  
  producto: Producto;

  constructor() {
    this.producto = new Producto(null,null,null);
    this.productoNuevo = new EventEmitter();
   }

  ngOnInit(): void {
    
  }

  registraProducto(){
    this.productoNuevo.emit(this.producto);
    this.producto = new Producto(null,null,null);
  }

 

}

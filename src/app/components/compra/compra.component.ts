import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  @Input() productos: Producto;
  @Input() boton: string;
  @Output() compraEimina =new EventEmitter<Producto>();
  @Output() Nuevacompra = new EventEmitter<number>();

  constructor() { 
    this.Nuevacompra = new EventEmitter();
  }

  ngOnInit(): void {

  }

  comprarProducto(producto){
    this.Nuevacompra.emit(producto);

  }

  eliminarProducto(producto){
    this.compraEimina.emit(producto);
  }

}

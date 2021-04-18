import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  nombre: string;
  cantidad: number;
  departamento:string;

  productos:Producto[];

  ngOnInit(): void {
    this.nombre = "";
    this.cantidad = 1;
    this.departamento = "Santander";
    this.productos = [];
  }

  registraProducto(){

    let pro = new Producto(this.nombre, this.cantidad, this.departamento);

    this.productos.push(pro);

    console.log(this.productos);
  }

}

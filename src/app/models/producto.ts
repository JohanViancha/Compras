export class Producto{

    nombre:string;
    cantidad:number;
    categoria:string;
    tipo:boolean;


    constructor(nombre:string, cantidad:number, categoria:string){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

}
export class Producto{

    private nombre:string;
    private cantidad:number;
    private departamento:string;

    constructor(nombre:string, cantidad:number, departamento:string){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.departamento = departamento;
    }
}
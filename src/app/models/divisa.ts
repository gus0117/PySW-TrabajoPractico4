export class Divisa {
    valor:number;
    origen:string;
    destino:string;
    resultado:string;

    constructor(valor?:number, origen?:string, destino?:string, resultado?:string){
        this.valor = valor;
        this.origen = origen;
        this.destino = destino;
        this.resultado = resultado;
    }
}

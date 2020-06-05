import { Component, OnInit } from '@angular/core';
import { Divisa } from '../../models/divisa';
import { DivisaPostService } from '../../services/divisa-post.service';
import { DivisaGetService } from '../../services/divisa-get.service';
@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {

  valor: number;
  origen: string;
  destino: string;
  cambio: string;
  tablaDivisas: Array<Divisa>;
  
  constructor(private divisaPostService: DivisaPostService,
              private divisaGetService: DivisaGetService) { 
    //this.inicializarTablaDivisas();
  }

  ngOnInit(): void {
  }

  public cambiarMoneda(){
    this.divisaPostService.getCambiarMoneda(
      this.valor, this.origen, this.destino).subscribe(
        (result) => {
          this.cambio = "$ "+result["result"];
        },
        error => { alert("error en la petición"); }
    )
  }

  private inicializarTablaDivisas(){
    this.tablaDivisas = new Array<Divisa>();
    this.tablaDivisas = [
      {valor:1, origen:"USD",destino:"ARS", resultado:""}
    ];
    this.tablaDivisas.forEach(d => {
      d.resultado = this.obtenerCambio(d.valor, d.origen, d.destino);
    });
  }

  private obtenerCambio(valor:number, origen:string, destino:string): string{
    let resultado:string;
    this.divisaGetService.getMonedaConvertida(valor, origen, destino).subscribe(
      (result) => {
        resultado = result;
      },
      error => { alert("Error en la peticion, tabla");}
    );
    console.log("Resultado: "+ resultado);
    return resultado;
  }
}

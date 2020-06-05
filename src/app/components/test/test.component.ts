import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Divisa } from '../../models/divisa';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  valor:number;
  origen:string;
  destino:string;
  cambio:string;
  divisa:Divisa;

  constructor(private noticia_servicio:TestService) {
    this.divisa = new Divisa();
   }
  
  ngOnInit(): void {
  }

  public cambiarMoneda()
  {
    this.noticia_servicio.getCambiarMoneda(this.valor,this.origen,this.destino).subscribe( 
      (result) => {         
         
         this.cambio = result["result"];
         console.log("CAMBIO: " + this.cambio);
        }, 
        error => { alert("Error en la petición"); } );
        
   }
   
}

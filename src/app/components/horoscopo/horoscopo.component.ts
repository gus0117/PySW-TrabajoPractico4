import { Component, OnInit } from '@angular/core';
import { Signo } from '../../models/signo';
import { SignoService } from '../../services/signo.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  signo: Signo;
  signos: Array<Signo>;

  signoElegido:string;
  fechaInicio:string;
  fechaFin:string;
  resultadoHoroscopo:string;

  constructor(private signoService: SignoService, private datePipe: DatePipe) {
    this.cargarSignos();
    //this.consultarHoroscopo();
  }

  ngOnInit(): void {
  }

  formatearFecha(fecha:Date):string{
    return this.datePipe.transform(fecha, 'yyyy-MM-dd');
  }

  public cargarSignos(){
    this.signoService.getSignos().subscribe(
      (result) =>{
        this.signos = new Array<Signo>();
        result.forEach(element => {
          this.signo = new Signo();
          Object.assign(this.signo, element);
          this.signos.push(this.signo);
        });
        console.log(this.signos);
      },
      error => { alert("Error en la peticion Signos"); }
    );
  }

  public test(signo:Signo){
    this.signoElegido = signo.name;
    this.fechaInicio = signo.start_date;
    this.fechaFin = signo.end_date;
    this.consultarHoroscopo()
  }

  public consultarHoroscopo(){
    let fechaHoy = new Date();
    let fechaFormateada = this.formatearFecha(fechaHoy);
    this.signoService.getHoroscopo(this.signoElegido, "2020-06-04").subscribe(
      (result) =>{
        this.resultadoHoroscopo = result['result']['description'];
      },
      error => { alert("Error en la peticion Signos"); }
    );
  }

}

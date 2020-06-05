import { Component, OnInit } from '@angular/core';
import { Estadistica } from '../../models/estadistica';
import { EstadisticaService } from '../../services/estadistica.service';
import { element } from 'protractor';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  estadistica:Estadistica;
  listaPaises: Array<Estadistica>;

  mundo:Estadistica;
  argentina:Estadistica;
  usa:Estadistica;
  spain:Estadistica;
  italy:Estadistica;
  germany:Estadistica;

  //FORMULARIO
  pais:string;
  casosConfirmados:boolean;
  curados:boolean;
  fallecidos:boolean;
  resultadoObtenido:boolean = false;
  resultado:Estadistica;

  constructor(private estadisticaService: EstadisticaService) {
    this.inicializar();
    this.obtenerListaPaises();
  }

  ngOnInit(): void {
  }

  inicializar(){
    this.mundo = new Estadistica();
    this.argentina = new Estadistica();
    this.usa = new Estadistica();
    this.spain = new Estadistica();
    this.italy = new Estadistica();
    this.germany = new Estadistica();
    this.resultado = new Estadistica();
  }

  private obtenerListaPaises(){
    this.estadisticaService.getAllEstadisticas().subscribe(
      (result) => {        
        this.listaPaises = new Array<Estadistica>();
        result.forEach(element => {
          this.estadistica = new Estadistica(
            element['Active Cases_text'],
            element['Country_text'],
            element['Last Update'],
            element['New Cases_text'],
            element['New Deaths_text'],
            element['Total Cases_text'],
            element['Total Deaths_text'],
            element['Total Recovered_text']
          );
          this.listaPaises.push(this.estadistica);
        });
        this.cargarPaises();
      },
      error => { alert ("Error en la peticion estadistica");}
      );
  }

  cargarPaises(){
    if(this.listaPaises != null){
      this.listaPaises.forEach(element =>{
        if(element.country_text == "World"){ this.mundo = element;}
        if(element.country_text == "Argentina"){ this.argentina = element;}
        if(element.country_text == "USA"){ this.usa = element; }
        if(element.country_text == "Spain"){ this.spain = element; }
        if(element.country_text == "Italy"){ this.italy = element; }
        if(element.country_text == "Germany"){ this.germany = element; }
      })
    }
  }

  public consultarPais(){
   this.estadisticaService.getEstaditica(this.pais).subscribe(
     (result) => {
       this.resultado = new Estadistica(
        result['Active Cases_text'],
        result['Country_text'],
        result['Last Update'],
        result['New Cases_text'],
        result['New Deaths_text'],
        result['Total Cases_text'],
        result['Total Deaths_text'],
        result['Total Recovered_text']
       );
        this.resultadoObtenido = true;
     },
     error => { alert ("Error en la peticion estadistica");}
     );
  }
}

import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiasService } from '../../services/noticias.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia: Noticia;
  noticias: Array<Noticia>;
  constructor(private notiService: NoticiasService) { 
    this.cargarNoticias();
  }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.notiService.getNoticias("soccer").subscribe(
      (result) =>{
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      error => { alert("Error en la peticion noticias"); }
    );
  }
}

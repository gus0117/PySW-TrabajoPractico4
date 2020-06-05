import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisasComponent } from './components/divisas/divisas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

const routes: Routes = [
  {path: 'divisas', component: DivisasComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'horoscopos', component: HoroscopoComponent},
  {path: 'estadisticas', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

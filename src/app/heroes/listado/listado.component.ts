import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['mi pichila','la pochola','paparucha','pipiricha'];
  heroesborrados: string[] = [];
  
  borrarHeroe(){
    const hborrado = this.heroes.shift();
    if ((hborrado || '') != '')
      this.heroesborrados.push(hborrado || '');
  }

}

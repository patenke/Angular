import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
    <h3>la base es: {{ base }}</h3>
    <button (click)="acumular(1)"> +1 </button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)"> -1 </button>
    
    
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    public base: number = 5;
    acumular(valor:number) {
    if (valor < 0)
      this.numero -= this.base;
    else
      this.numero += this.base;
    }
}
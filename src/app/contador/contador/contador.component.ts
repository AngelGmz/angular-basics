import { Component } from '@angular/core'; 

@Component({
    selector: "app-contador",
    template: ` 
        <h1> {{ title }} </h1>
        <h4>La base es: <strong> {{ base }} </strong></h4>
        
        <button (click)="acumular(base)" > + {{ base }} </button>
        
        <span> {{ numero }} </span>
        
        <button (click)="acumular(-base)" > - {{ base }} </button>
        `
})
export class Contador {
    title: string = 'Contador app';
    numero: number = 0;
  
    base: number = 5;
  
    acumular(valor :number) {
      this.numero += valor;
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroeBorrado : string = '';

  heroes: string[] = ['Spiderman', 'Ironam', 'Hulk', 'Thor'];

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}

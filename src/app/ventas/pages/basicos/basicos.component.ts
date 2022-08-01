import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent  {

  nombreUpper: string = 'GIOvannI MArtINez'
  nombreLower: string = 'GIOvannI MArtINez'
  nombreCompleto: string = 'GIOvannI MArtINez'

  fecha: Date = new Date();

}

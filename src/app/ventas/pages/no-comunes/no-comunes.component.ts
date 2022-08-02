import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',

})
export class NoComunesComponent  {

  //i18nSlect
nombre: string = 'Giovanni';
genero: string = 'masculino';

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

//i18nPlural
  clientes: string[]= ['Maria', 'Pedro', 'Juan', 'Camilo', 'Lidia'];

  clientesMapa = {
    '=0': 'No tenemos ningun clienete esperando.',
    '=1': 'Tenemos a 1 cliente en espera.',
    'other': 'Tenemos a # clientes esperando'
  }

cambiarCliente(nombre: string, genero: string) {
this.nombre = nombre
this.genero = genero
}
eliminarCliente(){
  this.clientes.pop()

}

//KeyValue Pipe
persona = {
  nombre: 'Giovanni',
  edad: 36,
  direccion: 'Barcelona, España'
}


//Json Pipe

heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Acuaman',
    vuela: false
  },
]


//Async Pipe

miObservable = interval(2000);

valorPromesa = new Promise( (resolve, reject) =>{
  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 3500);
});
}

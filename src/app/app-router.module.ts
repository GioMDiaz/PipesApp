import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,

  },
  {
    path: 'numeros',
    component: NumerosComponent,

  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,

  },
  {
    path: 'ordenar',
    component: OrdenarComponent,

  },
  {
    path: '**',
    redirectTo: ''
  }



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
})
export class AppRouterModule { }

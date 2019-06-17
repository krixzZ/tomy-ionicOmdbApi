import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'peliculas',
        children: [
          {
            path: '',
            loadChildren: '../peliculas/peliculas.module#PeliculasPageModule'
          },
          {
            path: ':id',
            loadChildren: '../pelicula-detalle/pelicula-detalle.module#PeliculaDetallePageModule'
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: '../contacto/contacto.module#ContactoPageModule'
          }
        ]
      },
      {
        path: 'tiempo',
        children: [
          {
            path: '',
            loadChildren: '../tiempo/tiempo.module#TiempoPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRouterModule { }

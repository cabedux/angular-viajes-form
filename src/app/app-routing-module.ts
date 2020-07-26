import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajesEditComponent } from './components/viajes-edit/viajes-edit.component';



const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'viajes'},
    {path: 'viajes', component: ViajesComponent},
    {path: 'viajes-edit/:id', component: ViajesEditComponent},
    {path: 'viajes-edit', component: ViajesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


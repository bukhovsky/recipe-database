import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { AddComponent } from './add/add/add.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

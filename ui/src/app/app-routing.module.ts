import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KlingosListComponent } from './components/klingos-list/klingos-list.component';
import { KlingosComponent } from './components/klingos/klingos.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"home", component:KlingosComponent},
  {path:"list", component:KlingosListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

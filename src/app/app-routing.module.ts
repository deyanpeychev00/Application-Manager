import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {CreateApplicationComponent} from './components/create-application/create-application.component';
import {UpdateApplicationComponent} from './components/update-application/update-application.component';


const routes: Routes = [
  {path: '', redirectTo: 'applications', pathMatch: 'full'},
  {path: 'applications', component: HomepageComponent},
  {path: 'create', component: CreateApplicationComponent},
  {path: 'update/:id', component: UpdateApplicationComponent},
  {path: '**', redirectTo: 'applications'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

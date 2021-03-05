import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './wrapper/home/home.component';
import { MessagesComponent } from './wrapper/messages/messages.component';
import { ProjectFormComponent } from './wrapper/project-form/project-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'fsfsdf'} },
  {path: 'messages', component: MessagesComponent},
  {path: 'project', component: ProjectFormComponent, data: { method: 'POST'}},
  {path: 'project/:id', component: ProjectFormComponent, data: { method: 'PUT'} },


  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

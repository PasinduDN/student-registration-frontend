import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentListComponent } from './pages/student-list/student-list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"list",
    component:StudentListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

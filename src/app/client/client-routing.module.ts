import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import {RepvisitComponent} from './repvisit/repvisit.component';
export const routes: Routes = [
  // { path: '', redirectTo: 'client/home', pathMatch: 'full' }, //กำหมด Path ให้วิง ไปที่ client/Home
  {
    path: 'client',   // กำหมด Path ในการทำงาน
    component: LayoutComponent, //ดึง layrep.component.html มาแสดง 
    children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: HomeComponent },
                { path: 'revisit', component: RepvisitComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
  
 }

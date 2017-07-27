import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodayiptComponent } from './todayipt/todayipt.component';
import { ReprcptComponent } from './reprcpt/reprcpt.component';
import { RepmouthComponent } from './repmouth/repmouth.component';
import { ReptodayComponent } from './reptoday/reptoday.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'todayipt', component: TodayiptComponent},
    {path: 'reprcpt', component: ReprcptComponent},
    {path: 'repmouth', component: RepmouthComponent},
    {path: 'reptoday', component: ReptodayComponent}
    //กระตุก
    //อธิบาย เราจะส่งไปกี่ตัว เราก็ใส่ /:variable1/:variable2 แบบนี้ไปเรื่อยๆ  อันนี้ ตอนแนบไปให้ route แนบตัวแปรไปด้วย
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

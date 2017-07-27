import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from './login/login.component';
import { TodayiptComponent } from './todayipt/todayipt.component';
import { ReprcptComponent } from './reprcpt/reprcpt.component';
import { RepmouthComponent } from './repmouth/repmouth.component';
import { ReptodayComponent } from './reptoday/reptoday.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        TodayiptComponent,
        ReprcptComponent,
        RepmouthComponent,
        ReptodayComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [
    { provide: 'API_URL', useValue: 'http://192.168.11.25:3200' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

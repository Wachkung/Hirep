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

//import new modules you create
import { ClientModule} from './client/client.module';
import { LayrepComponent } from './layrep/layrep.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        TodayiptComponent,
        ReprcptComponent,
        RepmouthComponent,
        ReptodayComponent,
        LayrepComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClientModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3200' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NewSessionComponent } from './new-session/new-session.component';
import { UiModule } from './ui/ui.module';
import { NavigateService } from './navigate.service';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    UiModule
  ],
  providers: [ NavigateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

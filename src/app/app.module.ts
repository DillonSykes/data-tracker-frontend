import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {NewSessionComponent} from './new-session/new-session.component';
import {UiModule} from './ui/ui.module';
import {NavigateService} from './navigate.service';
import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';
import {CheckBoxComponent} from './check-box/check-box.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {ChildrenComponent} from './children/children.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Person} from './models/person';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewSessionComponent,
    CheckBoxComponent,
    PersonFormComponent,
    ChildrenComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    NgbModule.forRoot(),
  ],
  providers: [ NavigateService, AuthService, Person],
  bootstrap: [AppComponent]
})
export class AppModule { }

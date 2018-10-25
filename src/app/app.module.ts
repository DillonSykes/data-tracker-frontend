import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {NewSessionComponent} from './components/new-session/new-session.component';
import {UiModule} from './ui/ui.module';
import {NavigateService} from './navigate.service';
import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';
import {CheckBoxComponent} from './components/check-box/check-box.component';
import {PersonFormComponent} from './components/person-form/person-form.component';
import {ChildrenComponent} from './components/children/children.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Person} from './models/person';
import { GrandchildrenComponent } from './components/grandchildren/grandchildren.component';
import { CareTakerComponent } from './components/care-taker/care-taker.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewSessionComponent,
    CheckBoxComponent,
    PersonFormComponent,
    ChildrenComponent,
    GrandchildrenComponent,
    CareTakerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [ NavigateService, AuthService, Person],
  bootstrap: [AppComponent]
})
export class AppModule { }

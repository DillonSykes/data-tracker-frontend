import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { NewSessionComponent } from "./components/new-session/new-session.component";
import { UiModule } from "./ui/ui.module";
import { NavigateService } from "./navigate.service";
import { AuthService } from "./auth.service";
import { CommonModule } from "@angular/common";
import { CheckBoxComponent } from "./components/check-box/check-box.component";
import { PersonFormComponent } from "./components/person-form/person-form.component";
import { ChildrenComponent } from "./components/children/children.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Person } from "./models";
import { GrandchildrenComponent } from "./components/grandchildren/grandchildren.component";
import { CareTakerComponent } from "./components/care-taker/care-taker.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";
import { reducer } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CollegePlansComponent } from "./components/college-plans/college-plans.component";
import { LiquidAssetsComponent } from "./components/liquid-assets/liquid-assets.component";
import { ImportantGoalsComponent } from "./components/important-goals/important-goals.component";
import { DwellingComponent } from "./components/dwelling/dwelling.component";
import { FamilyComponent } from "./components/family/family.component";
import { FamilyParentsComponent } from "./components/family-parents/family-parents.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { ListviewComponent } from "./components/listview/listview.component";
import { DisplayItemComponent } from "./components/display-item/display-item.component";
import { ClientInfoComponent } from "./components/client-info/client-info.component";
import { TitleComponent } from "./client-view/info-components/title/title.component";
import { PersonViewComponent } from "./client-view/person-view";
import { InfoComponent } from "./client-view/info-components/info/info.component";
import { ClientViewComponent } from "./client-view";
import { ChildrenViewComponent } from "./client-view/children-view";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { InfoNavBarComponent } from "./client-view/info-nav-bar/info-nav-bar.component";
import { HomeViewComponent } from "./client-view/home-view/home-view.component";
import { RentalViewComponent } from "./client-view/rental-view/rental-view.component";
import { GoalsViewComponent } from "./client-view/goals-view/goals-view.component";

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
    CollegePlansComponent,
    LiquidAssetsComponent,
    ImportantGoalsComponent,
    DwellingComponent,
    FamilyComponent,
    FamilyParentsComponent,
    ClientsComponent,
    ListviewComponent,
    DisplayItemComponent,
    ClientInfoComponent,
    TitleComponent,
    PersonViewComponent,
    InfoComponent,
    ClientViewComponent,
    ChildrenViewComponent,
    InfoNavBarComponent,
    HomeViewComponent,
    RentalViewComponent,
    GoalsViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    StoreModule.forRoot({ session: reducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [NavigateService, AuthService, Person],
  bootstrap: [AppComponent],
})
export class AppModule {}

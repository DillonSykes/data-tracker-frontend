import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./auth.guard";
import { NewSessionComponent } from "./components/new-session/new-session.component";
import { ChildrenComponent } from "./components/children/children.component";
import { GrandchildrenComponent } from "./components/grandchildren/grandchildren.component";
import { CareTakerComponent } from "./components/care-taker/care-taker.component";
import { CollegePlansComponent } from "./components/college-plans/college-plans.component";
import { LiquidAssetsComponent } from "./components/liquid-assets/liquid-assets.component";
import { ImportantGoalsComponent } from "./components/important-goals/important-goals.component";
import { DwellingComponent } from "./components/dwelling/dwelling.component";
import { FamilyComponent } from "./components/family/family.component";
import { ClientsComponent } from "./components/clients/clients.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: "new-session", component: NewSessionComponent, canActivate: [AuthGuard]},
  { path: "children", component: ChildrenComponent, canActivate: [AuthGuard]},
  { path: "grandchildren", component: GrandchildrenComponent, canActivate: [AuthGuard]},
  { path: "caretaker", component: CareTakerComponent, canActivate: [AuthGuard]},
  { path: "college-plans", component: CollegePlansComponent, canActivate: [AuthGuard]},
  { path: "liquid-assets", component: LiquidAssetsComponent, canActivate: [AuthGuard]},
  { path: "important-goals", component: ImportantGoalsComponent, canActivate: [AuthGuard]},
  { path: "dwelling", component: DwellingComponent, canActivate: [AuthGuard]},
  { path: "family", component: FamilyComponent, canActivate: [AuthGuard]},
  { path: "clients", component: ClientsComponent, canActivate: [AuthGuard]}


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

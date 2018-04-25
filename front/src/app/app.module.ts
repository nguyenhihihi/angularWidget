import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
// import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
// import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // DashboardComponent,
    // DashboardHeaderComponent,
    // DashboardTitleComponent,
    // NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

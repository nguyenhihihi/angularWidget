import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule, JsonpModule } from '@angular/http';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardTitleComponent} from './dashboard-title/dashboard-title.component';
import {WidgetDatabaseComponent} from './widget-database/widget-database.component';
import {WidgetChartComponent} from './widget-chart/widget-chart.component';
import {WidgetComponent} from './widget/widget.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetTitleComponent } from './widget-title/widget-title.component';
import { WidgetIconComponent } from './widget-icon/widget-icon.component';
import { WidgetEdittingComponent } from './widget-editting/widget-editting.component';
import { WidgetTypeComponent } from './widget-type/widget-type.component';
import { WidgetTypeEditDatabaseComponent } from './widget-type-edit-database/widget-type-edit-database.component';
import { WidgetTypeEditChartComponent } from './widget-type-edit-chart/widget-type-edit-chart.component';

import {AuthGuardService as AuthGuard} from './auth-guard.service';

const routesConfig : Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig), CommonModule, FormsModule, NgxPaginationModule, HttpModule, JsonpModule ],
    declarations: [
        LoginComponent,
        DashboardComponent,
        NotfoundComponent,
        DashboardHeaderComponent,
        DashboardTitleComponent,
        WidgetDatabaseComponent,
        WidgetChartComponent,
        WidgetComponent,
        WidgetHeaderComponent,
        WidgetTitleComponent,
        WidgetIconComponent,
        WidgetEdittingComponent,
        WidgetTypeComponent,
        WidgetTypeEditDatabaseComponent,
        WidgetTypeEditChartComponent
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule{
}
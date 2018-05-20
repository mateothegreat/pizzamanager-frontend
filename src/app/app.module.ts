import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSidebarLeftComponent } from './app-sidebar-left/app-sidebar-left.component';
import { AppPageHeaderComponent } from './app-page-header/app-page-header.component';
import { AppPageHeaderService } from './app-page-header/app-page-header.service';
import { AppSidebarLeftService } from './app-sidebar-left/app-sidebar-left.service';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SettingsUsersComponent } from './settings-users/settings-users.component';
import { AutofocusDirective } from './shared/lib/AutofocusDirective';
import { DataTableComponent } from './shared/lib/DataTableComponent';
import { SessionService } from './shared/lib/SessionService';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgProgressModule } from 'ngx-progressbar';
import { ToastrModule } from 'ngx-toastr';
import { SettingsUsersCreateComponent } from './settings-users-create/settings-users-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsUsersManageComponent } from './settings-users-manage/settings-users-manage.component';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AppFormButtonsComponent } from './app-form-buttons/app-form-buttons.component';
import { MaterialModule } from './shared/MaterialModule';
import { AppCardComponent } from './app-card/app-card.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OrdersComponent } from './orders/orders.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { PizzasCreateComponent } from './pizzas-create/pizzas-create.component';
import { PizzasService } from './pizzas/pizzas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

    declarations: [

        AutofocusDirective,
        DataTableComponent,

        AppComponent,
        AppSidebarLeftComponent,
        AppPageHeaderComponent,
        SettingsComponent,
        SettingsUsersComponent,
        SettingsUsersCreateComponent,
        SettingsUsersManageComponent,
        HomeComponent,
        HomeDashboardComponent,
        AppFormButtonsComponent,
        AppCardComponent,
        OrdersComponent,
        PizzasComponent,
        OrdersCreateComponent,
        PizzasCreateComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxChartsModule,
        NgxDatatableModule,
        NgProgressModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true
        }),

        RouterModule.forRoot([{

            path: 'home',
            component: HomeComponent

        }, {

            path: 'orders',
            component: OrdersComponent

        }, {

            path: 'orders/create',
            component: OrdersCreateComponent

        }, {

            path: 'pizzas',
            component: PizzasComponent

        }, {

            path: 'pizzas/create',
            component: PizzasCreateComponent

        }, {

            path: 'settings',
            component: SettingsComponent

        }, {

            path: 'settings/users',
            component: SettingsUsersComponent

        }, {

            path: 'settings/users/create',
            component: SettingsUsersCreateComponent

        }, {

            path: 'settings/users/:id',
            component: SettingsUsersManageComponent

        }, {

            path: '',
            pathMatch: 'full',
            redirectTo: 'home'

        }])

    ],

    providers: [

        AppSidebarLeftService,
        AppPageHeaderService,

        PizzasService,
        SessionService

    ],

    bootstrap: [AppComponent]

})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { HeaderComponent } from './Components/header/header.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { httpInterceptorProviders } from './Interceptors/allInterceptors';
import { ListProductComponent } from './Components/Product/list-product/list-product.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListProducerComponent } from './Components/Producer/list-producer/list-producer.component';
import { AddProducerComponent } from './Components/Producer/add-producer/add-producer.component';
import { RegisterComponent } from './Components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    MainMenuComponent,
    HeaderComponent,
    AuthLayoutComponent,
    ListProductComponent,
    AddProductComponent,
    ListProducerComponent,
    AddProducerComponent,
    RegisterComponent,
    ConfirmDialogComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    HttpClientModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NbDialogModule.forRoot(),
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

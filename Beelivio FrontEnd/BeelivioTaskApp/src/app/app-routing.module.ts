import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AddProducerComponent } from './Components/Producer/add-producer/add-producer.component';
import { ListProducerComponent } from './Components/Producer/list-producer/list-producer.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { ListProductComponent } from './Components/Product/list-product/list-product.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Guards/auth-guard.service';

const routes: Routes = [
  { path: "Auth", component:AuthLayoutComponent,
    children:[{path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}]
  },
  { path: '', component: MainLayoutComponent,
  canActivate:[AuthGuard],
    children:[{path:"listProduct", component:ListProductComponent},
    {path:"addProduct", component:AddProductComponent},
    {path:"editProduct/:id", component:AddProductComponent},
    {path:"listProducer", component:ListProducerComponent},
    {path:"addProducer", component:AddProducerComponent},
    {path:"editProducer/:id",component:AddProducerComponent}
  ]
  },
  { path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

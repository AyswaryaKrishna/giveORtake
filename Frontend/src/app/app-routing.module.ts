import { NgModule } from '@angular/core';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { CarsComponent } from './pages/forms/cars/cars.component';
import { BikesComponent } from './pages/forms/bikes/bikes.component';
import { MobilesComponent } from './pages/forms/mobiles/mobiles.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MyadsComponent } from './pages/myads/myads.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatreqComponent } from './pages/chatreq/chatreq.component';
import { LaptopsComponent } from './pages/forms/laptops/laptops.component';
import { BooksComponent } from './pages/forms/books/books.component';
import { SearchComponent } from './pages/search/search.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';



const routes: Routes = [

{path:'',component:MainComponent} ,
// {path:'register',component:RegisterComponent},

    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'',canActivate:[AuthGuard],component:MainComponent},
    {path:'cars',canActivate:[AuthGuard],component:CarsComponent},
    {path:'bikes',canActivate:[AuthGuard],component:BikesComponent},
    {path:'mobiles',canActivate:[AuthGuard],component:MobilesComponent},
    {path:'preview/:pid',canActivate:[AuthGuard],component:PreviewComponent},
    {path:'myads',canActivate:[AuthGuard],component:MyadsComponent},
    {path:'profile',canActivate:[AuthGuard],component:ProfileComponent},
    {path:'chat/:email',canActivate:[AuthGuard],component:ChatComponent},
    {path:'chatreq',canActivate:[AuthGuard],component:ChatreqComponent},
    {path:'laptops',canActivate:[AuthGuard],component:LaptopsComponent},
    {path:'books',canActivate:[AuthGuard],component:BooksComponent},
    {path:'search',canActivate:[AuthGuard],component:SearchComponent},
    {path:'signin',component:SigninComponent},

{path:'nav',component:NavbarComponent,
 children:[
    {path:'category',canActivate:[AdminGuard],component:CategoryComponent},
    {path:'addCategory',canActivate:[AdminGuard],component:AddcategoryComponent},
    {path:'dashboard',canActivate:[AdminGuard],component:DashboardComponent},




]},
// }

// {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

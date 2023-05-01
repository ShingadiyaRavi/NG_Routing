import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { DataLoadResolver } from './guards/data-load.resolver';
import { UserGuard } from './guards/user.guard';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [

  // Resolve is used for the waiting for the data 100% get then load the component
  {path:'home',component:HomeComponent,resolve:{result:DataLoadResolver}},

  // patchMatch:'full' means This is used for the redirects and match full path ...
  {path:'', redirectTo:'home', pathMatch:'full'},

  {
    path:'about',component:AboutComponent,

    // This is used for the if admin give permission to child then it will work...
    canActivateChild:[AdminGuard],

    // This is used for the child routing it will work with the sub routes...main routes is about then sub routes we can used.
    children:[
      {path:'company',title: 'About Company',component:AboutCompanyComponent},
      {path:'us',component:AboutUsComponent},
    ]
  },

  // This is used for the canActivated Routes...if user is Authentic then they can view and access this routes otherwise not.
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},

  // This is used for the canDeactive...
  {path:'userlist',component:UsersComponent,canDeactivate:[UserGuard]},


  // This is used for the dynamic routing and we pass the id...
  {path:'userlist/user/:id',component:UserDetailComponent},

  // This is used for the wildcard it means url is not define in project then it will show this component base on any invalid url. like (404 page not found)
  {path:'**',component:WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

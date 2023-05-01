import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { DataLoadResolver } from './guards/data-load.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    UserDetailComponent,
    WildCardComponent,
    AboutCompanyComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AdminGuard,UserGuard,DataLoadResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

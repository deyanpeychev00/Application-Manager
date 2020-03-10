import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { ApplicationComponent } from './components/application/application.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';

import { ApplicationService } from './services/application/application.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateApplicationComponent,
    ApplicationComponent,
    NavigationComponent,
    UpdateApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApplicationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

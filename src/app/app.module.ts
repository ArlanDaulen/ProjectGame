import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { SearchPipe } from './components/search.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AboutGuard } from './guards/about.guard';
import { ExitAboutGuard } from './guards/exit-about.guard';
import { SigninComponent } from './components/signin/signin.component';
import { ExitSigninGuard } from './guards/exit-signin.guard';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: ContentComponent},
  {
    path: 'about', component: AboutComponent,
    canActivate: [AboutGuard],
    canDeactivate: [ExitAboutGuard]
  },
  {
    path: 'signin', component: SigninComponent,
    canDeactivate: [ExitSigninGuard]
  },
  {
    path: 'signup', component: SignupComponent,
    canDeactivate: [ExitSigninGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AboutGuard, ExitAboutGuard, ExitSigninGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

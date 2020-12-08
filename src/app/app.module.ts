import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { ExitSigninGuard } from './guards/exit-signin.guard';
import { ExitSignupGuard } from './guards/exit-signup.guard';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
import { FilterPipe } from './filter.pipe';
import { HttpClientModule }   from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'signin', component: SigninComponent,
    canDeactivate: [ExitSigninGuard]
  },
  {
    path: 'signup', component: SignupComponent,
    canDeactivate: [ExitSignupGuard]
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
    SignupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    /*NgbModule,*/
    HttpClientModule
  ],
  providers: [ExitSignupGuard, ExitSigninGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

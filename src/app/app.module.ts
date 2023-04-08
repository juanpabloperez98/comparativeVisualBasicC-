import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './shared/main-navbar/main-navbar.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { HighlightService } from './services/highlight.service';

// Third Modules


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    CardComponent,
    FooterComponent,
    ErrorpageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

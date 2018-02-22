import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeSubMenuComponent } from './home-sub-menu/home-sub-menu.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { UsuarioService } from './services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeMenuComponent,
    HomeSubMenuComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
    CookieService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

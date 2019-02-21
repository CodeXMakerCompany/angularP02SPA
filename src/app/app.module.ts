import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { APP_ROUTING } from './app.routes';


//Servicios

import { GaleriaService } from './servicios/galeria.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PictureComponent } from './components/picture/picture.component';
import { SearchComponent } from './components/search/search.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GaleriaComponent,
    PictureComponent,
    SearchComponent,
    PictureCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GaleriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

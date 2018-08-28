//Modulos principales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BarRatingModule } from "ngx-bar-rating";



//Componentes 
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContacComponent } from './shared/contac/contac.component';
import { HomeComponent } from './pages/home/home.component';

import { EmpresasComponent } from './pages/empresas/empresas.component';

//rutas 
import { AppRoutingModule } from './app-routing.module';

// maps
import { AgmCoreModule } from "@agm/core";
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { EmpresaDetailComponent } from './pages/empresa-detail/empresa-detail.component';

//Servicios 
import { ApirestService } from './services/apirest.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContacComponent,
    HomeComponent,
    EmpresasComponent,
    ServiciosComponent,
    EmpresaDetailComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBMV2B46yOjgVlGHDDt3U1dIXjjoSa3iGw' // Api key de google maps
    })
  ],
  providers: [ApirestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

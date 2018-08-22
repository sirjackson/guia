import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";


// modulo de las rutas

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import {EmpresasComponent} from "./pages/empresas/empresas.component";
import { EmpresaDetailComponent } from "./pages/empresa-detail/empresa-detail.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";
import { ContacComponent } from "./shared/contac/contac.component";


const app_routes: Routes=[
    {path:'', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent },
    {path:'contacto', component: ContacComponent},
    {path:'empresas', component: EmpresasComponent},
    {path: 'empresas/:id', component: EmpresaDetailComponent},
    {path:'**', pathMatch:'full', redirectTo:''}

];
@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]
})


export  class AppRoutingModule{

}
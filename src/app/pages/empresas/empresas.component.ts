import { Component, OnInit } from '@angular/core';


// Importando modelos
import {Empresa  } from '../../models/empresa';
import { ApirestService } from '../../services/apirest.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  public empresas: Empresa[];
  constructor( private readonly apirest:ApirestService) { }

  ngOnInit() {
    this.apirest.get_cons_empresas().then(
      (res:any)=>{
        this.empresas = res;
        console.log("eureca",res);
      },(err)=>{
        console.log("error de consulta",err);
      }
    )
  }

}

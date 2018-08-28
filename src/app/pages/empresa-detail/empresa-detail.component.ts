import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../../services/apirest.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

import { DomSanitizer } from "@angular/platform-browser"; //permitir enlaces externos embebidos


@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {
  empresa: any;
  id: any;
  constructor(public sanitizer:DomSanitizer,private readonly apirest:ApirestService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.apirest.get_cons_empresa(this.id).then(
      (res:any)=>{
        this.empresa = res;
        console.log("eureca",res);
      },(err)=>{
        console.log("error de consulta",err);
      }
    )
  }
  
}
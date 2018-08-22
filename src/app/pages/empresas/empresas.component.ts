import { Component, OnInit } from '@angular/core';

// Importando modelos
import {Empresa  } from '../../models/empresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  public products: Empresa[] = [
    new Empresa(1, "Empresa prueba","1900428113","072111511","+5939831750","..ssds.","..dre",
              "http://ximg.es/100x100/000/fff.png","http://ximg.es/600x150/000/fff.png","http://fb.com"),
    // new Empresa(2, "Product 002"),
    // new Empresa(3, "Product 003"),
    // new Empresa(4, "Product 004"),
    // new Empresa(5, "Product 005"),
    // new Empresa(6, "Product 006"),
    // new Empresa(7, "Product 007"),
    // new Empresa(8, "Product 008")
  ];
  constructor() { }

  ngOnInit() {
  }

}

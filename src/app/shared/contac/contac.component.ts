import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {
  public lng: number = -79.2008249;
  public lat: number = -4.0106405;
  constructor() { }

  ngOnInit() {
  }

}

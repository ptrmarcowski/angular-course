import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', as attribute
  //selector: '.app-servers', as class
  selector: 'app-servers',
  template: `
  
  <app-server></app-server>
  
  
  
  
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
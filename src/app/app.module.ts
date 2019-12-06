import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpModule } from '@angular/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  imports:      [ BrowserModule,
  FormsModule
  
   ],
  declarations: [ AppComponent, 
  HelloComponent,
  ServerComponent,
  ServersComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
    //ng will not scan all files, so you have to tell it here what components exist, register new componenets here, but have to import it above as well
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  //allows us to add other modules to this module, gives us built in ng modules as well 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [],
  //dont add anything to bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }

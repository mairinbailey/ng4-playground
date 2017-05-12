import { Component } from '@angular/core';

//decorater-- tells ng that this is a component, ts feature allow tou to enhance your classes
@Component({
  //selector should be a unique string
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline'

  getServerStatus(){
    return this.serverStatus
  }
}

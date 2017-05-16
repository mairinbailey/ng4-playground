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

//built in method that each typescript class has which is called once this component is created
  constructor(){
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline'
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
  
  getServerStatus(){
    return this.serverStatus
  }
}

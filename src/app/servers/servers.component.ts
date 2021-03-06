import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //you can also do '[app-servers]' to select by attribute or .app-server to select by class, can't select by id or pseudo selector (hover)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'testserver2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 1000)
  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

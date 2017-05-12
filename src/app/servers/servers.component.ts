import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //you can also do '[app-servers]' to select by attribute or .app-server to select by class, can't select by id or pseudo selector (hover)
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

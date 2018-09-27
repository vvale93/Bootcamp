import { Component, OnInit } from '@angular/core';

import { RealmsStatusService } from '../realms-status.service';

import { Realm } from '../realm';

@Component({
  selector: 'app-realms-status',
  templateUrl: './realms-status.component.html',
  styleUrls: ['./realms-status.component.css']
})
export class RealmsStatusComponent implements OnInit {

  realms: Realm[];
  realm: Realm;

  constructor(private RealmsStatusService: RealmsStatusService) { }

  ngOnInit() {
    this.RealmsStatusService.getAll().subscribe(realms => {
      this.realms = realms;
    });
  }

}

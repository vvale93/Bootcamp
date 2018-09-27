import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as _ from "lodash";
import { NgxPaginationModule } from 'ngx-pagination'; 

import { GuildService } from '../guild.service';
import { ClassMatcherService } from '../class-matcher.service';
import { RaceMatcherService } from '../race-matcher.service'

import { Guild } from '../guild';
import { GuildChar } from '../guild-char';
import { Class } from '../class';
import { Race } from '../race';


@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {

  guild : Guild;
  guildMembers: GuildChar[];
  member: GuildChar;
  imagePath: string;
  imgCharPath: string = 'http://render-us.worldofwarcraft.com/character/';
  classes: Class[];
  charClass: Class;
  races: Race[];
  charRace: Race;
  numberOfMembers: number;
  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private service: GuildService, 
    private ClassMatcherService: ClassMatcherService,
    private RaceMatcherService: RaceMatcherService
  ) { }

  ngOnInit() {
    let name: string;
    let realm: string;
    this.route.params.subscribe((params) => {
      realm = params.realm;
      name = params.name;
      this.getGuild(name, realm);
    })    
  }

  private getGuild(name:string, realm:string) {
    this.service.getGuild(name, realm).subscribe((guild) => {
      this.guild = guild;
      this.guildMembers = guild.members;
      this.guildMembers = _.orderBy(this.guildMembers, ['character.name'], ['asc']);
      this.imagePath = `http://us.battle.net/wow/static/images/guild/tabards/emblem_${guild.emblem.icon}.png`;
      this.numberOfMembers = this.guildMembers.length;

      this.ClassMatcherService.getClasses().subscribe(classes => {
        this.classes = classes;
      });

      this.RaceMatcherService.getRaces().subscribe(races => {
        this.races = races; 
      });

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as _ from "lodash";

import { SearchCharService } from '../search-char.service';
import { RaceMatcherService } from '../race-matcher.service';
import { ClassMatcherService } from '../class-matcher.service';
import { UserInfoService } from '../user-info.service';

import { Char } from '../char';
import { Race } from '../race';
import { Class } from '../class';
import { Items } from '../items';
import { UserItems } from '../user-items';
import { CharStats } from '../char-stats';
import { PvpInfoUser } from '../pvp-info-user';
import { UserGuildInfo } from '../user-guild-info';


@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {
  char: Char;
  imagePath: string;
  races: Race[];
  raceId: number;
  race: Race;
  charClasses: Class[];
  charClass: Class;
  classId: number;
  pvpInfo: PvpInfoUser;
  guildInfo: UserGuildInfo = null;
  charStats: CharStats;
  userItems: UserItems;
  imgLink = "https://wow.zamimg.com/images/wow/icons/large/";
  imgType = ".jpg";
  itemsCollection: Items[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SearchCharService,
    private RaceMatcherService: RaceMatcherService,
    private ClassMatcherService: ClassMatcherService,
    private UserInfoService: UserInfoService
  ) { }

  ngOnInit() {
    let name: string;
    let realm: string;
    this.route.params.subscribe((params) => {
      realm = params.realm;
      name = params.name;
      this.getCharacter(name, realm);
    })    
  }
  private getCharacter(name:string, realm:string) {
    this.service.getChar(name, realm).subscribe((char) => {
      this.char = char;
      this.imagePath = `http://render-us.worldofwarcraft.com/character/${char.thumbnail}`;   
      this.raceId = char.race;  
      this.classId = char.class;

      this.RaceMatcherService.getRaces().subscribe(races => {
        this.races = races;
        this.race = races.find(x => x.id === this.raceId);      
      });    

      this.ClassMatcherService.getClasses().subscribe(charClasses => {
        this.charClasses = charClasses;
        this.charClass = charClasses.find(x => x.id === this.classId);   
      });

      this.UserInfoService.getInfoPvp(name, realm).subscribe(pvpInfo => {
        this.pvpInfo = pvpInfo;
      });

      this.UserInfoService.getInfoGuild(name, realm).subscribe(guildInfo => {
        this.guildInfo = guildInfo;
        if (!("guild" in guildInfo)) {
          this.guildInfo = null;
        } 
      });

      this.UserInfoService.getInfoStats(name, realm).subscribe(charStats => {
        this.charStats = charStats;
      });

      this.UserInfoService.getInfoItems(name, realm).subscribe(userItems => {
        this.userItems = userItems;
        this.itemsCollection = Object.keys(userItems.items).map(items => userItems.items[items]).slice(2)
      });

    });
  }

}

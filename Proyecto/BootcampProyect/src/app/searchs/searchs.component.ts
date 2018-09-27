import { Component, OnInit } from '@angular/core';

import { SearchCharService } from '../search-char.service';
import { RealmsStatusService } from '../realms-status.service';
import { GuildService } from '../guild.service';

import { Char } from '../char';
import { Guild } from '../guild';
import { Realm } from '../realm';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit {

  char: Char;
  guild: Guild;
  realms: Realm[];
  realm: Realm;

  constructor(
    private SearchCharService: SearchCharService,
    private GuildService: GuildService,
    private RealmsStatusService: RealmsStatusService
    ) { }

  ngOnInit() {
      this.RealmsStatusService.getAll().subscribe(realms => {
        this.realms = realms;
      });
  }
  private getCharacter(charName: string, charRealm: string) {
    if (!charName || !charRealm) {
      alert("Please fill both fields");
      return;
    }
    this.SearchCharService.getChar(charName, charRealm).subscribe(char => {
      this.char = char;
      let thumb = char.thumbnail;
      document.getElementById('character').innerHTML = '';
      let img = document.createElement('IMG');
      img.setAttribute('src', `http://render-us.worldofwarcraft.com/character/${thumb}`);
      img.style.backgroundImage = `url("../../assets/thumbnail404.jpg")`;
      img.style.width = '84px';
      img.style.height = '84px';
      let span = document.createElement('SPAN');
      let innerSpan = document.createTextNode(`${char.name}(${char.level}) - ${char.realm}`);
      span.appendChild(innerSpan);
      document.getElementById('character').appendChild(img);
      document.getElementById('character').appendChild(span);
      }, 
      (error) => {
        if (error._body == `{"status":"nok", "reason": "Realm not found."}`) {
          alert('Realm not found');
        } else {
          if (error._body == `{"status":"nok", "reason": "Character not found."}`) {
            alert('Character not found');
          }
        }
    });
  }

  private getGuild(guildName: string, guildRealm: string) {
    if (!guildName || !guildRealm) {
      alert("Please fill both fields");
      return;
    }
    this.GuildService.getGuild(guildName, guildRealm).subscribe(guild => {
      this.guild = guild;
      let icon = guild.emblem.icon;
      document.getElementById('guild').innerHTML = '';
      let img = document.createElement('IMG');
      img.setAttribute('src', `http://us.battle.net/wow/static/images/guild/tabards/emblem_${icon}.png`);
      let span = document.createElement('SPAN');
      let innerSpan = document.createTextNode(`${guild.name}(${guild.level}) - ${guild.realm}`);
      span.appendChild(innerSpan);
      document.getElementById('guild').appendChild(img);
      document.getElementById('guild').appendChild(span);
    },
    (error) => {
      if (error._body == `{"status":"nok", "reason": "Realm not found."}`) {
        alert('Realm not found');
      } else {
        if (error._body == `{"status":"nok", "reason": "Guild not found."}`) {
          alert('Guild not found');
        }
      }
    });
  }
}

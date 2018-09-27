import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  host: string = `https://us.api.battle.net/wow/`;
  key: string = `locale=en_US&apikey=68rhxtstmd6ksae9jtxeywtexvm2atsd`;
  constructor() { }

}

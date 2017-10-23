import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  serverUrl:string;
  hiddenNavs=false;
  constructor() {
    this.serverUrl='http://115.159.104.128:3000';
  }

}

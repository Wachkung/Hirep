import { Component, Injectable,Inject } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Encrypt } from '../../encrypt';
import { Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    // URL to web API

  constructor(
    @Inject('API_URL') private url:string,
    private authHttp: Http) { }

  //อันนี้แบบ post
    Login(username,password) {    
    return new Promise((resolve, reject) => {
      //แนบตัวแปบไปกับ service
      this.authHttp.post(`${this.url}/username`,{
        username: username,
        password: password
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}

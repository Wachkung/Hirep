import { Component, Injectable,Inject } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Encrypt } from '../page-service/encrypt';
import { Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ReprcptService {
  //@Inject('API_URL') private url:string;  // URL to web API

  constructor(
    @Inject('API_URL') private url:string,
    private authHttp: Http) { }

    getRcptphm() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/rcptphm`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
    getRcptnomed() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/rcptnomed`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
    getRcptlab() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/rcptlab`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
    getRcptxry() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/rcptxry`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
import { Component, Injectable, Inject } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class RevisitService {
    // URL to web API

    constructor(
        @Inject('API_URL') private url: string,
        private authHttp: Http) { }

    Revisasth(encryptText) {
        return new Promise((resolve, reject) => {
            //แนบตัวแปบไปกับ service
            let url = `${this.url}/repdm`;
            // let url = this.url + '/users/login';
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = { data: encryptText };
            this.authHttp.post(url, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, () => {
                    reject('Connection failed!');
                });
        });
    }

    //อันนี้ แบบ get
    getRevisasth(startdate, enddate) {
        return new Promise((resolve, reject) => {
            //แนบตัวแปบไปกับ service
            this.authHttp.get(`${this.url}/repdm/${startdate}/${enddate}`)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        });
    }

    //อันนี้แบบ post
    PostRevisasth(startdate, enddate) {
        return new Promise((resolve, reject) => {
            //แนบตัวแปบไปกับ service
            this.authHttp.post(`${this.url}/repdm`, {
                startdate: startdate,
                enddate: enddate
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

import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Encrypt } from '../page-service/encrypt';
import { HirepService } from '../page-service/hirep.service';
import * as CryptoJS from 'crypto-js';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [HirepService],
    styles: ['.error {color:red;}']
})

export class HomeComponent  implements OnInit {
  errorMessage: string;
  
  today: any[] = [];
  todaytotal: any[] = [];
  todaytype: any[] = [];
  revier: any[] = [];
  opicdtm: any[] = [];
  ericdtm: any[] = [];
  dticdtm: any[] = [];
  reopuc: any[] = [];
  date:Date = new Date();
  mode = 'Promise';

  constructor(private hirepService: HirepService) {}

  ngOnInit() {
     this.showToday();
     this.showTodaytotal();
     this.showTodaytype();
     this.showRevier();
     this.showOpicdtm();
     this.showEricdtm();
     this.showDticdtm();
     this.showReopuc();
    //  this.showPass();

     
  }
  // showPass(){
  //     let passwords = '123456';
  //     let hashPassword = CryptoJS.createHash('md5') //เข้ารหัส Password MD5 แล้วแต่ว่าใช้อะไรครับ
  //       .update(passwords).digest('hex'); // เข้ารหัส Password + sha ถ้าจำไม่ผิด
  //     //  let hashPassword = crypto.createHash('md5').update(Password); // เข้ารหัส Password MD5 แล้วแต่ว่าใช้อะไรครับเข้ารหัส Password + sha ถ้าจำไม่ผิด
  //     console.log(hashPassword);
  //   }
  
  showToday() {
    this.today = [];
    this.hirepService.getToday()
      .then((result: any) => {
        if (result.ok) {
          this.today = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.todaytotal);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showTodaytotal() {
    this.todaytotal = [];
    this.hirepService.getTodaytotal()
      .then((result: any) => {
        if (result.ok) {
          this.todaytotal = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.todaytotal);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showTodaytype() {
    this.todaytype = [];
    this.hirepService.getTodaytype()
      .then((result: any) => {
        if (result.ok) {
          this.todaytype = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.todaytype);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showRevier() {
    this.revier = [];
    this.hirepService.getRevier()
      .then((result: any) => {
        if (result.ok) {
          this.revier = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.revier);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showOpicdtm() {
    this.opicdtm = [];
    this.hirepService.getOpicdtm()
      .then((result: any) => {
        if (result.ok) {
          this.opicdtm = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.opicdtm);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showEricdtm() {
    this.ericdtm = [];
    this.hirepService.getEricdtm()
      .then((result: any) => {
        if (result.ok) {
          this.ericdtm = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.ericdtm);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showReopuc() {
    this.reopuc = [];
    this.hirepService.getReopuc()
      .then((result: any) => {
        if (result.ok) {
          this.reopuc = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.reopuc);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showDticdtm() {
    this.dticdtm = [];
    this.hirepService.getDticdtm()
      .then((result: any) => {
        if (result.ok) {
          this.dticdtm = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.dticdtm);
        }
      }).catch(error => {
        console.log(error);
      })
  }

    
}

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Encrypt } from '../../page-service/encrypt';
import { RevisitService } from '../client-service/revisit.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-repvisit',
  templateUrl: './repvisit.component.html',
  styleUrls: ['./repvisit.component.scss'],
  providers: [RevisitService, Encrypt],
  styles: ['.error {color:red;}']
})


export class RepvisitComponent implements OnInit {
  errorMessage: string;
  revisasth: any[] = [];
  date: Date = new Date();
  startdate: any;
  enddate: any;
  mode = 'Promise';

  constructor(
    private router: Router,
    private revisitService: RevisitService,
    private encryptProvider: Encrypt

  ) {}

  ngOnInit() {
    // console.log(localStorage.token);
    if (localStorage.token != null) {
      console.log('Token Success!');

    } else {
      this.router.navigate(['/hirep/login']); // ส่ง Routes ไป client/home
      console.log('No Token Success!');
    }

  }
  showRevisasth() {
    let revisit: any = {
      startdate: this.startdate,
      enddate: this.enddate
    };
    let encryptText = this.encryptProvider.encrypt(JSON.stringify(revisit));
    this.revisitService.Revisasth(encryptText)
      .then((res: any) => {
        if (res.ok) {
          let token = res.token;
           // this.revisasth = res.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          let decryptedText = this.encryptProvider.decrypt(token);
          let rows = JSON.parse(decryptedText);
          // console.log(rows);
            this.revisasth = rows.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
            // console.log(this.revisasth);
        } else {
          alert(JSON.stringify(res.error));
        }
      }, (error) => {
        alert(error);
      });
  }

  showPostRevisasth() {
    this.revisasth = [];
    //ฝั่ง front end เสร็จแล้ว ประมาณนี้ ทีนี้ เราก็ไปกำหนดอยู่ฝั่ง api ให้รับค่า ที่ฝั่งนี้ ส่งไปให้
    // this.startdate = this.date;
    // this.enddate = this.date;
    // ทีนี้ ก็มากำหนดใน service ให้มันแนบตัวแปรไปด้วย
    this.revisitService.PostRevisasth(this.startdate, this.enddate)
      .then((result: any) => {
        if (result.ok) {
          this.revisasth = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.revisasth);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showGetRevisasth() {
    this.revisasth = [];
    //ฝั่ง front end เสร็จแล้ว ประมาณนี้ ทีนี้ เราก็ไปกำหนดอยู่ฝั่ง api ให้รับค่า ที่ฝั่งนี้ ส่งไปให้
    // ทีนี้ ก็มากำหนดใน service ให้มันแนบตัวแปรไปด้วย
    this.revisitService.getRevisasth(this.startdate, this.enddate)
      .then((result: any) => {
        if (result.ok) {
          this.revisasth = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.revisasth);
        }
      }).catch(error => {
        console.log(error);
      })
  }
}

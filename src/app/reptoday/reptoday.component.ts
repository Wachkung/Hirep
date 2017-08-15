import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Encrypt } from '../page-service/encrypt';
import { HirepService } from '../page-service/hirep.service';


@Component({
  selector: 'app-reptoday',
  templateUrl: './reptoday.component.html',
  styleUrls: ['./reptoday.component.scss'],
  providers: [HirepService, Encrypt],
  styles: ['.error {color:red;}']
})
export class ReptodayComponent implements OnInit {
  errorMessage: string;
  
  typetotal: any[] = [];
  date:Date = new Date();
  mode = 'Promise';
  startdate: any;
  enddate: any;

  constructor(
    private hirepService: HirepService, 
    private encryptProvider: Encrypt
) { }

  ngOnInit() {
    //this.showgetTypetotal();
  }

  showTypetotal() {
    let typetotal: any = {
      startdate: this.startdate,
      enddate: this.enddate
    };

    let encryptText = this.encryptProvider.encrypt(JSON.stringify(typetotal));
    this.hirepService.PostTypetotal(encryptText)
      .then((result: any) => {
        if (result.ok) {
          let token = result.token;
          // console.log(token);
          // this.revisasth = res.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          let decryptedText = this.encryptProvider.decrypt(token);
          let rows = JSON.parse(decryptedText);
          this.typetotal = rows.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.typetotal);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showgetTypetotal() {
    this.typetotal = [];
    //ฝั่ง front end เสร็จแล้ว ประมาณนี้ ทีนี้ เราก็ไปกำหนดอยู่ฝั่ง api ให้รับค่า ที่ฝั่งนี้ ส่งไปให้
    // ทีนี้ ก็มากำหนดใน service ให้มันแนบตัวแปรไปด้วย
    this.hirepService.getTypetotal(this.startdate,this.enddate)
      .then((result: any) => {
        if (result.ok) {
          this.typetotal = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.typetotal);
        }
      }).catch(error => {
        console.log(error);
      })
  }
}
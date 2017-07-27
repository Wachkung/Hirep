import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http } from '@angular/http';
import { Encrypt } from '../../encrypt';
import { HirepService } from '../page-service/hirep.service';


@Component({
  selector: 'app-reptoday',
  templateUrl: './reptoday.component.html',
  styleUrls: ['./reptoday.component.scss'],
    providers: [HirepService],
    styles: ['.error {color:red;}']
})
export class ReptodayComponent implements OnInit {
  errorMessage: string;
  
  typetotal: any[] = [];
  date:Date = new Date();
  mode = 'Promise';
  startdate: any;
  enddate: any;

  constructor(private hirepService: HirepService) { }

  ngOnInit() {
    //this.showgetTypetotal();
  }

  showTypetotal() {
    this.typetotal = [];
    //ฝั่ง front end เสร็จแล้ว ประมาณนี้ ทีนี้ เราก็ไปกำหนดอยู่ฝั่ง api ให้รับค่า ที่ฝั่งนี้ ส่งไปให้
    // this.startdate = this.date;
    // this.enddate = this.date;
    // ทีนี้ ก็มากำหนดใน service ให้มันแนบตัวแปรไปด้วย
    this.hirepService.PostTypetotal(this.startdate,this.enddate)
      .then((result: any) => {
        if (result.ok) {
          this.typetotal = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.typetotal);
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
          console.log(this.typetotal);
        }
      }).catch(error => {
        console.log(error);
      })
  }


}

import { NgModule, OnInit, Component } from '@angular/core';
import { HirepService } from '../page-service/hirep.service';
import { Encrypt } from '../page-service/encrypt';

@Component({
  selector: 'app-todayipt',
  templateUrl: './todayipt.component.html',
  styleUrls: ['./todayipt.component.scss'],
  providers: [HirepService, Encrypt],
  styles: ['.error {color:red;}']
})
export class TodayiptComponent implements OnInit {
  errorMessage: string;
  
  todayipt: any[] = [];
  reipuc: any[] = [];
  overadmin: any[] = [];
  date:Date = new Date();

  mode = 'Promise';

  constructor (
    private hirepService: HirepService,
    private encryptProvider: Encrypt
  ) {}

  ngOnInit() {
      this.showTodayipt();
      this.showReipuc();

  }
    showReipuc() {
    this.reipuc = [];
    this.hirepService.getReipuc()
      .then((result: any) => {
        if (result.ok) {
          this.reipuc = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.reipuc);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  
  showTodayipt() {
    this.todayipt = [];
    this.hirepService.getTodayipt()
      .then((result: any) => {
        if (result.ok) {
          this.todayipt = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          // console.log(this.todayipt);
        }
      }).catch(error => {
        console.log(error);
      })
  }
}


import { Component, OnInit } from '@angular/core';
import { ReprcptService } from '../page-service/reprcpt.service';

@Component({
  selector: 'app-reprcpt',
  templateUrl: './reprcpt.component.html',
  styleUrls: ['./reprcpt.component.scss'],
  providers: [ReprcptService],
  styles: ['.error {color:red;}']
})
export class ReprcptComponent implements OnInit {
  errorMessage: string;
  
  rcptphm: any[] = [];
  rcptnomed: any[] = [];
  rcptlab: any[] = [];
  rcptxry: any[] = [];
  mode = 'Promise';

  constructor(private reprcptService: ReprcptService) { }

  ngOnInit() {
         this.showRcptphm();
         this.showRcptnomed();
         this.showRcptlab();
         this.showRcptxry();
  }
  showRcptphm() {
    this.rcptphm = [];
    this.reprcptService.getRcptphm()
      .then((result: any) => {
        if (result.ok) {
          this.rcptphm = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.rcptphm);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showRcptnomed() {
    this.rcptnomed = [];
    this.reprcptService.getRcptnomed()
      .then((result: any) => {
        if (result.ok) {
          this.rcptnomed = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.rcptnomed);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showRcptlab() {
    this.rcptphm = [];
    this.reprcptService.getRcptlab()
      .then((result: any) => {
        if (result.ok) {
          this.rcptlab = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.rcptlab);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showRcptxry() {
    this.rcptxry = [];
    this.reprcptService.getRcptxry()
      .then((result: any) => {
        if (result.ok) {
          this.rcptxry = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.rcptxry);
        }
      }).catch(error => {
        console.log(error);
      })
  }

}

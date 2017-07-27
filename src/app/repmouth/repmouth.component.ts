import { NgModule, OnInit, Component } from '@angular/core';
import { HirepService } from '../page-service/hirep.service';

@Component({
  selector: 'app-repmouth',
  templateUrl: './repmouth.component.html',
  styleUrls: ['./repmouth.component.scss'],
  providers: [HirepService],
  styles: ['.error {color:red;}']
})
export class RepmouthComponent implements OnInit {
  errorMessage: string;
  
  overadmin: any[] = [];
  overvisit: any[] = [];
  iptnum: any[] = [];
  date:Date = new Date();

  mode = 'Promise';

  constructor(private hirepService: HirepService) { }

  ngOnInit() {
      this.showOveradmin();
      this.showOvervisit();
      this.showIptnum();
  }
  showIptnum() {
    this.iptnum = [];
    this.hirepService.getIptnum()
      .then((result: any) => {
        if (result.ok) {
          this.iptnum = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.iptnum);
        }
      }).catch(error => {
        console.log(error);
      })
  }

  showOveradmin() {
    this.overadmin = [];
    this.hirepService.getOveradmin()
      .then((result: any) => {
        if (result.ok) {
          this.overadmin = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.overadmin);
        }
      }).catch(error => {
        console.log(error);
      })
  }
  showOvervisit() {
    this.overvisit = [];
    this.hirepService.getOvervisit()
      .then((result: any) => {
        if (result.ok) {
          this.overvisit = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.overvisit);
        }
      }).catch(error => {
        console.log(error);
      })
  }
}

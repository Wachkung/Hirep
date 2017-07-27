import { NgModule, OnInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http } from '@angular/http';
//import { Encrypt } from '../../encrypt';
import { UserService } from '../page-service/username.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
  styles: ['.error {color:red;}']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  
  usernames: any[] = [];
  date:Date = new Date();
  mode = 'Promise';
  username: any;
  password: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  Login() {
    this.usernames = [];
    //ฝั่ง front end เสร็จแล้ว ประมาณนี้ ทีนี้ เราก็ไปกำหนดอยู่ฝั่ง api ให้รับค่า ที่ฝั่งนี้ ส่งไปให้
    // this.startdate = "2017-01-01";
    // this.enddate = "2017-03-31";
    // ทีนี้ ก็มากำหนดใน service ให้มันแนบตัวแปรไปด้วย
    this.userService.Login(this.username,this.password)
      .then((result: any) => {
        if (result.ok) {
          this.usernames = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.usernames);
        }
      }).catch(error => {
        console.log(error);
      })
  }

}

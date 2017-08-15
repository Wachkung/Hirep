import { NgModule, OnInit, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http } from '@angular/http';
import { Encrypt } from '../page-service/encrypt';
import { UserService } from '../page-service/username.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, Encrypt],
  styles: ['.error {color:red;}']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  users: any[] = [];
  date:Date = new Date();
  mode = 'Promise';
  username: any;
  password: any;
  constructor(
    private router: Router,
    private userService: UserService, 
    private encryptProvider: Encrypt
) { }

  ngOnInit() { 
  }
  Login() {
    this.users = [];
    this.userService.Login(this.username,this.password)
      .then((result: any) => {
        if (result.ok) {
          this.users = result.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
          console.log(this.users);
          this.router.navigate(['client']); // ส่ง Routes ไป client/home 
        }
      }).catch(error => {
        console.log(error);
      })
  }

  doLogin() {
    let user: any = {
      username: this.username,
      password: this.password
    };
    let encryptText = this.encryptProvider.encrypt(JSON.stringify(user));
    this.userService.doLogin(encryptText)
      .then((res: any) => {
        if (res.ok) {
          let token = res.token; // รับค่ามา
          localStorage.setItem('token', token); //เก็บค่า Token ไว้ที่เครื่อง Client ไว้ 

          this.userService.saveDeviceToken(token, this.username) // ส่งค่าไป บันทึกลง ฐานข้อมูล 
            .then((res: any) => {
              console.log('Register device token success!');
            }, (error) => {
              console.log(error);
            }); //  ส่งค่าไป บันทึกลง ฐานข้อมูล เอาออกก่อน เดี่ยวค่อยว่ากันทีหลัง มันจะยาว
          this.router.navigate(['client']); // ส่ง Routes ไป client/home
        } else {
          alert(JSON.stringify(res.error));
        }
      }, (error) => {
        alert(error);
      });
  }
}

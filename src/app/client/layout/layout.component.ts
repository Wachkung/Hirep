import { Component, OnInit } from '@angular/core';
import { Encrypt } from '../../page-service/encrypt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [Encrypt]

})
export class LayoutComponent implements OnInit {
  user: any[] = [];

  constructor(
    private router: Router,
    private encryptProvider: Encrypt

  ) { }

  ngOnInit() {
  }
Logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/hirep/home']); // ส่ง Routes ไป client/home

}
Login(){
  if (localStorage.token != null) {
    console.log('Token Success!');
    let decryptedText = this.encryptProvider.decrypt(localStorage.token);
    // console.log(decryptedText);
    let rows = JSON.parse(decryptedText);
    this.user = rows.rows; // ตอนรับ ก็ต้องมารับค่า rows แบบนี้
  } else {
    this.router.navigate(['/hirep/login']); // ส่ง Routes ไป client/home
    console.log('No Token Success!');
  }

}
}

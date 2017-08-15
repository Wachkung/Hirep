import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
      // console.log(localStorage.token);
    if (localStorage.token != null) {
        console.log('Token Success!');

    }else {
        this.router.navigate(['/hirep/login']); // ส่ง Routes ไป client/home
        console.log('No Token Success!');
    }
  }
}

//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-htadmin-home',
  templateUrl: './htadmin-home.component.html',
  styleUrls: ['./htadmin-home.component.css']
})
export class HTAdminHomeComponent implements OnInit{
  user : any;
  ngOnInit(): void {
    this.user = sessionStorage.getItem("username");
    console.log(this.user);
  }
}

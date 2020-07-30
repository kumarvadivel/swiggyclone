import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesub1',
  templateUrl: './homesub1.component.html',
  styleUrls: ['./homesub1.component.css']
})
export class Homesub1Component implements OnInit {
  toggler:boolean =false
  login($event){
    event.preventDefault()
    console.log("login")
    this.toggler=true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

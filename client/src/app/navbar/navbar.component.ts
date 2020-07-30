import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentcity:any;
  authstatus:boolean=false;
  authdata:any;
  constructor(private httpclient:HttpClient) {
    this.currentcity=localStorage.getItem("currentcity")

    this.httpclient.get("http://localhost:3000/authenticate",{withCredentials:true}).subscribe(data=>{
      //console.log(data)
      if(data.username==null)
      {     
          this.authstatus=false
      }else{
        this.authstatus=true
        this.authdata=data
        
      }
    })
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdata:any
  orderdata:any
  ordertoggle:boolean=true
  addresstoggle:boolean=false
  infotoggle:boolean=false
  toggler(state){
    if(state==="orders"){
      this.ordertoggle=true
      this.addresstoggle=false
      this.infotoggle=false
    }
    if(state==="address"){
      this.ordertoggle=false
      this.addresstoggle=true
      this.infotoggle=false
    }
    if(state==="info"){
      this.ordertoggle=false
      this.addresstoggle=false
      this.infotoggle=true
    }
  }
  logout($event){
    event.preventDefault();
    this.httpclient.get("http://localhost:3000/logout",{withCredentials:true}).subscribe(data=>{
      this.router.navigate([''])
    })
  }
  constructor(private httpclient:HttpClient,private router:Router) { 
    this.httpclient.get("http://localhost:3000/authenticate",{withCredentials:true}).subscribe(data=>{
      if(data.username!=null){
        this.httpclient.get("http://localhost:3000/getuserorder/"+data.username).subscribe(data=>{
          this.orderdata=data
          console.log(this.orderdata)
        })
        this.httpclient.get("http://localhost:3000/getuser/"+data.username).subscribe(data=>{
          this.userdata=data
        })
      }else{
        this.router.navigate([''])
      }
     
    })
  }

  ngOnInit(): void {
  }

}

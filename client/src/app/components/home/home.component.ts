import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl,FormGroup ,FormBuilder, Validators} from '@angular/forms';
import {SnotifyService, SnotifyToast} from 'ng-snotify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginstaus:boolean=false
  authdata:any;
  loginerrormessage:any;
  signuperrormessage:any;
  citysearcharea:boolean=true
  loginarea:boolean=false
  signuparea:boolean=false
  loginform=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  signupform =new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    address:new FormControl(''),
    phone:new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    city:new FormControl('')
  })
  login($event){
    console.log("login")
    this.citysearcharea=false
    this.loginarea=true
    this.signuparea=false
  }
  loginreq($event){
   
    //console.log(this.loginform.value)
   if(this.loginform.value.username==""){
      this.loginerrormessage="username field is empty"
   }else{
     if(this.loginform.value.password==""){
      
        this.loginerrormessage="password field is empty"
     }else{
      this.httpclient.post("http://localhost:3000/login",this.loginform.value,{withCredentials:true}).subscribe(data=>{
        console.log(data)
      if(data.error){
        this.loginerrormessage=data.error
      }else{
        
        window.location.reload()
      }
      
      
    })
     }
    
   }
    
  }
  signupreq($event){
    console.log(this.signupform.value)
    if(this.signupform.value.firstname==""){
      this.signuperrormessage="firstname is empty"

    }else{
      if(this.signupform.value.lastname==""){
        this.signuperrormessage="lastname is empty"
      }
      else{
        if(this.signupform.value.username=="empty"){
          this.signuperrormessage="username is empty"
        }
        else{
          if(this.signupform.value.email==""){
            this.signuperrormessage="email is empty"
          }
          else{
            if(this.signupform.value.phone==""){
              this.signuperrormessage="phone is empty"
            }else{
              if(this.signupform.value.address==""){
                this.signuperrormessage="address is empty"
              }else{
                if(this.signupform.value.password==""){
                  this.signuperrormessage="password is empty"
                }else{
                  if(this.signupform.value.password.length<6){
                    this.signuperrormessage="password should be more than 6 characters"
                  }else{
                    if(this.signupform.value.password!=this.signupform.value.confirmpassword){
                        this.signuperrormessage="passwords do not match"
                    }else{
                      let signupdata={
                        username:this.signupform.value.username,
                        firstname:this.signupform.value.firstname,
                        lastname:this.signupform.value.lastname,
                        email:this.signupform.value.email,
                        phone:this.signupform.value.phone,
                        address:this.signupform.value.address,
                        password:this.signupform.value.password,
                        city:this.signupform.value.city
                        
                      }
                      this.httpclient.post("http://localhost:3000/signup",signupdata).subscribe(data=>{
                        if(data.message=="username already exsists"){
                          this.signuperrormessage="username already exsists"
                        }else{
                          window.location.reload()
                        }
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
findcity=new FormGroup({
  city:new FormControl('')
})
findcityerror:any;
  searchcity($event){
      this.httpclient.post('http://localhost:3000/searchcity',this.findcity.value).subscribe(data=>{
        if(data.status){
            this.router.navigate(['/restaurants/'+this.findcity.value.city.toLowerCase( )])
            localStorage.setItem("currentcity",this.findcity.value.city.toLowerCase( ))
        }
        else{
          this.findcityerror="services for this city is not available right now"
        }
      })
  }
  reset($event){
    this.citysearcharea=true
    this.loginarea=false
    this.signuparea=false
  }
  signup($event){
    console.log("signup")
    this.citysearcharea=false
    this.loginarea=false
    this.signuparea=true
  }
  constructor(private httpclient:HttpClient,private snotifyService: SnotifyService,public router:Router) { 
    this.httpclient.get("http://localhost:3000/authenticate",{withCredentials:true}).subscribe(data=>{
      this.authdata=data
      if(data.username){
        this.loginstaus=true
      }
    })
  }

  ngOnInit(): void {
  }

}

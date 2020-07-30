import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  logindata:any;
  box1state:string="NOTLOGGEDIN"
  box2state:string="DISABLED"
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
  loginerrormessage: any;
  phonenumber: any=null;
  signuperrormessage: string;
  currentcity: string;
  loginreq($event){
    if(this.loginform.value.username==""){
      this.loginerrormessage="username field is empty"
   }else{
     if(this.loginform.value.password==""){
      
        this.loginerrormessage="password field is empty"
     }else{
      this.httpclient.post("http://localhost:3000/login",this.loginform.value,{withCredentials:true}).subscribe(data=>{
      //  console.log(data)
      if(data.error){
        this.loginerrormessage=data.error
      }else{
        this.box1state="LOGGEDIN"
        this.box2state="ACTIVE"
        this.logindata=data
        this.httpclient.get("http://localhost:3000/getuser/"+this.logindata.username).subscribe(data=>{
          this.phonenumber=data.phone
          

        })
        //console.log(this.logindata)
        
      }
      
      
    })
     }
    
   }
    
  }
  signupreq($event){
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
                          this.box1state="NOTLOGGEDIN"
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
  logintoggler($event){
    event.preventDefault()
    this.box1state="LOGIN"
  }
  signuptoggler($event){
    event.preventDefault()
    this.box1state="SIGNUP"
  }
  constructor(private httpclient:HttpClient,public router:Router) {
    this.currentcity=localStorage.getItem("currentcity")
    this.httpclient.get("http://localhost:3000/authenticate",{withCredentials:true}).subscribe(data=>{
      if(data.username){
        this.box1state="LOGGEDIN"
        this.box2state="ACTIVE"
        this.logindata=data
       // this.httpclient.get("http://localhost:3000/getuser/"+this.logindata.username).subscribe(data=>{
          //this.phonenumber=data.phone
          

       // })
      }
    })
   }

  ngOnInit(): void {
  }

}

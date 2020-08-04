import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { profile } from 'console';
import { UUID } from 'angular2-uuid';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  logindata:any;
  box1state:string="NOTLOGGEDIN"
  box2state:string="DISABLED"
  box3state:string="DISABLED"
  hoteldata:any=[];
  orderdata:any;
  paymentform=new FormGroup({
    upi:new FormControl('')
  })
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
  profileinfo: Object;
  addresstoggler:any="DISABLED"
  deliveryaddress: any;
  addressform=new FormGroup({
    deliveryaddress:new FormControl('')
  })
  cartdata: any;private toastr: ToastrService
  subtotal: number;
  loginreq($event){
    if(this.loginform.value.username==""){
      this.loginerrormessage="username field is empty"
      this.toastr.error(this.loginerrormessage,"Error")
   }else{
     if(this.loginform.value.password==""){
      
        this.loginerrormessage="password field is empty"
        this.toastr.error(this.loginerrormessage,"Error")
     }else{
      this.httpclient.post("http://localhost:3000/login",this.loginform.value,{withCredentials:true}).subscribe(data=>{
      //  console.log(data)
      if(data.errors){
        this.loginerrormessage=data.errors
        this.toastr.error(this.loginerrormessage,"Error")
      }else{
        this.box1state="LOGGEDIN"
        this.box2state="ACTIVE"
        this.logindata=data
        this.httpclient.get("http://localhost:3000/getuser/"+this.logindata.username).subscribe(data=>{
          this.phonenumber=data.phone
          this.profileinfo=data
          delete this.profileinfo._id
          this.toastr.success("Signupsuccessfull","Success")
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
      this.toastr.error(this.signuperrormessage,"Error")

    }else{
      if(this.signupform.value.lastname==""){
        this.signuperrormessage="lastname is empty"
        this.toastr.error(this.signuperrormessage,"Error")
      }
      else{
        if(this.signupform.value.username=="empty"){
          this.signuperrormessage="username is empty"
          this.toastr.error(this.signuperrormessage,"Error")
        }
        else{
          if(this.signupform.value.email==""){
            this.signuperrormessage="email is empty"
            this.toastr.error(this.signuperrormessage,"Error")
          }
          else{
            if(this.signupform.value.phone==""){
              this.signuperrormessage="phone is empty"
              this.toastr.error(this.signuperrormessage,"Error")
            }else{
              if(this.signupform.value.address==""){
                this.signuperrormessage="address is empty"
                this.toastr.error(this.signuperrormessage,"Error")
              }else{
                if(this.signupform.value.password==""){
                  this.signuperrormessage="password is empty"
                  this.toastr.error(this.signuperrormessage,"Error")
                }else{
                  if(this.signupform.value.password.length<6){
                    this.signuperrormessage="password should be more than 6 characters"
                    this.toastr.error(this.signuperrormessage,"Error")
                  }else{
                    if(this.signupform.value.password!=this.signupform.value.confirmpassword){
                        this.signuperrormessage="passwords do not match"
                        this.toastr.error(this.signuperrormessage,"Error")
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
                          this.toastr.error(this.signuperrormessage,"Error")
                        }else{
                          this.box1state="NOTLOGGEDIN"
                          this.toastr.success("Signupsuccessfull","Success")
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

  deliverhere($event){
    
    this.deliveryaddress=this.profileinfo.address
    this.box2state="COMPLETED"
    this.box3state="ACTIVE"
  }
  address($event){
    this.addresstoggler ="ACTIVE"
  }
  addressreq($event){
    this.deliveryaddress=this.addressform.value.deliveryaddress
    this.box2state="COMPLETED"
    this.box3state="ACTIVE"
  }
  changead($event){
    this.box2state="ACTIVE"
    this.box3state="DISABLED"
  }
  parsehoteldata(hotelname,city){
    this.httpclient.get("http://localhost:3000/gethoteldata/"+city+"/"+hotelname).subscribe(data=>{
      delete data._id
      this.hoteldata.push(data)
     
    })
  }
  inc($event,hotelname,foodname){
 
    this.data=JSON.parse(localStorage.getItem("cart"))
     // console.log(this.cartdata)
      //console.log(this.data)
      let index=this.data.findIndex(p=>p.hotelname==hotelname)
      let foodindex=this.data[index].foods.findIndex(p=>p.foodname==foodname)
      this.data[index].foods[foodindex].quantity+=1
      localStorage.setItem("cart",JSON.stringify(this.data))
      this.refresh()
      //console.log(hotelname,foodname)
    
      
  }
  dec($event,hotelname,foodname){
    // console.log("inc")
   
     this.cartdata=JSON.parse(localStorage.getItem("cart"))
      // console.log(this.cartdata)
       //console.log(this.data)
       let index=this.cartdata.findIndex(p=>p.hotelname==hotelname)
       let foodindex=this.cartdata[index].foods.findIndex(p=>p.foodname==foodname)
       if(this.cartdata[index].foods[foodindex].quantity==1){
        
       }
       else{
         this.cartdata[index].foods[foodindex].quantity-=1
         localStorage.setItem("cart",JSON.stringify(this.cartdata))
         this.refresh()
       }
     
   }
   refresh(){
    //console.log("ass")
    this.cartdata=JSON.parse(localStorage.getItem("cart"))
    if(this.cartdata.length==0){
      this.cartdata=null
      this.subtotal=0
    }else{
      this.subtotal=0
      for(var i=0;i<this.cartdata.length;i++)
      {
        for(var j=0;j<this.cartdata[i].foods.length;j++){
          this.subtotal+=(this.cartdata[i].foods[j].quantity*this.cartdata[i].foods[j].rate)
        }
      }
      localStorage.setItem("subtotal",this.subtotal.toString())
    }
     
      
  
    
  
  }
  paymenterror:any
  pay($event){
    event.preventDefault()
    this.hote
    if(this.paymentform.value.upi==="" && this.paymentform.value.upi.length!==16){
      this.paymenterror="please enter a valid 16 digit upi id "
      this.toastr.error(this.paymenterror,"Error")
    }else{

    
    for(var i=0;i<this.cartdata.length;i++){
      let sutotal=0
      for(var j=0;j<this.cartdata[i].foods.length;j++){
        sutotal+=(this.cartdata[i].foods[j].quantity*this.cartdata[i].foods[j].rate)
      }
      this.orderdata={
        username:this.profileinfo.username,
        email:this.profileinfo.email,
        hoteldata:[this.hoteldata[i]],
        fooddata:this.cartdata[i].foods,
        upi:this.paymentform.value.upi,
        orderid:UUID.UUID(),
        ordertotal:sutotal
      }
      this.httpclient.post("http://localhost:3000/checkout",this.orderdata).subscribe(data=>{
        //console.log(data)
        
      })
      localStorage.removeItem("cart")
      localStorage.removeItem("subtotal")
      this.toastr.success("Payment successfull your order id is:"+this.orderdata.orderid ,"Success")
     // console.log(this.orderdata)
     setTimeout(()=>this.router.navigate(['/profile']),2000)
    }
  }
  }
  constructor(private toastr: ToastrService,private httpclient:HttpClient,public router:Router) {
    this.cartdata=JSON.parse(localStorage.getItem("cart"))
    this.currentcity=localStorage.getItem("currentcity")
    this.subtotal=parseInt(localStorage.getItem("subtotal"))
   for(var i=0;i<this.cartdata.length;i++){
     this.parsehoteldata(this.cartdata[i].hotelname,this.currentcity)
   }
   console.log(this.hoteldata)
    
    this.httpclient.get("http://localhost:3000/authenticate",{withCredentials:true}).subscribe(data=>{
      if(data.username){
        this.box1state="LOGGEDIN"
        this.box2state="ACTIVE"
        this.logindata=data
        this.httpclient.get("http://localhost:3000/getuser/"+this.logindata.username).subscribe(data=>{
          this.phonenumber=data.phone
          this.profileinfo=data
          delete this.profileinfo._id
          console.log(this.profileinfo)

        })
      }
    })
  
   }

  ngOnInit(): void {
    
  }

}

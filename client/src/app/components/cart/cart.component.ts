import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { SharedService } from '../../sharedservice.service';
import { Subscription, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedcartService} from '../../sharedcartservice.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartdata:any
subtotal:any;
clickEventsubscription:Subscription;
  hotel: Object;
  id: string;
  data: any;
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

  this.data=JSON.parse(localStorage.getItem("cart"))
   // console.log(this.cartdata)
    //console.log(this.data)
    let index=this.data.findIndex(p=>p.hotelname==hotelname)
    let foodindex=this.data[index].foods.findIndex(p=>p.foodname==foodname)
    if(this.data[index].foods[foodindex].quantity==1){
     
    }
    else{
      this.data[index].foods[foodindex].quantity-=1
      localStorage.setItem("cart",JSON.stringify(this.data))
      this.refresh()
    }
  
}
remove($event,hotelname,foodname){
  //console.log("inc")
  this.data=JSON.parse(localStorage.getItem("cart"))
  
  let index=this.data.findIndex(p=>p.hotelname==hotelname)
  let foodindex=this.data[index].foods.findIndex(p=>p.foodname==foodname)
  this.data[index].foods.splice(foodindex,1)
  if(this.data.length==0){
    this.data=null
    localStorage.setItem("cart",null)
    this.refresh()
  }else{
  if(this.data[index].foods.length==0){
   this.data.splice(index,1)
   console.log(this.data)
   localStorage.setItem("cart",JSON.stringify(this.data))
    this.refresh()
  // this.refresh()
  }else{
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.refresh()
  }
}
    
 
}
checkout($event){
  event.preventDefault()
  this.router.navigate(["/checkout"])
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
    localStorage.setItem("subtotal",this.subtotal)
  }
   
    

  

}
  constructor(private route: ActivatedRoute,private httpclient:HttpClient,private sharedService:SharedService,private router:Router,private sharedcartService:SharedcartService) { 
    

  }

 
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
    this.hotel=data;
    })
    this.clickEventsubscription=    this.sharedService.getClickEvent().subscribe(()=>{
      this.refresh();
      })
  
    this.cartdata=JSON.parse(localStorage.getItem("cart"))
    if(this.cartdata.length==0){
      this.cartdata=null
    }else{
      this.subtotal=0
    for(var i=0;i<this.cartdata.length;i++)
    {
      for(var j=0;j<this.cartdata[i].foods.length;j++){
        this.subtotal+=(this.cartdata[i].foods[j].quantity*this.cartdata[i].foods[j].rate)
      }
    }
    localStorage.setItem("subtotal",this.subtotal)
   
  }
    
  }

}

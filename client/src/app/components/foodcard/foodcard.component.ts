import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import {CartComponent} from '../cart/cart.component';
import {SharedService} from '../../sharedservice.service'
import { SharedcartService } from 'src/app/sharedcartservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.css']
})
export class FoodcardComponent implements OnInit {
  @Input() food

   
  buttontoggle:boolean=false
  count:any=1;
  cartdata:any;
  clickEventsubscription:Subscription;
  id:any
  hotel:any;
  ince(){
    this.count+=1
  }
  dece(){
    if(this.count==1){

    }else{
      this.count-=1
    }
  }
  inc($event){
    
    this.cartdata=JSON.parse(localStorage.getItem("cart"))
   // console.log(this.cartdata)
   
    let index=this.cartdata.findIndex(p=> p.hotelname==this.hotel.restaurant_name)
    let foodindex=this.cartdata[index].foods.findIndex(p=>p.foodname==this.food.food_name)
    this.cartdata[index].foods[foodindex].quantity+=1
    this.count=this.cartdata[index].foods[foodindex].quantity
    localStorage.setItem("cart",JSON.stringify(this.cartdata))
    this.sharedService.sendClickEvent();
    this.ince()
    }
  dec($event){
      if(this.count==1){

      }else{
        this.count-=1
        this.cartdata=JSON.parse(localStorage.getItem("cart"))
   // console.log(this.cartdata)
    let index=this.cartdata.findIndex(p=> p.hotelname==this.hotel.restaurant_name)
    let foodindex=this.cartdata[index].foods.findIndex(p=>p.foodname==this.food.food_name)
    this.cartdata[index].foods[foodindex].quantity-=1
    localStorage.setItem("cart",JSON.stringify(this.cartdata))
      }
      this.sharedService.sendClickEvent();
     }
  add($event){
    event.preventDefault()
    this.buttontoggle=true

   this.cartdata=localStorage.getItem("cart")

    if(this.cartdata==null ){
     
      let data={
        hotelname:this.hotel.restaurant_name,
        foods:[{
          foodname:this.food.food_name,
          quantity:1,
          rate:parseInt(this.food.food_rate)
        }]
      }
      this.cartdata=[]
      this.cartdata.push(data)
      //console.log(this.cartdata)
        localStorage.setItem("cart",JSON.stringify(this.cartdata))
     
    }else if(!JSON.parse(this.cartdata).some(hotel=> hotel.hotelname===this.hotel.restaurant_name)){
      let data={
        hotelname:this.hotel.restaurant_name,
        foods:[{
          foodname:this.food.food_name,
          quantity:1,
          rate:parseInt(this.food.food_rate)
        }]
      }
      this.cartdata=JSON.parse(this.cartdata)
      this.cartdata.push(data)
      localStorage.setItem("cart",JSON.stringify(this.cartdata))

    }else{
      if(JSON.parse(this.cartdata).some(hotel=> hotel.hotelname===this.hotel.restaurant_name)){

        var index = JSON.parse(this.cartdata).findIndex(p=> p.hotelname==this.hotel.restaurant_name)
        let data=JSON.parse(this.cartdata)[index]
        if(data.foods.some(food=> food.foodname==this.food.food_name)){
          
            var foodindex=data.foods.findIndex(p=> p.foodname==this.food.food_name)
          this.count=data.foods[foodindex].quantity
        }
        else{
          let food ={
            foodname:this.food.food_name,
            quantity:1,
            rate:parseInt(this.food.food_rate)
          }

          data.foods.push(food)
          
          let cart=JSON.parse(this.cartdata)
          cart[index]=data
          localStorage.setItem("cart",JSON.stringify(cart))
          console.log(cart)
        }
      }
    }
    this.sharedService.sendClickEvent();
    
      
    
   
    
  }
  constructor(private route: ActivatedRoute,private httpclient:HttpClient,private sharedService:SharedService,private sharedcartservice:SharedcartService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
    this.hotel=data;
    })
   // this.cartdata=JSON.parse(localStorage.getItem("cart"))
   // let index=this.cartdata.findIndex(p=> p.hotelname==this.hotel.restaurant_name)
    //let foodindex=this.cartdata[index].foods.findIndex(p=>p.foodname==this.food.food_name)

   }

  ngOnInit() {
    this.clickEventsubscription=this.sharedcartservice.getincClickEvent.subscribe(()=>{
      this.ince();
    
      })
      
  }

}

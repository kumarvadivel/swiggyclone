import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantsdisplay',
  templateUrl: './restaurantsdisplay.component.html',
  styleUrls: ['./restaurantsdisplay.component.css']
})
export class RestaurantsdisplayComponent implements OnInit {
  restaurantdata:any;
  city:any;
  constructor(private httpclient:HttpClient,private route: ActivatedRoute) { 
    
    this.city = this.route.snapshot.paramMap.get('city');
    console.log(this.city)
    this.httpclient.get("http://localhost:3000/restaurants/"+this.city).subscribe(data=>{
      this.restaurantdata=data
      console.log(this.restaurantdata)
    })
  }

  ngOnInit(): void {
  }

}

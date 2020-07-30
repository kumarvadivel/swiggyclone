import { Component, OnInit, Input } from '@angular/core';
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-hotelcard',
  templateUrl: './hotelcard.component.html',
  styleUrls: ['./hotelcard.component.css']
})
export class HotelcardComponent implements OnInit {
  @Input() data:Data;
  
  restaurant($event){
    console.log("navig",this.data.city,this.data._id.$oid)
    let routestring='/restaurant/'+this.data.city+'/'+this.data._id.$oid
    this.router.navigate([routestring])
  }
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }

}

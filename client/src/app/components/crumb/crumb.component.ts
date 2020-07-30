import { Component, OnInit, Input } from '@angular/core';
import { Data, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.css']
})
export class CrumbComponent implements OnInit {
  

  
  @Input('data') hotels:any
 
  

  currentcity=localStorage.getItem("currentcity")
  id: string;
  hotel: Object;
  crumbstring:any;
  constructor(private route:ActivatedRoute,private httpclient:HttpClient) { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    console.log(this.hotels,"kk");
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
        this.hotel=data
        console.log(this.hotel)
        this.crumbstring="Home  /  "+this.currentcity+"  /  "+this.hotel.landmark+"  /  "+this.hotel.restaurant_name
    })
  }

  ngOnInit(): void {
    
  }

}

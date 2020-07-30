import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotelprofile',
  templateUrl: './hotelprofile.component.html',
  styleUrls: ['./hotelprofile.component.css']
})
export class HotelprofileComponent implements OnInit {
  id:any;
  hotel:any;
  constructor(private route: ActivatedRoute,private httpclient:HttpClient) { 
    this.id = this.route.snapshot.paramMap.get('id');
   // console.log(this.id);
    
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
        this.hotel=data
        console.log(this.hotel)

    })
  }

  ngOnInit(): void {
  }

}

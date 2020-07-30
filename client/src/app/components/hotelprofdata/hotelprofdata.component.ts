import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotelprofdata',
  templateUrl: './hotelprofdata.component.html',
  styleUrls: ['./hotelprofdata.component.css']
})
export class HotelprofdataComponent implements OnInit {
  id:any;
  hotel:any;
  constructor(private route: ActivatedRoute,private httpclient:HttpClient) { 
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
        this.hotel=data
        console.log(this.hotel)

    })
  }
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  id: any;
  hotel: any;

  constructor(private httpclient:HttpClient,private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpclient.get("http://localhost:3000/gethotel/"+this.id).subscribe(data=>{
      this.hotel=data
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-hotelfood',
  templateUrl: './hotelfood.component.html',
  styleUrls: ['./hotelfood.component.css']
})
export class HotelfoodComponent implements OnInit {
  id: any;
  fooddata:any;

  constructor(private httpclient:HttpClient, private route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpclient.get("http://localhost:3000/getfood/"+this.id).subscribe(data=>{
        this.fooddata=data
    })
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor() { }
  baseOrder;
  toppingOrder
  ngOnInit() {
    if(localStorage.getItem("base")=="undefined")
     this.baseOrder={name:"prod1-Base3"}
    if(localStorage.getItem("base")!="undefined")
    
     this.baseOrder=JSON.parse(localStorage.getItem("base"));

    if(localStorage.getItem("toppings")!="undefined")
     this.toppingOrder=JSON.parse(localStorage.getItem("toppings"));

  }

}

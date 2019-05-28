import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:object[]=[];
  constructor(private _SharedService:SharedService,private router:Router) { }
 
  viewProductDetails(id){   
    this.router.navigate(["product-details",id])
  }
  
  ngOnInit() {
    this.products=this._SharedService.productsList;
  }
}

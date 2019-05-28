import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:string="";
  personsNumber:number=1;
  selectedProduct;
  toppingsOptionsChecked = [];
  toppingsOptionsMap={};
  form: FormGroup;
  toppingOrders = [];
  extraOrders=[];
  maxError:boolean=false;
  selectedRequired=true;
  totalPrice;
  selectedBase;
  totalSum=0;
  constructor(private _SharedService:SharedService,private _Router:Router,private route:ActivatedRoute,private _FormBuilder: FormBuilder) { 
    
    this.route.params.subscribe(params => { this.productId = params['id']; 
    this._SharedService.productsList.forEach(product => {
      if(product.product_id==this.productId)
         this.selectedProduct=product as any;
    });
    this.form = this._FormBuilder.group({
      "personsNumber": this.personsNumber,
      extraOrders: new FormArray([], this.minSelectedToppingsCheckboxes(1)),
      toppingOrders: new FormArray([], this.minSelectedToppingsCheckboxes(1))
    });

    // async orders
    if(this.selectedProduct.toppings.options)
    {
      of(this.selectedProduct.toppings.options).subscribe(toppingOrders => {
        this.toppingOrders = this.selectedProduct.toppings.options;
        this.addCheckboxes("toppings");
      });
    }
   if(this.selectedProduct.extras.options)
   {
    of(this.selectedProduct.extras.options).subscribe(extraOrders => {
      this.extraOrders = this.selectedProduct.extras.options;
      this.addCheckboxes("extras");
    });

   }
    
  });
 

  }

  private addCheckboxes(type) {
    if(type=="toppings")
    {
      this.toppingOrders.map((o, i) => {
        const tControl = new FormControl(i === 0); // if first item set to true, else false
        (this.form.controls.toppingOrders as FormArray).push(tControl);
      });
    }
    else if(type=="extras")
    {
      this.extraOrders.map((o, i) => {
        const eControl = new FormControl(i === 0); // if first item set to true, else false
        (this.form.controls.extraOrders as FormArray).push(eControl);
      });
    }
    
  }
  
  
 

submit() {
  const selectedToppingsOptions = this.form.value.toppingOrders
    .map((v, i) => v ? this.toppingOrders[i]: null)
    .filter(v => v !== null);
  localStorage.setItem('base',JSON.stringify(this.selectedBase))
  localStorage.setItem('toppings',JSON.stringify(selectedToppingsOptions,))
  this._Router.navigate(["order-details"]);
}
 minSelectedToppingsCheckboxes(min = 0) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);
    if(totalSelected>2)
        var max =true
    return totalSelected >= min && this.selectedRequired && !max  ? null : { required: true };
  };

  return validator;
}

  ngOnInit() {
    if(this.selectedProduct.base.options&&this.selectedProduct.toppings)
    this.totalPrice=this.selectedProduct.price_net+(this.selectedProduct.base.options[this.selectedProduct.base.options.length-1]).price+(this.selectedProduct.toppings.options[0]).price;
  }

  selectRequiredData(val){
    this.selectedRequired=true;
    this.selectedBase=val;
    this.totalPrice=this.selectedProduct.price_net+val.price;
  }
  getCheckboxValue(val,test){
      //We want to get back what the name of the checkbox represents, so I'm intercepting the event and
      //manually changing the value from true to the name of what is being checked.
  
      //check if the value is true first, if it is then change it to the name of the value
      //this way when it's set to false it will skip over this and make it false, thus unchecking
      //the box
      
     
    var selectedChecks=[];
    var that=this;

    this.form.controls.toppingOrders.value.forEach(function(value,key)
    {
      if(value==true)
      {
        selectedChecks.push(value)
        that.selectedProduct.toppings.options[key].isSelected=true;

      }
      else 
        that.selectedProduct.toppings.options[key].isSelected=false;
        
    });
    var selectedForSum=[];
    this.selectedProduct.toppings.options.forEach(function(val,key)
    {
        if(val.isSelected==true)
        {
          selectedForSum.push(val.price);
        }
        
     
    })
    
    this.totalSum=0;
    for(var i=0;i<selectedForSum.length;i++){
      this.totalSum+=selectedForSum[i];
    }
    console.log(this.totalSum)
    
    if(selectedChecks.length>2)
     this.maxError=true;
    else
     this.maxError=false
  }
}


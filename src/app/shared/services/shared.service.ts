
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //simulate for backend endpoint response 
  productsList=[
      {
        "product_id": "123456",
        "Product_image": "../../assets/images/food5.png",
        "product": "Caterwings Breakfast Package: Bagels and OJ",
        "product_description": "Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package: Bagels and OJ",
        "product_description_long": "Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package: Bagels and OJ Package: Bagels and OJ Caterwings Breakfast Package 1 x Bottle of Tropicana Orange Juice (330ml)",
        "price": 7,
        "price_gross": 840,
        "price_net": 700,
        "product_variation_id": 37468,
        "person_number": 20,
        "base": 
        {
          "id": 5461,
          "name": "Breakfast Packages Orange Juice",
          "quantity_minimum": 1,
          "quantity_maximum": 1,
          "position": 9,
          "options": [
            {
              "id": "15786",
              "name": "prod1-Base1",
              "price": 0.00,
            },
            {
              "id": "15732",
              "name": "prod1-Base2",
              "price": 10.00,
            },
            {
              "id": "12236",
              "name": "prod1-Base3",
              "price": 20.00,
            },
          ]
        },
        "toppings": 
        {
            "id": 3860,
            "name": "Bagel",
            "quantity_minimum": 1,
            "quantity_maximum": 2,
            "position": 1,
            "options": [
              {
                "id": "7923",
                "name": "Smoked salmon, cream cheese & dill bagel - (COLD)",
                "price": 0.00,
              },
              {
                "id": "7924",
                "name": "Gluten free - crushed avocado and tomato bagel - (COLD)",
                "price": 0.00,
              },
              {
                "id": "7925",
                "name": "Salt beef with gherkin and honey mustard mayo bagel",
                "price": 2.00,
              },
              {
                "id": "7926",
                "name": "Sucuk, halloumi and rocket bagel - (HOT)",
                "price": 1.50,
              }
            ]
        },
         
        "sauces": 
        {
          "id": 5461,
          "name": "Breakfast Packages Orange Juice",
          "quantity_minimum": 1,
          "quantity_maximum": 1,
          "position": 9,
          "options": [
            {
              "id": "3727",
              "name": "product1-sause1",
              "price": 0.00,
            },
            {
              "id": "2312",
              "name": "product1-sause2",
              "price": 0.00,
            },
            {
              "id": "9833",
              "name": "product1-sause3",
              "price": 0.00,
            }
          ]
        } ,

        "extras": 
        {
            "id": 3860,
            "name": "Bagel",
            "quantity_minimum": 0,
            "quantity_maximum": 4,
            "position": 1,
            "options": [
              {
                "id": "9837",
                "name": "prod1-extra1",
                "price": 3.00,
              },
              {
                "id": "3827",
                "name": "prod1-extra2",
                "price": 0.00,
              },
              {
                "id": "1224",
                "name": "prod1-extra3",
                "price": 0.00,
              },
              {
                "id": "9382",
                "name": "prod1-extra4",
                "price": 1.50,
              }
            ]
        },
       
      },
        {
        "product_id": "78910",
        "Product_image": "../../assets/images/food6.jpg",
        "product": "Tropicana Orange Juice",
        "product_description": "1 x Bottle of Tropicana Orange Juice (330ml) Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package: Bagels and OJ",
        "product_description_long": "1 x Bottle of Tropicana Orange Juice (330ml) 1 x Bottle of Tropicana Orange Juice (330ml) Caterwings Breakfast Caterwings Breakfast Package: Bagels and OJ Caterwings Breakfast Package:1 x Bottle of Tropicana Orange Juice (330ml) ",
        "price": 3,
        "price_gross": 360,
        "price_net": 300,
        "product_variation_id": 14475,
        "person_number": 1,
        "base":{},
        "toppings": {},
        "sauces":{},
        "extras":{}

       }
                
    ];

  
  
  constructor() { }
}

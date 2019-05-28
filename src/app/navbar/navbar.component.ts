import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showCart=false;
  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    if(localStorage.getItem("base")!=null||localStorage.getItem("toppings")!=null)
       this.showCart=true;
       
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }

}

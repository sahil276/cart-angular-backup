import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allProducts:any = [];
    constructor(private api:ApiService){}

    ngOnInit(): void {
      this.api.get_all_products().subscribe(
        (data:any) => {
          this.allProducts = data.products;
        }
      )
    }

}

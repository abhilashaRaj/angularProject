import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/app/data-type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts: undefined | product[];
  trendyProducts:undefined |product[];

  constructor(private products : ProductService){}
 ngOnInit():void{
  this.products.popularProducts().subscribe((data)=>{
    console.warn(data);
    this.popularProducts=data;
  });

  this.products.trendyProducts().subscribe((data)=>{
    this.trendyProducts=data;
  });
 }
 
}

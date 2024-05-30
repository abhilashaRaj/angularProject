import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined | product[]
constructor(private acticatedRoute : ActivatedRoute , private product:ProductService){}

ngOnInit(): void{
  let query=this.acticatedRoute.snapshot.paramMap.get('query');
  console.warn(query)
  query && this.product.searchProducts(query).subscribe((reult)=>{
    this.searchResult=reult;
  })
}
}

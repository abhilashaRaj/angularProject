import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../data-type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  data=['anil','abc','ed'];
  userDetails=[{name:'abhi' , age:'3' },
  {name:'abhilasha' , age:'3' }
  ]
}

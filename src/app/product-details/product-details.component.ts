import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productData:undefined | product;
  productQuantity:number=1
  removeCart = false;
  constructor(private activeRoute : ActivatedRoute , private product : ProductService){}
  ngOnInit():void
  {
    let productId=this.activeRoute.snapshot.paramMap.get('productId');
    console.warn( productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.warn(result)
      this.productData=result;

      let cartData=localStorage.getItem('localCart');
      if(productId && cartData)
        {
           let items= JSON.parse(cartData);
           items = items.filter((item : product)=>productId== item.id.toString())
           if(items.length){
            this.removeCart=true;
           }
           else{
            this.removeCart=false
           }
        }
    })

  }
  handleQuantity(val :string){
    if(this.productQuantity<20 && val==='plus')
      {
          this.productQuantity+=1
      }
      else if(this.productQuantity>1 && val==='min')
        {
          this.productQuantity-=1
        }
  }
  AddToCart()
  {
    if(this.productData)
      {
        this.productData.quantity=this.productQuantity;
        if(!localStorage.getItem('user'))
          {
            console.warn(this.productData);
            this.product.localAddToCart(this.productData);
            this.removeCart=true
          }
          else{
            console.warn("user logged in")
            let user=localStorage.getItem('user')
            let userId=user && JSON.parse(user).id
            console.warn(userId)
            let cartData = {
              productData: this.productData,
              userId: userId
          };
            console.warn(cartData)
            
          }
      }
      
  }
  removeToCart(productId : string){
   this.product.removeItemFromCart(productId)
   this.removeCart=false
  }
}

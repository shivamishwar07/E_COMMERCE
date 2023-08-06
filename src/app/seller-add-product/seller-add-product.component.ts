import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined
  constructor(private procuct:ProductService ){}
 submit(data:product){
  console.log(data)
  this.procuct.addProduct(data).subscribe((result)=>{
    console.warn(result);
    if(result){
      this.addProductMessage="Sucessfull"
    }
    else
    {
      this.addProductMessage="Something went wrong"
    }
    setTimeout(()=>
      (this.addProductMessage=undefined),1000)
  });
 }
}

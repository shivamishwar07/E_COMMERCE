import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularImage:undefined|product[]
  constructor(private product:ProductService){}
  ngOnInit(){
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularImage=data
    })
  }
}
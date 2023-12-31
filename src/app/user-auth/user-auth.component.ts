import { Component } from '@angular/core';
import { Login, Signup, cart } from '../data-type';
import { UserService } from '../services/user.service';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean=true
  authError:undefined|string=''
  authValidation:boolean=true;
  constructor(private user:UserService, private product:ProductService){}
signUp(data:Signup){
  if(data.email && data.name && data.password)
this.user.userSignup(data); 
}
Login(data:Login){
  this.authError=''
  if(data.email && data.password){
  this.user.userLogin(data);
  this.localCartToRemoteCart() ;
  }
this.user.isLoginError.subscribe((isError) => {
  if (isError) {
    this.authError = "Login Failed Check Email or Password"
  }
  else{
    alert("Shi hai")
    // console.log("Bhai yha tak to theek hai");
   
  }
})
setTimeout(()=>
  (this.authValidation=false),1000)
setTimeout(()=>
  (this.authError=undefined),1000)
}

ngOnInit(){
  this.user.userAuthReload();
}
openLogin(){
this.showLogin=true
}
openSignup(){
this.showLogin=false
}
 localCartToRemoteCart(){
   let data=localStorage.getItem('localCart');
   //let user=localStorage.getItem('user');
   //let userId=user && JSON.parse(user).id;
   if(data){
    console.log(data);
    
      let cartDataList:product[]=JSON.parse(data)
      let user=localStorage.getItem('user');
      let userId=user && JSON.parse(user).id;


     //let cartDataList:product[]=JSON.parse(data);
     cartDataList.forEach((product: product,index)=>{
         let cartData: cart={
          ...product,
          productId:product.id,
          userId,
         };
         delete cartData.id;
         setTimeout(() => {
           this.product.addToCart(cartData).subscribe((result)=>{
             if(result){
            console.log("Item Stored in db");
           }
          })
          if(cartDataList.length===index+1){
          localStorage.removeItem('localCart')
          }
      }, 500);
       //if(cartDataList.length===index+1)
       //localStorage.removeItem('localCart')
   });
   }
//   setTimeout(()=>{
//     this.product.getCartList(userId)
//   },2000)
   }
   
  }


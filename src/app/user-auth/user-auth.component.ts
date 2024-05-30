import { Component } from '@angular/core';
import { SignUp, login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin:boolean=true;
  authError:string="";
  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.userAuthReload();
  }
  SignUp(data:SignUp)
  {
     
     this.user.userSignUp(data)
  }
  login(data:login){
   this.user.userLogin(data)
   this.user.invaliduserAuth.subscribe((result)=>{
     
     if(result)
      {
        this.authError="Please Enter Valid user details";
      }
   })
  }
  openSignUp()
  {
    this.showLogin=false;
  }
  openLogin()
  {
    this.showLogin=true;
  }
}

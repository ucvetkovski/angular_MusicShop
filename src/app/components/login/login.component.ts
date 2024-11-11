import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreServiceService } from '../../services/store-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FlexLayoutModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  error: string = "";

  constructor(private store : StoreServiceService, private router : Router, private userService : UserService){}

  login() {
    const data = { email: this.email, password: this.password };
    this.store.postData('login', data).subscribe(
      response => {
        this.userService.setUser(response);
        if (response.id_role === 1) {
          this.router.navigate(["/dashboard"]);
        }
        else {
          this.router.navigate(["/"]);
        }
      },
      error => {
        this.error = error.error.message;
        setTimeout(() => {
          this.error = ""
        }, 3000);
      }
    );
  }

}

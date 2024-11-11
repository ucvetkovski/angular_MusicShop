import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoreServiceService } from '../../services/store-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationService } from '../../services/notifications.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: Array<any> = new Array<any>;
  constructor(
    private store: StoreServiceService,
    private notifService: NotificationService,
    private userService: UserService,
    private formBuilder: FormBuilder) { }
  album?: any;
  data: any;
  user: any;
  address: string = "";
  first_name: string = "";
  last_name: string = "";
  checkout_form!: FormGroup;
  message: string = '';

  ngOnInit(): void {
    this.getCart();
    this.store.getData("albums").subscribe(r => {
      this.data = r;
    })
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
    this.checkout_form = this.formBuilder.group({
      email: [this.user ? this.user.email : '', [Validators.required, Validators.email]],
      first_name: [{ value: this.user ? this.user.first_name : '', disabled: this.user }, Validators.required],
      last_name: [{ value: this.user ? this.user.last_name : '', disabled: this.user }, Validators.required],
      address: [this.user ? this.user.address : '', Validators.required],
      card_number: ['', [Validators.required,Validators.pattern('[0-9]{16}')]],
      cvv: ['', [Validators.required,Validators.pattern('[0-9]{3}')]]
    });
  }

  getCart() {
    let cartJSON : any = localStorage.getItem('cart');
    this.cartItems = JSON.parse(cartJSON);
  }

  getAlbum(id: string) {
    return this.data.find((a: any) => a.id_album === id);
  }

  getTotal() {
    let total = 0;
    this.cartItems.forEach(e => {
      total += this.getAlbum(e.id).value * e.count;
    });
    return total.toFixed(2);
  }

  removeItem(id: string) {
    let item :any;
    this.cartItems.forEach(e => {
      if (e.id === id) {
        item = e;
      }
    });
    const index = this.cartItems.indexOf(item);
    if (item.count > 1) {
      item.count--;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    else{
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    this.getCart();
  }

  addItem(id: string) {
    let item :any;
    this.cartItems.forEach(e => {
      if (e.id === id) {
        item = e;
      }
    });
    item.count++;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.getCart();
  }

  checkout() {
    if (this.checkout_form.valid) {
      let order: any = {};
      let itemsArray: any[] = [];
      this.cartItems.forEach(i => {
        itemsArray.push(i);
      });

      if (this.user) {
        order = {
          user: this.user.id_user,
          email: this.checkout_form.value.email,
          address: this.checkout_form.value.address,
          items: itemsArray,
          card: this.checkout_form.value.card_number
        }
      }
      else {
        order = {
          email: this.checkout_form.value.email,
          address: this.checkout_form.value.address,
          items: itemsArray,
          card: this.checkout_form.value.card_number
        }
      }
      
      this.store.postData('createOrder', order).subscribe(
        response => {
          localStorage.setItem('cart', JSON.stringify([]));
          this.getCart();
          this.notifService.show(response.message);
          },
        error => {
          this.notifService.show(error.error.message);
        }
      );
      }
    }
  }

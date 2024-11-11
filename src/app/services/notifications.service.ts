import { Injectable } from '@angular/core';
import { Subject, count } from 'rxjs';
//import { Album } from '../../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<{ message: string, item: any }>();
  notification = this.notificationSubject.asObservable();

  s: any = localStorage.getItem('cart');
  cart: Array<any> = JSON.parse(this.s) ? JSON.parse(this.s) : [];

  show(message:string) {
    this.notificationSubject.next({ message: message, item: null });
  }

  add(album: any) {
    if (this.cart.length > 0) {
      let p = this.cart.find(a => a.id == album.id_album);
      if (p) {
        p.count++;
      }
      else{
        this.cart.push({
          id: album.id_album,
          count: 1
        });
      }
    }
    else{
        this.cart.push({
          id: album.id_album,
          count: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    
    this.notificationSubject.next({message: 'Product sucessfully added to the cart!', item: album });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoreServiceService } from '../../../services/store-service.service';
import { CardNumberFormatPipe } from "../../../pipes/card-number-format.pipe";

@Component({
    selector: 'app-admin-orders',
    standalone: true,
    templateUrl: './admin-orders.component.html',
    styleUrl: './admin-orders.component.css',
    imports: [CommonModule, CardNumberFormatPipe]
})
export class AdminOrdersComponent {
  data: any;
  orders: Array<any> = [];
  totalPages: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;
    constructor(private store: StoreServiceService) { }
  ngOnInit(): void {
    this.getOrders();
  }

    getOrders(): void {
    this.store.getData('all_orders').subscribe(data => {
      this.data = data;
      this.orders = data;
      this.totalPages = Math.ceil(this.orders.length / this.pageSize);
      this.loadCurrentPageData();
    });
  }

    loadCurrentPageData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.orders = this.data.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCurrentPageData();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCurrentPageData();
    }
  }
}

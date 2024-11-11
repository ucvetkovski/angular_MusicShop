import { Component } from '@angular/core';
import { StoreServiceService } from '../../../services/store-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {
    data: any;
  users: Array<any> = [];
  totalPages: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;
    constructor(private store: StoreServiceService) { }
  ngOnInit(): void {
    this.getUsers();
  }

    getUsers(): void {
    this.store.getData('users').subscribe(data => {
      this.data = data;
      this.users = data;
      this.totalPages = Math.ceil(this.users.length / this.pageSize);
      this.loadCurrentPageData();
    });
  }

    loadCurrentPageData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.users = this.data.slice(startIndex, endIndex);
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

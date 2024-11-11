import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreServiceService } from '../../../services/store-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationService } from '../../../services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-albums',
  standalone: true,
  imports: [CommonModule,FormsModule,FlexLayoutModule],
  templateUrl: './admin-albums.component.html',
  styleUrl: './admin-albums.component.css'
})
export class AdminAlbumsComponent {
  data: any;
  albums: Array<any> = [];
  totalPages: number = 0;
  pageSize: number = 6;
  currentPage: number = 1;
  
  constructor(private store: StoreServiceService, private notifService: NotificationService, private router: Router) { }
  ngOnInit(): void {
    this.getAlbums();
  }

    getAlbums(): void {
    this.store.getData('albums').subscribe(data => {
      this.data = data;
      this.albums = data;
      this.totalPages = Math.ceil(this.albums.length / this.pageSize);
      this.loadCurrentPageData();
    });
  }

    loadCurrentPageData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.albums = this.data.slice(startIndex, endIndex);
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

   edit(id: any) {
    this.router.navigate(
      [{ outlets: { admin_panel: ['edit_album'] } }],
      { queryParams: { id: id } }
    );
  }

  delete(album_id: number) {
    this.store.postData('deleteAlbum',{id: album_id}).subscribe(
      response => { 
        this.getAlbums();
        this.notifService.show(response.message);
       },
      error => { console.log(error); }
    )
  }
}

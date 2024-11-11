import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StoreServiceService } from '../../services/store-service.service';
//import { Album } from '../../../models/artist.model';
import { AlbumModuleModule } from "../album/album-module.module";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FilterService } from '../../services/filter.service';

@Component({
    selector: 'app-album-list',
    standalone: true,
    templateUrl: './album-list.component.html',
    styleUrl: './album-list.component.css',
    imports: [CommonModule, AlbumModuleModule,FlexLayoutModule, ButtonsModule]
})
export class AlbumListComponent {
  data: any;
  totalPages: number = 0;
  pageSize: number = 6;
  currentPage: number = 1;
  albums: Array<any> = [];


  constructor(private store: StoreServiceService, private filterService: FilterService) { }
  ngOnInit(): void {
    this.getAlbums();
    this.filterService.serviceFilter.subscribe(() => this.load());
  }

  load(): void {
    this.filterService.filterResult$.subscribe(
      (data:any) => {
        this.data = data;
        this.albums = data;
        this.totalPages = Math.ceil(this.albums.length / this.pageSize);
        this.loadCurrentPageData();
        this.currentPage = 1;
      }
    );
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
}

import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreServiceService } from '../../services/store-service.service';
import { Artist, Format, Genre } from '../../../models/artist.model';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-sidebar',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, StoreServiceService, FormsModule],
  templateUrl: './shop-sidebar.component.html',
  styleUrl: './shop-sidebar.component.css'
})
export class ShopSidebarComponent implements OnInit {
  data: any;
  genres: any;
  formats: any;
  albumsGenres: any;
  filterGenres: Array<string> = [];
  filterFormats: Array<string> = [];
  keyword: string = '';

  constructor(private store: StoreServiceService, private filterService: FilterService) { }
  
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.store.getData("albums").subscribe(a => {
      this.data = a;
    })
    this.store.getData("genres").subscribe(g => {
      this.genres = g;
    })
    this.store.getData("formats").subscribe(f => {
      this.formats = f;
    })
    this.store.getData("albumsGenres").subscribe(ag => {
      this.albumsGenres = ag;
    })
  }

  filter(event: any): void {
    let keyword = this.keyword;
    if (event.target.className == "genre") {
      let id = event.target.value;
        if (event.target.checked) {
          this.filterGenres.push(id);
        }
        else {
          let e = this.filterGenres.indexOf(id);
          this.filterGenres.splice(e, 1);
        }
    }
    else if (event.target.className == "format") {
      let id = event.target.value;
        if (event.target.checked) {
          this.filterFormats.push(id);
        }
        else {
          let e = this.filterFormats.indexOf(id);
          this.filterFormats.splice(e, 1);
      }
    }
    this.filterService.filter(this.filterGenres, this.filterFormats, this.data, this.albumsGenres, keyword);
  }
}

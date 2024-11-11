import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule} from 'ngx-bootstrap/carousel'
import { StoreServiceService } from '../../services/store-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { Album } from '../../../models/artist.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, HttpClientModule, FlexLayoutModule, RouterModule],
  templateUrl: './album-carousel.component.html',
  styleUrl: './album-carousel.component.css'
})
export class AlbumCarouselComponent {
  data: any;
  //albums: Array<any> = [];

  constructor(private store: StoreServiceService, private router: Router) { }
  
  ngOnInit(): void {
    this.store.getData("albums").subscribe(data => {
      this.data = this.selectRandomAlbums(data.filter((album : any) => album.in_stock > 0), 6);
    })
  }

  selectRandomAlbums(allAlbums: any[], count: number): any[] {
    const selectedAlbums: any[] = [];
    const totalAlbums = allAlbums.length;

    count = Math.min(count, totalAlbums);

    const indices = Array.from({ length: totalAlbums }, (_, i) => i);

    indices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < count; i++) {
      const index = indices[i];
      selectedAlbums.push(allAlbums[index]);
    }

    return selectedAlbums;
  }
  
  viewDetails(id: any) {
     this.router.navigate(['/album'], { queryParams: { id: id.id_album } });
  }
}

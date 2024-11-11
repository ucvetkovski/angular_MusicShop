import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
//import { Album } from '../../../models/artist.model';
import { CommonModule } from '@angular/common';
import { StoreServiceService } from '../../services/store-service.service';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationService } from '../../services/notifications.service';
import { __param } from 'tslib';
import { DurationPipe } from '../../pipes/duration.pipe';


@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule,FlexLayoutModule, DurationPipe]
})
export class AlbumPageComponent implements OnInit {
  album!: any;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private store: StoreServiceService,
    private notifService: NotificationService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams["id"];
    this.store.getData("albumDataById", { id : id}).subscribe(r => {
      this.album = r;
    })

  }
  getGenres(genres: Array<string>) {
    return this.store.getGenres(genres, this.data);
  }

  addToCart(album: any) {
    this.notifService.add(album);
  }
}

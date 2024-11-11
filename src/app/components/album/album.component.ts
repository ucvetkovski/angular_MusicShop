import { Component, Input } from '@angular/core';
// import { Album } from '../../../models/artist.model';
import { StoreServiceService } from '../../services/store-service.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NotificationService } from '../../services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  @Input() album!: any;

  constructor(private notifService: NotificationService, private router : Router) { }
  
  addToCart(album: any) {
    this.notifService.add(album);
  }

  viewDetails(id: any) {
     this.router.navigate(['/album'], { queryParams: { id: id.id_album } });
  }
}

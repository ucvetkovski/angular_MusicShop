import { Component } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { CommonModule } from '@angular/common';
import { AlbumCarouselComponent } from '../album-carousel/album-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShopComponent, AlbumCarouselComponent,FlexLayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumCarouselComponent } from './components/album-carousel/album-carousel.component';
import { StoreServiceService } from './services/store-service.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { AppModule } from './app.module';
import { AlbumModuleModule } from './components/album/album-module.module';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopComponent } from "./components/shop/shop.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';


@Component({
    selector: 'app-root',
    standalone: true,
    providers: [StoreServiceService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        FooterComponent,
        ButtonsModule,
        CommonModule,
        NavigationComponent,
        CarouselModule,
        AlbumModuleModule,
        FlexLayoutModule,
        NotificationComponent, HomeComponent, CartComponent, HttpClientModule]
})

  
export class AppComponent {
  title = 'angularProjekat';

  }

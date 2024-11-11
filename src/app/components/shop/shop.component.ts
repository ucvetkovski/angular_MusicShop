import { Component } from '@angular/core';
import { AlbumListComponent } from "../album-list/album-list.component";
import { ShopSidebarComponent } from "../shop-sidebar/shop-sidebar.component";
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [AlbumListComponent, ShopSidebarComponent, FlexLayoutModule]
})
export class ShopComponent {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { StoreServiceService } from '../../services/store-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,FlexLayoutModule, ButtonsModule, RouterModule
  ],
  providers: [StoreServiceService],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModuleModule {

 }

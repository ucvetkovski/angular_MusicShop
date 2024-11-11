import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumModuleModule } from './components/album/album-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AlbumModuleModule,
    FlexLayoutModule,
    ButtonsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

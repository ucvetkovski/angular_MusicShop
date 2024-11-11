import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreServiceService } from '../../../services/store-service.service';
import { NotificationService } from '../../../services/notifications.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-edit-page',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule, HttpClientModule],
  templateUrl: './admin-edit-page.component.html',
  styleUrl: './admin-edit-page.component.css'
})
export class AdminEditPageComponent {

  prices: any;
  album!: any;
  edit_album_form!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private store: StoreServiceService,
    private notificationService: NotificationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams["id"];
    this.store.getData("albumDataById", { id : id}).subscribe(r => {
      this.album = r;
    })
    this.edit_album_form = this.formBuilder.group({
      title: [this.album? this.album.title: '', Validators.required],
      in_stock: [this.album? this.album.in_stock: '', Validators.required],
      price: [this.album? this.album.id_price : '',Validators.required]
    })
  }

  edit() {
    let data: any = {};
    if (this.edit_album_form.valid) {
      data = {
        title: this.edit_album_form.value.title,
        in_stock: this.edit_album_form.value.in_stock,
        price: this.edit_album_form.value.price
      }

      this.store.postData('updateAlbum', data).subscribe(
        response => {
          //redirect to admin_albums
          this.notificationService.show(response.message);
        },
        error => {
          this.notificationService.show(error.error.message);
        }
      )
    }
  }

}

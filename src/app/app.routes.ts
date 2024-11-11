import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUsersComponent } from './components/admin-panel/admin-users/admin-users.component';
import { AdminAlbumsComponent } from './components/admin-panel/admin-albums/admin-albums.component';
import { AdminEditPageComponent } from './components/admin-panel/admin-edit-page/admin-edit-page.component';
import { AdminOrdersComponent } from './components/admin-panel/admin-orders/admin-orders.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album', component: AlbumPageComponent },
  { path: 'cart', component: CartComponent }, 
  { path: 'author', component: AuthorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'dashboard', component: AdminPanelComponent, canActivate : [AuthGuard],
    children: [
      {
        path: "",
        component: AdminUsersComponent,
        outlet: "admin_panel"
      },
      {
        path: "users",
        component: AdminUsersComponent,
        outlet: "admin_panel"
      },
      {
        path: "albums",
        component: AdminAlbumsComponent,
        outlet: "admin_panel"
      },
      {
        path: "edit_album",
        component: AdminEditPageComponent,
        outlet: "admin_panel"
      },
      {
        path: "orders",
        component: AdminOrdersComponent,
        outlet: "admin_panel"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

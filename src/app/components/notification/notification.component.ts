import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../services/notifications.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotificationComponent implements OnInit {
  message: string | null = null;
  item: any | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification.subscribe(notification => {
      this.message = notification.message;
      this.item = notification.item;
      setTimeout(() => {
        this.message = null;
        this.item = null;
      }, 3000);
    });
  }
}

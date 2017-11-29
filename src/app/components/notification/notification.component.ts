import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  oNotice: Notification;

  constructor() {
  }

  ngOnInit() {
  }

  notify() {
    this.oNotice = new Notification('Notification', {
      body: 'Notification::Notification::Notification',
      icon: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/8e/AppleSiriIcon2017.png/128px-AppleSiriIcon2017.png'
    });
  }
}

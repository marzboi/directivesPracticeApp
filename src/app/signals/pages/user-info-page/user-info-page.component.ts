import { Component, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent {
  private usersService = inject(UserServiceService);

  public userId = signal(1);
}

import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {


  public sidebarItems = [
    { label: 'Listado', icons: 'label', url: './list' },
    { label: 'Anadir', icons: 'add', url: './new-hero' },
    { label: 'Buscar', icons: 'search', url: './search' }
  ]

  /**
   *
   */
  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  get user(): User | undefined {
    return this.AuthService.currentUser;
  }

  onLogout(): void {
    this.AuthService.logout()
    this.router.navigate(['/auth/login'])
  }

}

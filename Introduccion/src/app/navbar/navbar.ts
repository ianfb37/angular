import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../theme.service';


/**
 * @title Navbar with Halloween theme
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html',
  styleUrl: 'navbar.css',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class NavbarComponent {
  isHalloweenMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.halloweenMode$.subscribe(mode => {
      this.isHalloweenMode = mode;
    });
  }

  toggleHalloweenMode() {
    this.themeService.setHalloweenMode(!this.isHalloweenMode);
  }
}
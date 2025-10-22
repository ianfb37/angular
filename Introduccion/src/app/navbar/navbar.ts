// navbar.ts
import { Component, inject, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatMenuModule, MatMenu } from '@angular/material/menu'; // Cambiar a MatMenu
import { NgClass } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'toolbar',
  templateUrl: 'navbar.html',
  styleUrl: 'navbar.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, NgClass],
})
export class ToolbarOverviewExample {
  private themeService = inject(ThemeService);
  isHalloweenMode = this.themeService.halloweenMode;

  // Cambiar a MatMenu en lugar de MatMenuTrigger
  @ViewChild('mobileAppMenu') mobileAppMenu!: MatMenu;

  toggleHalloweenMode() {
    this.themeService.toggleHalloweenMode();
  }
}
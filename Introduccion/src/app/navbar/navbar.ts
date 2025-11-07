// src/app/navbar/navbar.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  currentTheme: Theme = 'normal';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  onHalloweenToggle(event: any) {
    if (event.target.checked) {
      this.themeService.setTheme('halloween');
    } else if (this.currentTheme === 'halloween') {
      this.themeService.setTheme('normal');
    }
  }

  onNavidadToggle(event: any) {
    if (event.target.checked) {
      this.themeService.setTheme('navidad');
    } else if (this.currentTheme === 'navidad') {
      this.themeService.setTheme('normal');
    }
  }

  isHalloweenActive(): boolean {
    return this.currentTheme === 'halloween';
  }

  isNavidadActive(): boolean {
    return this.currentTheme === 'navidad';
  }
}
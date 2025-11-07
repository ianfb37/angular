// src/app/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'normal' | 'halloween' | 'navidad';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('normal');
  public currentTheme$ = this.currentTheme.asObservable();

  setTheme(theme: Theme) {
    this.currentTheme.next(theme);
    localStorage.setItem('appTheme', theme);
  }

  toggleHalloween() {
    const newTheme = this.currentTheme.value === 'halloween' ? 'normal' : 'halloween';
    this.setTheme(newTheme);
  }

  toggleNavidad() {
    const newTheme = this.currentTheme.value === 'navidad' ? 'normal' : 'navidad';
    this.setTheme(newTheme);
  }

  loadInitialTheme() {
    const savedTheme = localStorage.getItem('appTheme') as Theme;
    if (savedTheme) {
      this.currentTheme.next(savedTheme);
    }
  }

  getCurrentTheme(): Theme {
    return this.currentTheme.value;
  }
}
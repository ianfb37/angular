// src/app/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private halloweenMode = new BehaviorSubject<boolean>(false);
  public halloweenMode$ = this.halloweenMode.asObservable();

  toggleHalloweenMode() {
    const newMode = !this.halloweenMode.value;
    this.halloweenMode.next(newMode);
    localStorage.setItem('halloweenMode', JSON.stringify(newMode));
  }

  setHalloweenMode(enabled: boolean) {
    this.halloweenMode.next(enabled);
    localStorage.setItem('halloweenMode', JSON.stringify(enabled));
  }

  loadInitialTheme() {
    const savedMode = localStorage.getItem('halloweenMode');
    if (savedMode) {
      this.halloweenMode.next(JSON.parse(savedMode));
    }
  }
}
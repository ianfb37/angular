// theme.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isHalloweenMode = signal(false);
  
  halloweenMode = this.isHalloweenMode.asReadonly();

  toggleHalloweenMode() {
    this.isHalloweenMode.set(!this.isHalloweenMode());
  }

  setHalloweenMode(mode: boolean) {
    this.isHalloweenMode.set(mode);
  }
}
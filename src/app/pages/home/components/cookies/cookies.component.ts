// cookies.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
})
export class CookiesComponent {
  constructor() {}

  acceptCookies() {
    // Logica pentru acceptarea cookie-urilor
    // De exemplu, puteți seta un flag în localStorage
    localStorage.setItem('cookiesAccepted', 'true');
  }
}

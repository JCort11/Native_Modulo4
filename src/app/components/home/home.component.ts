import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase-core';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  token = 'Cargando token Firebase...';

  constructor(private router: RouterExtensions) {
    this.loadToken();
  }

  async loadToken() {
    try {
      this.token = await firebase().messaging().getToken();
    } catch (error) {
      this.token = 'Configura google-services.json para obtener el token.';
      console.log('FCM token error:', error);
    }
  }

  go(path: string) {
    this.router.navigate([path]);
  }
}

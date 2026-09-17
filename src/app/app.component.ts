import { Component } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import { Store } from '@ngrx/store';
import { notificationReceived } from './store/app.actions';
import { NotificationState } from './store/app.reducer';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private store: Store<{ app: NotificationState }>,
    private toast: ToastService,
  ) {
    try {
      firebase().messaging().onMessage(async (message: any) => {
        const title = message?.notification?.title || 'Nueva notificación';
        const body = message?.notification?.body || message?.data?.body || 'Mensaje recibido';
        this.store.dispatch(notificationReceived({ title, body }));
        this.toast.show(`${title}: ${body}`);
      });
    } catch (error) {
      console.log('FCM listener could not be registered:', error);
    }
  }
}

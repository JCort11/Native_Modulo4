import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { firebase } from '@nativescript/firebase-core';
import { ToastService } from '../../services/toast.service';
import { NotificationState } from '../../store/app.reducer';
import { selectNotificationCount, selectLastNotification } from '../../store/app.selectors';

@Component({
  selector: 'ns-notifications',
  templateUrl: './notifications.component.html',
  standalone: false,
})
export class NotificationsComponent {
  count$ = this.store.select(selectNotificationCount);
  last$ = this.store.select(selectLastNotification);
  token = '';

  constructor(
    private store: Store<{ app: NotificationState }>,
    private toast: ToastService,
  ) {
    this.getToken();
  }

  async getToken() {
    try {
      this.token = await firebase().messaging().getToken();
    } catch {
      this.token = 'No disponible: revisa la configuración de Firebase.';
    }
  }

  showDemoToast() {
    this.toast.show('Toast de prueba: las notificaciones FCM se muestran aquí.');
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { CameraComponent } from './components/camera/camera.component';
import { MapsComponent } from './components/maps/maps.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'maps', component: MapsComponent },
];

import { NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular/router';
import { GoogleMapsModule } from '@nativescript/google-maps/angular';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { appReducer } from './store/app.reducer';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { CameraComponent } from './components/camera/camera.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationsComponent,
    SharingComponent,
    CameraComponent,
    MapsComponent,
  ],
  imports: [
    NativeScriptModule,
    GoogleMapsModule,
    StoreModule.forRoot({ app: appReducer }),
    NativeScriptRouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

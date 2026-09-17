import { Application } from '@nativescript/core';
import { platformNativeScript } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';

import { AppModule } from './app/app.module';

async function bootstrap() {
  try {
    await firebase().initializeApp();
    const messaging = firebase().messaging();
    messaging.showNotificationsWhenInForeground = true;
    console.log('Firebase initialized.');
  } catch (error) {
    console.log('Firebase initialization skipped/failed:', error);
  }

  platformNativeScript().bootstrapModule(AppModule);
}

bootstrap();

import { createAction, props } from '@ngrx/store';

export const notificationReceived = createAction(
  '[Firebase Messaging] Notification Received',
  props<{ title: string; body: string }>(),
);

export const resetNotifications = createAction('[Notifications] Reset');

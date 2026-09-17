import { createReducer, on } from '@ngrx/store';
import { notificationReceived, resetNotifications } from './app.actions';

export interface NotificationState {
  count: number;
  lastTitle: string;
  lastBody: string;
}

export const initialState: NotificationState = {
  count: 0,
  lastTitle: 'Sin notificaciones todavía',
  lastBody: '',
};

export const appReducer = createReducer(
  initialState,
  on(notificationReceived, (state, { title, body }) => ({
    ...state,
    count: state.count + 1,
    lastTitle: title,
    lastBody: body,
  })),
  on(resetNotifications, () => initialState),
);

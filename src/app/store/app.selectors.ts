import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './app.reducer';

export const selectApp = createFeatureSelector<NotificationState>('app');
export const selectNotificationCount = createSelector(selectApp, state => state.count);
export const selectLastNotification = createSelector(
  selectApp,
  state => state.lastBody ? `${state.lastTitle}: ${state.lastBody}` : state.lastTitle,
);

import { appReducer, initialState } from '../app/store/app.reducer';
import { notificationReceived, resetNotifications } from '../app/store/app.actions';

describe('Firebase notification reducer', () => {
  it('returns the initial state when called without a state', () => {
    const state = appReducer(undefined, { type: '@@init' });
    expect(state).toEqual(initialState);
  });

  it('increments the notification count and stores the last notification', () => {
    const state = appReducer(
      initialState,
      notificationReceived({ title: 'Firebase', body: 'Mensaje de prueba' }),
    );

    expect(state.count).toBe(1);
    expect(state.lastTitle).toBe('Firebase');
    expect(state.lastBody).toBe('Mensaje de prueba');
  });

  it('can reset the notification state', () => {
    const populated = appReducer(
      initialState,
      notificationReceived({ title: 'Test', body: 'Body' }),
    );

    expect(appReducer(populated, resetNotifications())).toEqual(initialState);
  });
});

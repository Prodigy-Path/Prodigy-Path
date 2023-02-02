/** @format */

import store from '../';
import drawerSlice, { setOpened, setDrawer } from '../drawerSlice';

describe('Drawer Slice', () => {
  test('opened state should initially be false', () => {
    console.log(drawerSlice);
    expect(store.getState().drawer.opened).toBe(false);
  });
  test('menu state should initially be closed', () => {
    expect(store.getState().drawer.menuClass).toBe('closed');
  });
  test('menu state should swap to open when dispatched', () => {
    store.dispatch(setOpened());
    store.dispatch(setDrawer());
    expect(store.getState().drawer.menuClass).toBe('opened');
  });

  test('drawer state should swap to true when dispatched', () => {
    expect(store.getState().drawer.opened).toBe(true);
  });

  test('menu state should swap to closed when dispatched', () => {
    store.dispatch(setOpened());
    store.dispatch(setDrawer());
    expect(store.getState().drawer.menuClass).toBe('closed');
  });
});

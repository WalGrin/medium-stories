import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromLayoutActions, HoveredNavItemPayload } from './layout.actions';
import { LayoutPartialState } from './layout.reducer';
import { getBreadcrumbs, layoutQuery } from './layout.selectors';

@Injectable()
export class LayoutFacade {
  /**
   * Observed opened side menu
   */
  menu$ = this.store.pipe(select(layoutQuery.getMenu));

  /**
   * Observed opened side menu
   */
  openedSidebar$ = this.store.pipe(select(layoutQuery.getOpenedSidebar));

  /**
   * Observed showed submenu
   */
  showedSubmenu$ = this.store.pipe(select(layoutQuery.getShowedSubmenu));

  /**
   * Observed breadcrumbs
   */
  breadcrumbs$ = this.store.pipe(select(layoutQuery.getBreadcrumbs));

  /**
   * Observed hovered nav item
   */
  hoveredNavItemByLevel$ = level => this.store.pipe(select(layoutQuery.getHoveredNavItemByLevel, { level }));

  constructor(private store: Store<LayoutPartialState>) {}

  /**
   * Close mobile menu
   */
  closeSidebar(): void {
    this.store.dispatch(new fromLayoutActions.CloseSidebar());
  }

  /**
   * Hide nav sub menus
   */
  hideSubMenu(): void {
    this.store.dispatch(new fromLayoutActions.HideNavSubMenu());
  }

  /**
   * Close mobile menu
   */
  openSidebar(): void {
    this.store.dispatch(new fromLayoutActions.OpenSidebar());
  }

  /**
   * Set hovered nav item
   */
  setNavItem(payload: HoveredNavItemPayload): void {
    this.store.dispatch(new fromLayoutActions.SetHoveredNavItem(payload));
  }

  /**
   * Toggle hovered nav item
   */
  toggleNavItem(payload: HoveredNavItemPayload): void {
    this.store.dispatch(new fromLayoutActions.ToggleHoveredNavItem(payload));
  }

  /**
   * Toggle side menu
   */
  toggleSidebar(): void {
    this.store.dispatch(new fromLayoutActions.ToggleSidebar());
  }
}

import { ResponsiveActionTypes, ResponsiveAction } from './responsive.actions';

export const RESPONSIVE_FEATURE_KEY = 'responsive';

/**
 * Responsive state
 */
export interface ResponsiveState {
  /**
   * Current Window inner height
   */
  height: number;

  /**
   * Responsive init error
   */
  initError: string;

  /**
   * Responsive initialized
   */
  initialized: boolean;

  /**
   * Responsive is initialized
   */
  initiating: boolean;

  /**
   * Current Window inner width
   */
  width: number;

  /**
   * Is mobile width
   * Notice: Now if width < 768 then true. May need to be changed later.
   */
  mobile: boolean;

  /**
   * Current responsive type
   */
  responsiveType: string;
}

export const responsiveInitialState: ResponsiveState = {
  height: 0,
  initError: null,
  initialized: false,
  initiating: false,
  width: 0,
  mobile: true,
  responsiveType: null
};

export interface ResponsivePartialState {
  readonly [RESPONSIVE_FEATURE_KEY]: ResponsiveState;
}

export function responsiveReducer(state: ResponsiveState = responsiveInitialState, action: ResponsiveAction): ResponsiveState {
  switch (action.type) {
    case ResponsiveActionTypes.InitiatingWindowProps:
      state = {
        ...state,
        initError: null,
        initiating: true
      };
      break;
    case ResponsiveActionTypes.WindowPropsInitialized:
      state = {
        ...state,
        ...action.payload,
        initialized: true,
        initiating: false
      };
      break;
    case ResponsiveActionTypes.WindowPropsInitError:
      state = {
        ...state,
        initError: action.payload,
        initialized: true,
        initiating: false
      };
      break;
    case ResponsiveActionTypes.SetWindowProps:
      state = {
        ...state,
        ...action.payload
      };
      break;
  }

  return state;
}

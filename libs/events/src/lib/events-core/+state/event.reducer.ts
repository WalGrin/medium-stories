import { ApolloError } from 'apollo-client';

import { Event } from '@medium-stories/entities';

import { EventAction, EventActionTypes } from './event.actions';

export const EVENT_FEATURE_KEY = 'event';

export interface EventState {
  /**
   * Last event
   */
  eventLast: Event;

  /**
   * Last event load error
   */
  eventLastLoadError?: ApolloError;

  /**
   * Last event loading
   */
  eventLastLoading: boolean;

  /**
   * Event
   */
  event: Event;

  /**
   * Event load error
   */
  eventLoadError?: ApolloError;

  /**
   * Event loading
   */
  eventLoading: boolean;

  /**
   * Events
   */
  events: Event[];

  /**
   * Events load error
   */
  eventsLoadError?: ApolloError;

  /**
   * Events loading
   */
  eventsLoading: boolean;
}

export interface EventPartialState {
  readonly [EVENT_FEATURE_KEY]: EventState;
}

export const eventInitialState: EventState = {
  eventLast: null,
  eventLastLoadError: null,
  eventLastLoading: false,
  event: null,
  eventLoadError: null,
  eventLoading: false,
  events: null,
  eventsLoadError: null,
  eventsLoading: false
};

export function eventReducer(state: EventState = eventInitialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionTypes.LoadingEvent: {
      state = {
        ...state,
        eventLoadError: null,
        eventLoading: true
      };
      break;
    }
    case EventActionTypes.EventLoaded: {
      state = {
        ...state,
        event: action.payload,
        eventLoading: false
      };
      break;
    }
    case EventActionTypes.EventLoadError: {
      state = {
        ...state,
        eventLoadError: action.payload,
        eventLoading: false
      };
      break;
    }

    case EventActionTypes.LoadingEvents: {
      state = {
        ...state,
        eventsLoadError: null,
        eventsLoading: true
      };
      break;
    }
    case EventActionTypes.EventsLoaded: {
      state = {
        ...state,
        events: action.payload,
        eventsLoading: false
      };
      break;
    }
    case EventActionTypes.EventsLoadError: {
      state = {
        ...state,
        eventsLoadError: action.payload,
        eventsLoading: false
      };
      break;
    }

    case EventActionTypes.LoadingLastEvent: {
      state = {
        ...state,
        eventLastLoadError: null,
        eventLastLoading: true
      };
      break;
    }
    case EventActionTypes.LastEventLoaded: {
      state = {
        ...state,
        eventLast: action.payload,
        eventLastLoading: false
      };
      break;
    }
    case EventActionTypes.LastEventLoadError: {
      state = {
        ...state,
        eventLastLoadError: action.payload,
        eventLastLoading: false
      };
      break;
    }
  }

  return state;
}

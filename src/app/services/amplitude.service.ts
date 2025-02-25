import {Injectable} from '@angular/core';
import * as amplitude from '@amplitude/analytics-browser';
import type {ValidPropertyType} from '@amplitude/analytics-types';

@Injectable({
  providedIn: 'root'
})
export class AmplitudeService {
  constructor() {
  }

  /**
   * Initialize Amplitude with your API key
   * @param apiKey - Your Amplitude API Key
   */

  init(apiKey: string): void {
    amplitude.init(apiKey, {
      //   Optional configuration options
    })
  }

  /**
   * Track an event
   * @param eventName - Name of the event
   * @param eventProperties - Optional properties for the event
   */
  logEvent(eventName: string, eventProperties?: Record<string, any>): void {
    amplitude.track(eventName, eventProperties);
  }

  /**
   * Set user ID for tracking
   * @param userId - Unique identifier for the user
   */
  setUserId(userId: string): void {
    amplitude.setUserId(userId);
  }

  /**
   * Set user property
   * @param property - User property to set
   * @param value
   */
  setUserProperties(property: string, value: ValidPropertyType): void {
    amplitude.identify(new amplitude.Identify().set(property, value))
  }

  /**
   * Clear user ID and properties
   */
  reset(): void {
    amplitude.reset()
  }
}

import {Injectable} from '@angular/core';
import * as amplitude from '@amplitude/analytics-browser';
import type {ValidPropertyType, BrowserOptions} from '@amplitude/analytics-types';

@Injectable({
  providedIn: 'root'
})
export class AmplitudeService {

  /**
   * Initialize Amplitude with your API key
   * @param apiKey - Your Amplitude API Key
   * @param options - Amplitude browser options
   */

  initialize(apiKey: string, options?: BrowserOptions): void {
    amplitude.init(apiKey, options)
  }

  /**
   * Track an event
   * @param eventName - Name of the event
   * @param eventProperties - Optional properties for the event
   */
  trackEvent(eventName: string, eventProperties?: Record<string, any>): void {
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
   * Clear user ID and properties
   */
  reset(): void {
    amplitude.reset()
  }
}

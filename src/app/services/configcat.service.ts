import {Injectable} from '@angular/core';
import {getClient, IAutoPollOptions, IConfigCatClient, PollingMode} from 'configcat-js';
import {BehaviorSubject} from 'rxjs';

interface IConnectParameters {
  sdkKey: string,
  pollingMode?: PollingMode,
  options?: IAutoPollOptions,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigCatService {

  constructor() {
  }

  private readonly clientSubject = new BehaviorSubject<IConfigCatClient | null>(null);
  private client$ = this.clientSubject.asObservable();

  async initialize(connectParameters: IConnectParameters): Promise<boolean> {
    if (this.clientSubject.value) {
      return false; // Already connected
    }

    const client = getClient(connectParameters.sdkKey, connectParameters.pollingMode, connectParameters.options);
    await client.waitForReady(); // Ensures client is ready

    this.clientSubject.next(client);
    return true;
  }

  async getFeatureFlag(featureFlagKey: string, defaultValue = false): Promise<boolean> {
    const client = this.clientSubject.value;
    if (!client) throw new Error("ConfigCat client is not connected.");

    return client.getValueAsync(featureFlagKey, defaultValue);
  }

  disconnect(): void {
    const client = this.clientSubject.value;
    if (client) {
      client.dispose();
      this.clientSubject.next(null);
    }
  }
}

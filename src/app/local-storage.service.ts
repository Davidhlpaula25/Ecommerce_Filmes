import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isLocalStorageAvailable: boolean;

  constructor() {
    this.isLocalStorageAvailable = typeof window !== 'undefined' && !!window.localStorage;
  }

  getItem(key: string): string | null {
    return this.isLocalStorageAvailable ? localStorage.getItem(key) : null;
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isLocalStorageAvailable) {
      localStorage.clear();
    }
  }
}

import { Injectable } from '@angular/core';
import { Utils, isAndroid, isIOS } from '@nativescript/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  show(message: string) {
    if (isAndroid) {
      android.widget.Toast.makeText(
        Utils.android.getApplicationContext(),
        message,
        android.widget.Toast.LENGTH_LONG,
      ).show();
    } else if (isIOS) {
      console.log('Toast:', message);
    }
  }
}

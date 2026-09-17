import { Component } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import { shareImage, shareText } from '@nativescript/social-share';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'ns-sharing',
  templateUrl: './sharing.component.html',
  standalone: false,
})
export class SharingComponent {
  constructor(private toast: ToastService) {}

  shareTextContent() {
    shareText('Hola desde Firebase Media Lab - NativeScript Angular', 'Firebase Media Lab');
  }

  async shareBundledImage() {
    try {
      const image = await ImageSource.fromUrl('https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png');
      shareImage(image, { caption: 'Imagen compartida desde NativeScript', fileFormat: 'png' });
    } catch (error) {
      this.toast.show('No se pudo preparar la imagen para compartir.');
      console.log(error);
    }
  }
}

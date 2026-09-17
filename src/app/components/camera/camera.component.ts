import { Component } from '@angular/core';
import * as camera from '@nativescript/camera';
import { ImageSource, ImageAsset } from '@nativescript/core';
import { shareImage } from '@nativescript/social-share';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'ns-camera',
  templateUrl: './camera.component.html',
  standalone: false,
})
export class CameraComponent {
  captured: ImageAsset | null = null;
  capturedSource: ImageSource | null = null;

  constructor(private toast: ToastService) {}

  async takePhoto() {
    try {
      const permission = await camera.requestCameraPermissions();
      if (!permission.Success) {
        this.toast.show('Permiso de cámara no concedido.');
        return;
      }
      if (!camera.isAvailable()) {
        this.toast.show('No hay una cámara disponible en este dispositivo.');
        return;
      }
      this.captured = await camera.takePicture({ width: 900, height: 900, keepAspectRatio: true, saveToGallery: true });
      this.capturedSource = await ImageSource.fromAsset(this.captured);
      this.toast.show('Fotografía capturada correctamente.');
    } catch (error) {
      this.toast.show('No se pudo tomar la fotografía.');
      console.log(error);
    }
  }

  sharePhoto() {
    if (!this.capturedSource) {
      this.toast.show('Primero toma una fotografía.');
      return;
    }
    shareImage(this.capturedSource, { caption: 'Fotografía tomada con Firebase Media Lab', fileFormat: 'jpg' });
  }
}

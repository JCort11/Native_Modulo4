import { Component } from '@angular/core';
import { GoogleMap, MapReadyEvent } from '@nativescript/google-maps';

@Component({
  selector: 'ns-maps',
  templateUrl: './maps.component.html',
  standalone: false,
})
export class MapsComponent {
  private map?: GoogleMap;

  onReady(event: MapReadyEvent) {
    this.map = event.map;
    this.map.addMarker({
      position: { lat: 13.6929, lng: -89.2182 },
      title: 'Santa Tecla / San Salvador',
      snippet: 'Marker de demostración',
    });
  }
}

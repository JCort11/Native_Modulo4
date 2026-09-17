# Firebase Media Lab

Proyecto NativeScript + Angular para demostrar los requisitos de Firebase Cloud Messaging, Toast, Social Share, Camera, Google Maps, NgRx/Jasmine y Karma JUnit Reporter.

## Requisitos

- Node.js compatible con NativeScript
- NativeScript CLI 9.x (se recomienda la versión compatible con el proyecto)
- Java 17
- Android Studio + Android SDK
- Un emulador Android o dispositivo físico
- Cuenta propia de Firebase
- Proyecto propio de Google Cloud/Firebase con Google Maps SDK habilitado

## 1. Firebase / FCM

El proyecto **no incluye claves privadas ni configuración de Firebase de otra persona**.

1. Crea/usa tu proyecto en Firebase Console.
2. Registra una aplicación Android con el package name:
   `com.jcort.firebaseMediaLab`
3. Descarga `google-services.json`.
4. Copia el archivo real a:
   `App_Resources/Android/src/google-services.json`
5. No lo subas a GitHub si contiene información que prefieras mantener fuera del repositorio; el `.gitignore` ya lo excluye.
6. Ejecuta:
   `npm install`
   `ns run android`

La pantalla principal obtiene el token mediante `firebase().messaging().getToken()`. El plugin de Firebase Messaging documenta que este token identifica la instancia del dispositivo y puede utilizarse como destino de un mensaje FCM.

## 2. Enviar una notificación desde Firebase Console

Con la aplicación instalada y el token visible:

1. Copia el token FCM de la pantalla principal.
2. En Firebase Console abre Cloud Messaging.
3. Crea una notificación de prueba y selecciona el dispositivo usando el token cuando la consola lo solicite.
4. Con la aplicación en primer plano, el listener `onMessage()` recibe el mensaje.
5. El proyecto muestra un Toast con el título y cuerpo y actualiza el estado NgRx.

## 3. Google Maps

1. En Google Cloud Console habilita el SDK de Google Maps correspondiente.
2. Crea una API key propia.
3. Sustituye `YOUR_GOOGLE_MAPS_API_KEY` en `App_Resources/Android/src/main/AndroidManifest.xml`.
4. Restringe la clave a tu aplicación Android/package name cuando corresponda.
5. Ejecuta la app y abre `Google Maps + Marker`.

El mapa usa `GoogleMapsModule` de `@nativescript/google-maps/angular` y añade un marker desde el evento `ready`.

## 4. Social Share

En `Social Share` se puede compartir:
- texto mediante `shareText()`;
- imagen mediante `shareImage()`.

La pantalla de cámara también convierte la foto tomada a `ImageSource` y la pasa a `shareImage()`.

## 5. Cámara

Abre `Cámara + compartir imagen`:
1. concede permiso de cámara;
2. toma una fotografía;
3. visualiza la fotografía dentro de la app;
4. pulsa `Compartir fotografía`.

## 6. Tests Jasmine + reducer NgRx

El reducer probado está en:
`src/app/store/app.reducer.ts`

La suite está en:
`src/tests/app.reducer.spec.ts`

Ejecuta:
`ns test android`

## 7. Karma JUnit Reporter

`karma.conf.js` está configurado con:
- Jasmine
- Karma
- `karma-nativescript-launcher`
- `karma-junit-reporter`

El reporter escribe:
`test-results/junit.xml`

Después de ejecutar correctamente la suite, verifica que el archivo exista y contenga XML JUnit con los casos ejecutados.

## Requisitos del ejercicio

| # | Requisito | Implementación |
|---|---|---|
| 1 | Token Firebase propio | `HomeComponent` + `firebase().messaging().getToken()` |
| 2 | Toast para notificaciones | `AppComponent` + `ToastService` |
| 3 | Social Share texto | `SharingComponent.shareTextContent()` |
| 4 | Social Share imagen | `SharingComponent.shareBundledImage()` |
| 5 | Camera | `CameraComponent.takePhoto()` |
| 6 | Compartir foto de cámara | `CameraComponent.sharePhoto()` |
| 7 | Google Maps con cuenta propia | `GoogleMapsModule` + API key propia |
| 8 | Marker | `MapsComponent.onReady()` |
| 9 | Jasmine + reducer Redux/NgRx | `src/tests/app.reducer.spec.ts` |
| 10 | Karma JUnit Reporter | `karma.conf.js` + `test-results/junit.xml` |

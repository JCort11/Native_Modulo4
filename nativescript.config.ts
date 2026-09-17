import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.jcort.firebaseMediaLab',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
  },
} as NativeScriptConfig;

import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.plugindemo',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
} as NativeScriptConfig;
/**
 * 
  hooks: [
    {
      //type: 'before-prepare',
      //script: '../../tools/scripts/before-prepare.js',
    }
  ],
 */
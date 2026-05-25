import type { CapacitorConfig } from '@capacitor/cli';

const nativeUrl = process.env.DRIFT_NATIVE_URL;

const config: CapacitorConfig = {
  appId: 'run.drift.coach',
  appName: 'DRIFT',
  webDir: 'dist',
  bundledWebRuntime: false,
  ...(nativeUrl
    ? {
        server: {
          url: nativeUrl,
          cleartext: false,
        },
      }
    : {}),
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#050505',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#050505',
    },
  },
};

export default config;

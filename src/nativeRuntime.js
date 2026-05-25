import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

const appRoutes = new Set([
  '/app/today',
  '/app/log',
  '/app/coach',
  '/app/library',
  '/app/programs',
  '/app/profile',
  '/app/install',
  '/app/privacy',
]);

export async function setupNativeRuntime() {
  if (!Capacitor.isNativePlatform()) return;

  document.documentElement.classList.add('is-native-shell');
  setupTapHaptics();

  try {
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: '#050505' });
  } catch {
    // Status bar APIs differ slightly between platforms.
  }

  try {
    await SplashScreen.hide({ fadeOutDuration: 260 });
  } catch {
    // The web build should still work if the native splash plugin is absent.
  }

  CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack && window.location.pathname !== '/app/today') {
      window.history.back();
      return;
    }
    CapacitorApp.exitApp();
  });

  CapacitorApp.addListener('appUrlOpen', ({ url }) => {
    const nextPath = appPathFromUrl(url);
    if (!nextPath) return;
    window.history.pushState({}, '', nextPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
}

function setupTapHaptics() {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target?.closest('button, a, input[type="range"], select')) return;
      Haptics.impact({ style: ImpactStyle.Light }).catch(() => {});
    },
    { passive: true },
  );
}

function appPathFromUrl(url) {
  try {
    const parsed = new URL(url);
    return appRoutes.has(parsed.pathname) ? `${parsed.pathname}${parsed.search || ''}` : null;
  } catch {
    return null;
  }
}

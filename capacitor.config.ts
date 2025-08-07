import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.38e259cd747e4e03a75a1a984ae94612',
  appName: 'yatraq-design-kit',
  webDir: 'dist',
  server: {
    url: 'https://38e259cd-747e-4e03-a75a-1a984ae94612.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;
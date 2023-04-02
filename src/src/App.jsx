import React, { useEffect } from 'react';

import Navigation from './Navigation';

import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  useEffect(() => {
    async function lockScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }

    lockScreenOrientation();
  }, []);

  return <Navigation />
}

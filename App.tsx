import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CryptoState } from './context/crypto.context'

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <CryptoState>
        <SafeAreaProvider>
          <Navigation colorScheme={'light'} />
          <StatusBar style='light' />
        </SafeAreaProvider>
      </CryptoState>
    );
  }
}

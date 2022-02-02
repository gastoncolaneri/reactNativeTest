import Navigator from './src/navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SwitcherState from './src/context/SwitcherContext/SwitcherState';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SwitcherState>
        <StatusBar />
        <Navigator />
      </SwitcherState>
    </SafeAreaProvider>
  );
}

import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { Buttons } from './src/components/ActionButtons';


export default function App() {
  const GOAL = 2000

  const [consumed, setConsumed] = useState(0)

  const addAgua = ( acrescimo ) => {
    setConsumed(consumed + acrescimo);
  };

  const handleReset = () => {
    setConsumed(0)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View>

          <Header goal={GOAL} />
          <WaterProgress consumed={consumed} goal={GOAL} />

          <Buttons onAdd={addAgua} onReset={handleReset}/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

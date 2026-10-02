import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { AjustarMeta } from "./src/components/MetaProgress";
import { Buttons } from './src/components/ActionButtons';
import { Mensagem } from "./src/components/mensagem";


export default function App() {

  const [consumed, setConsumed] = useState(0)

  const [GOAL, setGoal] = useState(2000)

  const addAgua = ( acrescimo ) => {
    setConsumed(consumed + acrescimo);
  };

  const adcMeta = (addMeta) => {
    setGoal((prevGoal) => prevGoal + addMeta);
  
  };

  const resetAgua = () => {
    setConsumed(0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'} />
        <View>

          <Header goal={GOAL} />

          <AjustarMeta goal={GOAL} AddMeta={adcMeta} />

          <WaterProgress consumed={consumed} goal={GOAL} />

          <Buttons onAdd={addAgua} onReset={resetAgua}/>


          <Mensagem/>




        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

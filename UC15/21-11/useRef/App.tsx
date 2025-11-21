import React, { useRef, useState } from "react";
import { Text, StyleSheet, FlatList, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InputPalpite from "./components/InputPalpite";
import BotaoEnviar from "./components/BotaoEnviar";
import BotaoReiniciar from "./components/BotaoReiniciar";

export default function App() {
  const randomNumber = useRef(Math.floor(Math.random() * 99 + 1));
  const tentativas = useRef(10);
  const input = useRef<TextInput>(null);
  const [palpite, setPalpite] = useState("");
  const [info, setInfo] = useState<string[]>([]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {tentativas.current > 0 ? (
          <>
            <Text>Tente adivinhar o número entre 1 e 100</Text>
            <InputPalpite
              reference={input}
              palpite={palpite}
              setPalpite={setPalpite}
            />
            <BotaoEnviar
              randomNumber={randomNumber.current}
              tries={tentativas}
              guess={Number(palpite)}
              setGuess={setPalpite}
              setInfo={setInfo}
              input={input}
            />
          </>
        ) : (
          <BotaoReiniciar
            randomNumber={randomNumber}
            tentativas={tentativas}
            setInfo={setInfo}
            setPalpite={setPalpite}
          />
        )}

        <FlatList
          data={info}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    marginTop: 20,
  },
});

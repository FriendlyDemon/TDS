import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
export default function BotaoEnviar(props: {
  randomNumber: number;
  tries: React.RefObject<number>;
  guess: number;
  input: React.RefObject<TextInput | null>;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let { randomNumber, tries, guess, setInfo, setGuess, input } = props;
  function check() {
    if (isNaN(guess)) {
      Alert.alert("Palpite não é um número");
    } else if (guess > 100 || guess < 1) {
      Alert.alert("Palpite deve ser entre 1 e 100");
    } else if (guess % 1 != 0) {
      Alert.alert("Palpite deve ser um número inteiro");
    } else if (guess == randomNumber) {
      Alert.alert("Você acertou!");
      setInfo((prev) => {
        return [...prev, `O número é ${randomNumber}!`];
      });
    } else if (guess > randomNumber) {
      tries.current -= 1;
      setInfo((prev) => {
        return [...prev, `O número é menor que ${guess}`];
      });
    } else if (guess < randomNumber) {
      tries.current -= 1;
      setInfo((prev) => {
        return [...prev, `O número é maior que ${guess}`];
      });
    }
    if (tries.current == 0) {
      setInfo((prev) => {
        return [...prev, `Você perdeu. O número era ${randomNumber}`];
      });
    }
    setGuess("");
    input.current?.focus();
  }
  return (
    <TouchableOpacity style={styles.botao} onPress={check}>
      <Text>Enviar palpite</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "grey",
    padding: 3,
  },
});

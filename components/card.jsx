import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";

const Card = ({ texto, onPress, textoBotao }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>{texto}</Text>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.botaoTexto}>{textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // Alinha o texto e o botão lado a lado
    flexWrap: "wrap", // Quebra a linha
    justifyContent: "space-between", // Espaço entre os elementos
    alignItems: "center", // Alinha verticalmente no centro
    backgroundColor: colors.verde2, // Cor do fundo do card
    padding: 16, // Espaçamento interno
    marginVertical: 8, // Espaçamento entre os cards
    marginHorizontal: 16, // Espaçamento lateral
    borderRadius: 8, // Bordas arredondadas
    elevation: 2, // Sombra (no Android)
    shadowColor: "#000", // Sombra (no iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    flex: 1, // Faz o texto ocupar o espaço restante
  },
  botao: {
    backgroundColor: colors.verde1, // Cor de fundo do botão
    paddingVertical: 8, // Espaçamento interno vertical
    paddingHorizontal: 16, // Espaçamento interno horizontal
    borderRadius: 4, // Bordas arredondadas do botão
  },
  botaoTexto: {
    color: colors.background, // Cor do texto do botão
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;

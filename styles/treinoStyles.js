import React from "react";
import { StyleSheet } from "react-native";
import {colors} from "./colors"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        justifyContent: 'center',
        padding: 15,
    },
    card: {
        flex: 1,
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 20,
        marginRight: 10,
        alignItems: "center",
    },
    cardConcluido: {
        opacity: 0.5,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    detail: {
        color: "#ccc",
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: "100%",
        textAlign: "center",
    },
    counter: {
        color: "#fff",
        marginTop: 10,
        fontSize: 16,
        textAlign: "center",
    },
    infoTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'green',
        margin: 10,
        padding: 10
    },
    infoText1: {
        color: 'white',
    },
    infoText2: {
        color: colors.verde1,
        fontSize: 24
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        
    },
    cardPesoBotao: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0,
        borderColor: 'white',
        justifyContent: 'space-evenly'
    },
    inputPeso: {
        flex: 0.5,
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: "100%",
        textAlign: "center",
    },
    button: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.verde1,
        color: "green",
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.background,
      },
});

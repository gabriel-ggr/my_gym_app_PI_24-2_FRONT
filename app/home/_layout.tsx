import { Tabs } from "expo-router";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from "@/styles/colors";
import { UserProvider } from "@/contexts/UserContext";
import Logo from "@/components/logo";

export default function HomeLayout() {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.cinza1, // Fundo branco
            borderBlockColor: colors.background,
            borderColor: colors.background,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: colors.verde1, // Cor do ícone ativo
          tabBarInactiveTintColor: colors.background, // Cor do ícone inativo
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="user" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="treino"
          options={{
            href: null,
            title: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
  );
}

import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { UserContext } from '../../contexts/UserContext';
import { colors } from '../../styles/colors'


export default function Perfil() {
    const { user } = useContext(UserContext)
    console.log(user)
    
    return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.title}>Configurações</Text>

      {/* Foto de Perfil */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Text style={styles.profileIcon}>👤</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.changePhotoText}>Alterar Foto</Text>
        </TouchableOpacity>
      </View>

      {/* Formulário de Configurações */}
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} value="Gabriel Rios" editable={true} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value="gabriel.rios@gmail.com" editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Celular</Text>
          <TextInput style={styles.input} value="55 996600897" editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sexo</Text>
          <TextInput style={styles.input} value="Masculino" editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Academia</Text>
          <TextInput style={styles.input} value="Spacefit" editable={false} />
        </View>
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Alterar Senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 30,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: '#222',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 40,
    color: colors.cinza1,
  },
  changePhotoText: {
    color: colors.verde1,
    fontSize: 16,
    marginTop: 10,
  },
  form: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: colors.verde1,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.cinza2,
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  actionButtons: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  changePasswordButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0f0',
  },
  changePasswordText: {
    fontSize: 16,
    color: '#0f0',
    fontWeight: 'bold',
  },
});

    


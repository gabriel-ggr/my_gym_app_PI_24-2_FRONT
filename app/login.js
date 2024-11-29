import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useForm, Controller } from 'react-hook-form';
import { colors } from '../styles/colors'
import Botao from '../components/botao';
import Logo from '../components/logo';
import { Link } from 'expo-router'
import { UserContext } from '../contexts/UserContext';
import { login } from '../api/authService.js'
import { useRouter } from 'expo-router';

export default function Login() {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();

  const { setUser, setToken } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  const handleLogin = async (data) => {
    const { email, senha, role } = data;

    try {
      const { token, user } = await login(email, senha, role);

      setUser(user);
      setToken(token);
      console.log(user)
      Alert.alert('login realizado com sucesso')
      setTimeout(() => {
        router.push('/home/')
      }, 1000)
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o login.');
    }
  };

  return (
    <View style={[styles.container]}>
      <Logo />
      
      <Text style={styles.title}>Login</Text>

      {/* Campo Email */}
      <Text style={styles.label}>Email:</Text>
      <Controller
        defaultValue={''}
        control={control}
        name="email"
        rules={{
          required: 'O email é obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Digite um email válido',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Digite seu email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Campo Senha */}
      <Text style={styles.label}>Senha:</Text>
      <Controller
        defaultValue={''}
        control={control}
        name="senha"
        rules={{
          required: 'A senha é obrigatória',
          minLength: {
            value: 6,
            message: 'A senha deve ter pelo menos 6 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.password && styles.errorInput]}
            placeholder="Digite sua senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            autoCapitalize="none"
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      {/* Formulario para selecionar a role   */}
      <Controller
        control={control}
        name="role"
        rules={{
          required: 'O tipo de usuário é obrigatório',
        }}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            open={open}
            value={value} // Sincroniza com o formulário
            items={[
              { label: 'Aluno', value: 'alunos' },
              { label: 'Academia', value: 'academias' },
              { label: 'Personal', value: 'personais' },
            ]}
            setOpen={setOpen} // Controla o estado de abrir/fechar
            setValue={onChange} // Atualiza o formulário
            onChangeValue={onChange}
            placeholder="Selecione o tipo de usuário"
            style={[styles.dropdown, errors.role && styles.errorInput]}
            zIndex={3000} // Evita problemas de sobreposição
            zIndexInverse={1000}
          />
        )}
      />
      {errors.role && <Text style={styles.errorText}>{errors.role.message}</Text>}

      {/* Botão de Login */}
      <Botao textoBotao="Login" onpress={handleSubmit(handleLogin)} />

      {/* Link para Cadastro */}
      <Text style={styles.registerText}>
        Ainda não tem uma conta?{' '}
          <Link href="/cadastro">
            Cadastre-se
          </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#fff",
    marginTop: 30
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.cinza1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#fff",
    backgroundColor: colors.cinza1
  },
  errorInput: {
    borderColor: 'red',
    color: "red",
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: "#fff",
  },
  registerLink: {
    color: colors.verde2,
    fontWeight: 'bold',
  },
  pickerContainer: {
    // height: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  pickerPicker: {
    // backgroundColor: colors.cinza1,
    // color: 'white',
    // height: 40,
    // borderWidth: 0,
    // borderRadius: 5
    height: 50
  },
});

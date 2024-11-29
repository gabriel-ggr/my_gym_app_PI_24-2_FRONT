import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Botao from "../components/botao";
import { colors } from "../styles/colors";
import Logo from "../components/logo";
import Titulo from "../components/titulo";
import { Link } from 'expo-router'
import DropDownPicker from 'react-native-dropdown-picker'
import { consultarAcademias } from "@/api/academiaService";
import { criarAluno } from "../api/authService";
import { useRouter } from 'expo-router'


export default function Cadastro() {
  const { control, handleSubmit, formState: { errors }, setValue} = useForm();

  const [open, setOpen] = useState(false); // Controle do dropdown
  const [itensPicker, setItensPicker] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
      const carregarItens = async () => {
          try {
              const itens = await consultarAcademias();  
              const formatados = itens.map(item => ({
                  label: item.nome,
                  value: item.id,
              }));
              setItensPicker(formatados);
          } catch (error) {
              console.error('Erro ao carregar academias:', error.message);
          }
      };
  
      carregarItens();
  }, []);

  // Após criar a conta, enviar de volta para a tela de login
  const onSubmit = async (data) => {
    const {nome, email, senha, academia_id} = data

    try {
      setLoading(true);
      await criarAluno(nome, email, senha, academia_id);

      Alert.alert('Cadastro realizado com sucesso');
      router.push('/login')

    } catch(error) {
      console.log('Erro ao criar o aluno')
    } finally {
      setLoading(false);
    }

    Alert.alert('Cadastro realizado com sucesso!', `Bem-vindo, ${data.email}!`);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Logo />
          <Titulo>Crie sua conta</Titulo>
          <Text style={styles.text}>
            Já tem uma conta? {' '}
              <Link style={{color: colors.verde1}} href="/cadastro">
                Faça o login!
              </Link>
          </Text>
        </View>

        {/* Campo Nome */}
        <Text style={styles.label}>Nome:</Text>
        <Controller
          defaultValue={''}
          control={control}
          name="nome"
          rules={{
            required: 'O nome é obrigatório',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.nome && styles.errorInput]}
              placeholder="Digite seu nome completo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

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

        {/* Formulario para selecionar a Academia do aluno */}
        <Controller
          control={control}
          name="academia_id"
          rules={{
            required: 'O campo é obrigatório.',
          }}
          render={({ field: { onChange, value } }) => (
            <DropDownPicker
              open={open}
              value={value}
              items={itensPicker} // Lista de itens carregada
              setOpen={setOpen}
              setValue={onChange}
              onChangeValue={onChange}
              placeholder="Selecione a sua academia"
              zIndex={3000}
              zIndexInverse={1000}
              style={[styles.dropdown, errors.itemSelecionado && styles.errorInput]}
              textStyle={styles.textDropdown}
              containerStyle={styles.containerDropdown}
            />
          )}
        />
      {errors.itemSelecionado && <Text style={styles.errorText}>{errors.itemSelecionado.message}</Text>}
        
        {/* Botão de Login */}
        <Botao textoBotao="Cadastre-se" onpress={handleSubmit(onSubmit)} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24
  },
  text: {
    color: 'white',
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    color: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.cinza1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 8,
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
  dropdown: {
    marginTop: 15,
    backgroundColor: colors.cinza1,
    color: 'white',
  },
  textDropdown: {
    color: 'white',
    backgroundColor: colors.cinza1
  },
})
import { View, Text } from 'react-native';
import { Slot, usePathname, Stack } from 'expo-router';
import { colors } from '@/styles/colors';
import { UserProvider } from '../contexts/UserContext.js'

export default function RootLayout() {
  const pathname = usePathname(); // Obtém a rota atual

  // Rotas onde o layout NÃO será exibido
  // const noLayoutRoutes = ['/login', '/cadastro'];

  // if (noLayoutRoutes.includes(pathname)) {
  //   // Renderiza apenas o conteúdo da página
  //   return (
  //     <UserProvider>
  //       <Slot />
  //     </UserProvider>
  //   );
  // }

  // Caso contrário, renderiza o layout padrão
  return (
    // <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
    //   {/* Cabeçalho ou layout global */}
    //   <View style={{ height: 50, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cabeçalho Padrão</Text>
    //   </View>
      
    //   {/* Conteúdo da tela */}.
    //   <UserProvider>
    //     <Slot />
    //   </UserProvider>
    // </View>
    <UserProvider>
      <Stack screenOptions={{headerShown: false}}/>
    </UserProvider>
  );
}

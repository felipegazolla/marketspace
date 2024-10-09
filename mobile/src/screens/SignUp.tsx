import { Center, Heading, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import Logo from '@assets/logo.svg'
import Avatar from '@assets/Avatar.png'
import { UserPhoto } from '@components/UserPhoto'
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity } from 'react-native'
import { Pen } from 'phosphor-react-native'
import { Input } from '@components/Input'
import { BlackButton } from '@components/BlackButton'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleUserPhotoSelect() {
    await ImagePicker.launchImageLibraryAsync()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="$gray600"
    >
      <VStack flex={1}>
        <VStack flex={1} px={'$10'} pb={'$16'} h={556} gap={'$4'}>
          <Center mt={'$20'}>
            <Logo height={40} width={60} />
            <Text
              color="$gray100"
              fontFamily="$heading"
              fontSize={'$lg'}
              mt={'$3'}
            >
              Boas vindas!
            </Text>
            <Text
              color="$gray300"
              fontFamily="$body"
              fontSize={'$sm'}
              mt={'$2'}
              textAlign="center"
            >
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </Center>
          <Center mt={'$4'}>
            <UserPhoto source={Avatar} w={88} h={88} alt="Foto do usuario" />
            <Center
              bg="$lightBlueDefault"
              rounded={'$full'}
              w={40}
              h={40}
              position="absolute"
              bottom={-5}
              right={100}
            >
              <TouchableOpacity onPress={handleUserPhotoSelect}>
                <Pen color="#EDECEE" size={18} />
              </TouchableOpacity>
            </Center>
          </Center>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" type="password" secureTextEntry />
          <Input
            placeholder="Confirme a senha"
            type="password"
            secureTextEntry
          />
          <BlackButton title="Criar" />

          <Center flex={1} gap={'$4'} mt={'$10'}>
            <Heading color="$gray200" fontSize={'$md'} fontFamily="$body">
              Já tem uma conta?
            </Heading>
            <Button title="Ir para o login" variant="outline" onPress={handleGoBack} />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

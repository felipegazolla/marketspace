import { Center, Heading, ScrollView, Text, VStack } from '@gluestack-ui/themed'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg='$gray600'
    >
      <VStack flex={1} bg="$gray600">
        <VStack flex={1} px={'$10'} pb={'$16'} bg="$gray600" h={556}>
          <Center mt={'$24'}>
            <Logo />
            <Text
              color="$gray100"
              fontFamily="$heading"
              fontSize={'$4xl'}
              mt={'$3'}
            >
              marketspace
            </Text>
            <Text
              color="$gray300"
              fontFamily="$body"
              fontSize={'$sm'}
              mt={'$1'}
            >
              Seu espaço de compra e venda
            </Text>
          </Center>

          <Center gap={'$4'} mt={'$20'}>
            <Heading color="$gray200" fontSize={'$md'} fontFamily="$body">
              Acesse sua conta
            </Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Entrar" />
          </Center>
          <Center flex={1} gap={'$4'} mt={'$10'}>
            <Heading color="$gray200" fontSize={'$md'} fontFamily="$body">
              Ainda não tem acesso?{' '}
            </Heading>
            <Button title="Criar uma conta" variant="outline" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

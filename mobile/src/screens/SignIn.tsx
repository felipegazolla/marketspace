import { Center, Heading, Text, VStack } from '@gluestack-ui/themed'
import Logo from '@assets/logo.svg'

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Center my={'$33'}>
        <Logo />
        <Text
          color="$gray100"
          fontFamily="$heading"
          fontSize={'$4xl'}
          mt={'$3'}
        >
          marketspace
        </Text>
        <Text color="$gray300" fontFamily="$body" fontSize={'$sm'} mt={'$1'}>
          Seu espaço de compra e venda
        </Text>
      </Center>

      <Center>
        <Heading>Acesse sua conta</Heading>
      </Center>
    </VStack>
  )
}

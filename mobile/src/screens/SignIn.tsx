import { Center, Heading, Text, VStack } from '@gluestack-ui/themed'
import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <VStack flex={1} px={'$10'} pb={'$16'} bg="$gray600" h={556}>
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

        <Center gap={'$2'}>
          <Heading fontSize={'$md'} fontFamily="$body">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
        </Center>
      </VStack>
    </VStack>
  )
}

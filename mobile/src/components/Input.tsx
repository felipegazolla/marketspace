import { Input as GluestackInput, InputField } from '@gluestack-ui/themed'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
  return (
    <GluestackInput
      bg="$gray700"
      h={45}
      px={'$2'}
      borderWidth={'$0'}
      borderRadius={'$md'}
      $focus={{
        borderWidth: 1,
        borderColor: "$blueDefault"
      }}
    >
      <InputField
        color="$black"
        fontFamily="$body"
        placeholderTextColor={'$gray400'}
        {...rest}
      />
    </GluestackInput>
  )
}

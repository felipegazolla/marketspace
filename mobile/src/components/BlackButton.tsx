import {
  ButtonSpinner,
  Button as GlueStackButton,
  Text,
} from '@gluestack-ui/themed'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string
  isLoading?: boolean
}

export function BlackButton({ title, isLoading = false, ...rest }: Props) {
  return (
    <GlueStackButton
      w={'$full'}
      h={48}
      bg={'$gray100'}
      borderWidth={0}
      rounded={'$md'}
      $active-bg={'$gray400'}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text color={'$gray700'} fontFamily="$heading">
          {title}
        </Text>
      )}
    </GlueStackButton>
  )
}

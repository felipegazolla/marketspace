import {
  ButtonSpinner,
  Button as GlueStackButton,
  Text,
} from '@gluestack-ui/themed'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string
  variant?: 'solid' | 'outline'
  isLoading?: boolean
}

export function Button({
  title,
  variant = 'solid',
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GlueStackButton
      w={'$full'}
      h={48}
      bg={variant === 'solid' ? '$lightBlueDefault' : '$gray500'}
      borderWidth={0}
      rounded={'$md'}
      $active-bg={variant === 'solid' ? "$lightBlue900" : "$gray400"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text
          color={variant === 'solid' ? '$gray700' : '$gray200'}
          fontFamily="$heading"
        >
          {title}
        </Text>
      )}
    </GlueStackButton>
  )
}

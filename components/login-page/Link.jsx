import { chakra, useColorModeValue } from '@chakra-ui/system'
import * as React from 'react'

export const Link = (props) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('green.500', 'green.200')}
    _hover={{
      color: useColorModeValue('green.600', 'green.300'),
    }}
    display={{
      base: 'block',
      sm: 'inline',
    }}
    {...props}
  />
)

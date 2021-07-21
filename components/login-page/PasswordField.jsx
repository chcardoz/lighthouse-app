import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  FormErrorMessage,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const PasswordField = React.forwardRef(({field,form}, ref) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)

  const onClickReveal = () => {
    onToggle()
    const input = inputRef.current

    if (input) {
      input.focus({
        preventScroll: true,
      })
      const length = input.value.length * 2
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length)
      })
    }
  }

  return (
    <FormControl isInvalid={form.errors.password && form.touched.password}>
      <Flex justify="space-between">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Box as="a" color={mode('green.600', 'green.200')} fontWeight="semibold" fontSize="sm">
          Forgot Password?
        </Box>
      </Flex>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          {...field}
          ref={mergeRef}
          id="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          placeholder="password"
          required
        />
      </InputGroup>
      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
    </FormControl>
  )
})
PasswordField.displayName = 'PasswordField'

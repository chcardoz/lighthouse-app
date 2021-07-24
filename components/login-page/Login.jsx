import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../lib/auth';
import { Card } from './Card';
import { DividerWithText } from './DividerWithText';
import { Link } from './Link';
import { LoginForm } from './LoginForm';
import '@fontsource/stoke';

export const Login = () => {
  const auth = useAuth();
  return (
    <Box
      bg={useColorModeValue('green.700', 'inherit')}
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Box rounded="lg" maxW="md" mx="auto">
        <Heading color="white" textAlign="center" size="2xl" fontFamily="Stoke">
          LIGHTHOUSE
        </Heading>
        <Text
          color="whitesmoke"
          mt="4"
          mb="8"
          align="center"
          maxW="md"
          fontWeight="medium"
        >
          <Text as="span">Sign in to your account or sign up</Text>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={2} spacing="3">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={async () => {
                await auth.signinWithGoogle('/dashboard');
              }}
            >
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle color="white" />
            </Button>
            <Button colorScheme="blackAlpha" variant="solid">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub color="white" />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
};

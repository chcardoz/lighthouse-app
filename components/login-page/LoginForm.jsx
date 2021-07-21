import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { PasswordField } from './PasswordField';
import { Form, Formik, Field } from 'formik';
import { useAuth } from '../../lib/auth';

export const LoginForm = () => {
  const toast = useToast();
  const auth = useAuth();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await auth.signinWithEmail(values.email, values.password).catch((e) => {
          const message = e.message;
          toast({
            title: 'An error occured',
            description: message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        });
        setSubmitting(false);
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        isSubmitting,
        validateForm,
        setSubmitting,
      }) => (
        <Form>
          <Stack spacing="6">
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.password}
                >
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    {...field}
                    onChange={handleChange}
                    id="email"
                    placeholder="email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => <PasswordField field={field} form={form} />}
            </Field>

            <Button
              isLoading={isSubmitting}
              loadingText="Please wait..."
              type="submit"
              colorScheme="green"
              size="lg"
              fontSize="md"
            >
              Sign in
            </Button>
            <Button
              isLoading={isSubmitting}
              loadingText="Please wait..."
              onClick={async () => {
                await auth
                  .signupWithEmail(values.email, values.password)
                  .catch((e) => {
                    const message = e.message;
                    toast({
                      title: 'An error occured',
                      description: message,
                      status: 'error',
                      duration: 9000,
                      isClosable: true,
                    });
                  });
                setSubmitting(false);
              }}
              colorScheme="green"
              variant="outline"
              size="lg"
              fontSize="md"
              isDisabled={(values.email === '') | (values.pass === '')}
            >
              Sign Up
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

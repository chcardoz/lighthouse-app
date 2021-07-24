import { Avatar, Button, Heading, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import { Card } from '../components/login-page/Card';
import { useAuth } from '../lib/auth';

export default function ProfilePage() {
  const auth = useAuth();
  return (
    <Layout>
      <Card>
        <Heading mb={6}>Profile</Heading>
        <Stack spacing={2}>
          <Avatar
            name={auth?.user?.email}
            size="2xl"
            src={auth?.user?.photoUrl}
          />
          <Heading as="h5">{auth?.user?.name}</Heading>
          <Text>
            <b>User ID: </b>
            {auth?.user?.uid}
          </Text>
          <Text>
            <b>Email: </b>
            {auth?.user?.email}
          </Text>
          <Text>
            <b>Accounted created using: </b>
            {auth?.user?.provider}
          </Text>
          <Button
            onClick={async () => {
              await auth.signout();
            }}
            colorScheme="red"
            maxW="xs"
          >
            Sign Out
          </Button>
        </Stack>
      </Card>
    </Layout>
  );
}

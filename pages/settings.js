import Layout from '../components/layout/Layout';
import { Heading } from '@chakra-ui/react';
import { Card } from '../components/login-page/Card';

export default function Settings() {
  return (
    <Layout>
      <Card>
        <Heading as="h1">Settings</Heading>
      </Card>
    </Layout>
  );
}

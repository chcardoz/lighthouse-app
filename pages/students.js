import { Heading } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import StudentSearch from '../components/StudentSearch';
import StudentTable from '../components/StudentTable';
import { Card } from '../components/login-page/Card';

export default function Students() {
  return (
    <Layout>
      <Card>
        <Heading mb={3}>Students</Heading>
        <StudentSearch />
        <StudentTable />
      </Card>
    </Layout>
  );
}

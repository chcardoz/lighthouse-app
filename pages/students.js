import { Heading } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import StudentSearch from '../components/StudentSearch';
import StudentTable from '../components/StudentTable';

export default function Students() {
  return (
    <Layout>
      <Heading mb={3}>Students</Heading>
      <StudentSearch />
      <StudentTable />
    </Layout>
  );
}

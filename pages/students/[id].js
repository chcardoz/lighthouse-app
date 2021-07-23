import {
  Avatar,
  Badge,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Indicators from '../../components/Indicators';
import Layout from '../../components/layout/Layout';
import StudentTabs from '../../components/StudentTabs';
import { students } from '../../mock-data/students';

export default function StudentPage() {
  const router = useRouter();

  const { id } = router.query;
  const studentObject = students.find((s) => s.student_id === parseInt(id));
  let sum = 0;
  let average = null;
  for (const grade in studentObject?.grades) {
    sum += studentObject?.grades[grade];
  }
  if (studentObject?.grades) {
    average = sum / Object.keys(studentObject.grades).length;
  }

  return (
    <Layout>
      <Stack
        borderRadius="lg"
        borderWidth="1px"
        bg="white"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        p={6}
        mb={4}
      >
        <Stack spacing={2}>
          <Avatar size="2xl" src={studentObject?.photo} />
          <Heading>{studentObject?.name}</Heading>
          <Text>
            <b>Student ID:</b>
            {id}
          </Text>

          <Text>{studentObject?.year}</Text>
          <Badge variant="solid" maxW="80px" colorScheme="green">
            On Track
          </Badge>
          <Stack isInline justifyContent="space-between">
            <IconButton aria-label="icon" icon="copy" />
            <IconButton aria-label="icon" icon="copy" />
            <IconButton aria-label="icon" icon="copy" />
            <IconButton aria-label="icon" icon="copy" />
          </Stack>
        </Stack>
        <Indicators studentObject={studentObject} average={average} />
      </Stack>
      <StudentTabs studentObject={studentObject} />
    </Layout>
  );
}

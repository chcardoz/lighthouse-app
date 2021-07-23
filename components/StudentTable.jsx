import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { students } from '../mock-data/students';

export default function StudentTable() {
  const router = useRouter();
  return (
    <Table size="md" colorScheme="green" bg="white">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Name</Th>
          <Th>Year</Th>
          <Th>Grades</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {students.map((s) => (
          <Tr key={s.student_id}>
            <Td>
              <Avatar src={s.photo} />
            </Td>
            <Td>{s.name}</Td>
            <Td>{s.year}</Td>
            <Td>{s.grades.english}</Td>
            <Td>
              <Button onClick={() => router.push(`/students/${s.student_id}`)}>
                Profile
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

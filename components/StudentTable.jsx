import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Button,
  Badge,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { students } from '../mock-data/students';
import { useSearch } from '../utils/search';

const badgeColors = {
  ON_TRACK: 'green',
  WARNING: 'orange',
  DANGER: 'red',
};

export default function StudentTable() {
  const router = useRouter();
  const search = useSearch();
  return (
    <Table size="md" colorScheme="green" bg="white">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Name</Th>
          <Th>Year</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {search.filteredStudent.map((s) => (
          <Tr key={s.student_id}>
            <Td>
              <Avatar src={s.photo} />
            </Td>
            <Td>{s.name}</Td>
            <Td>{s.year}</Td>
            <Td>
              <Badge
                variant="solid"
                maxW="80px"
                colorScheme={badgeColors[s.status]}
              >
                {s.status}
              </Badge>
            </Td>
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

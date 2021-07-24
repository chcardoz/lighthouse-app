import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useSearch } from '../utils/search';

export default function StudentSearch() {
  const search = useSearch();

  return (
    <Flex maxW="600px" alignItems="center" justifyContent="space-around" p={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiSearch} color="gray.400" />}
        />
        <Input
          bg="white"
          type="tel"
          placeholder="Search for students"
          onChange={search.FilterStudents}
        />
      </InputGroup>
    </Flex>
  );
}

import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

export default function StudentSearch() {
  return (
    <Flex maxW="600px" alignItems="center" justifyContent="space-around" p={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiSearch} color="gray.400" />}
        />
        <Input bg="white" type="tel" placeholder="Search for students" />
      </InputGroup>
      <Menu>
        <MenuButton
          colorScheme="green"
          ml={3}
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Filters
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

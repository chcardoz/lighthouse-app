import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Indicators({ studentObject, average }) {
  return (
    <Stack isInline spacing={6}>
      <Popover>
        <PopoverTrigger>
          <Flex alignItems="center" borderRadius="2xl" borderWidth="5px" p={5}>
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '5xl' }}>
              {studentObject?.attendance}%
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Attendance</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex alignItems="center" borderRadius="2xl" borderWidth="5px" p={5}>
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '5xl' }}>
              {studentObject?.behavior}
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Behavioral remarks</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex alignItems="center" borderRadius="2xl" borderWidth="5px" p={5}>
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '5xl' }}>
              {studentObject?.suspensions}
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Suspensions</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex alignItems="center" borderRadius="2xl" borderWidth="5px" p={5}>
            <Text fontWeight="bold" fontSize={{ base: 'lg', md: '5xl' }}>
              {studentObject?.ep ? 'Proficient' : 'Not Proficient'}
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>English Proficiency</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex alignItems="center" borderRadius="2xl" borderWidth="5px" p={5}>
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '5xl' }}>
              {average?.toFixed(2)}
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Average GPA</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button colorScheme="blue">Button</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Stack>
  );
}

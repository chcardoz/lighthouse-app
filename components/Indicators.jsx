import {
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';

const statusIcons = {
  ON_TRACK: FaCheckCircle,
  WARNING: MdWarning,
  DANGER: CgDanger,
};

const statusColors = {
  ON_TRACK: 'green',
  WARNING: 'orange',
  DANGER: 'red',
};

export default function Indicators({ studentObject }) {
  return (
    <Stack pt={{ base: 5, md: 0 }} isInline spacing={6}>
      <Popover>
        <PopoverTrigger>
          <Flex
            direction="column"
            alignItems="center"
            borderRadius="2xl"
            borderWidth="5px"
            borderColor={statusColors[studentObject?.attendanceStatus]}
            p={5}
          >
            <Icon
              fontSize="3xl"
              as={statusIcons[studentObject?.attendanceStatus]}
            />
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
              <Text>
                <b>Days Attended:</b> {(studentObject?.attendance / 100) * 180}
              </Text>
              <Text>
                <b>Days Missed: </b>{' '}
                {(1 - studentObject?.attendance / 100) * 180}
              </Text>
            </PopoverBody>
            <PopoverFooter>
              <Button colorScheme="green">See how you can help</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex
            direction="column"
            borderColor={statusColors[studentObject?.behaviorStatus]}
            alignItems="center"
            borderRadius="2xl"
            borderWidth="5px"
            p={5}
          >
            <Icon
              fontSize="3xl"
              as={statusIcons[studentObject?.behaviorStatus]}
            />
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
            <PopoverBody></PopoverBody>
            <PopoverFooter>
              <Button colorScheme="green">See how you can help</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex
            direction="column"
            borderColor={statusColors[studentObject?.behaviorStatus]}
            alignItems="center"
            borderRadius="2xl"
            borderWidth="5px"
            p={5}
          >
            <Icon
              fontSize="3xl"
              as={statusIcons[studentObject?.behaviorStatus]}
            />
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
            <PopoverBody></PopoverBody>
            <PopoverFooter>
              <Button colorScheme="green">See how you can help</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex
            direction="column"
            borderColor={statusColors[studentObject?.epStatus]}
            alignItems="center"
            borderRadius="2xl"
            borderWidth="5px"
            p={5}
          >
            <Icon fontSize="3xl" as={statusIcons[studentObject?.epStatus]} />
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
              <Text>
                {studentObject?.ep
                  ? 'This student is proficient in the English language'
                  : 'This student is not proficient in the English language'}
              </Text>
            </PopoverBody>
            <PopoverFooter>
              {!studentObject?.ep && (
                <Button colorScheme="green">See how you can help</Button>
              )}
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Flex
            direction="column"
            borderColor={statusColors[studentObject?.gpaStatus]}
            alignItems="center"
            borderRadius="2xl"
            borderWidth="5px"
            p={5}
          >
            <Icon fontSize="3xl" as={statusIcons[studentObject?.gpaStatus]} />
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '5xl' }}>
              {studentObject?.averageGPA?.toFixed(2)}
            </Text>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Average GPA</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Text>
                <b>Math:</b> {studentObject?.grades.math}
              </Text>
              <Text>
                <b>English:</b> {studentObject?.grades.english}
              </Text>
              <Text>
                <b>Business:</b> {studentObject?.grades.business}
              </Text>
            </PopoverBody>
            <PopoverFooter>
              <Button colorScheme="green">See how you can help</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </Stack>
  );
}

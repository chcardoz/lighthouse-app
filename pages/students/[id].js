import {
  Avatar,
  Badge,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Indicators from '../../components/Indicators';
import Layout from '../../components/layout/Layout';
import StudentTabs from '../../components/StudentTabs';
import {
  MdEmail,
  MdEvent,
  MdNoteAdd,
  MdSms,
  MdVideoCall,
} from 'react-icons/md';
import { useSearch } from '../../utils/search';

const badgeColors = {
  ON_TRACK: 'green',
  WARNING: 'orange',
  DANGER: 'red',
};

export default function StudentPage() {
  const router = useRouter();
  const search = useSearch();

  const { id } = router.query;
  const studentObject = search.allStudents.find(
    (s) => s.student_id === parseInt(id)
  );

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
            <b>Student ID: </b>
            {id}
          </Text>

          <Text>{studentObject?.year}</Text>
          <Badge
            variant="solid"
            maxW="80px"
            colorScheme={badgeColors[studentObject?.status]}
          >
            {studentObject?.status}
          </Badge>
          <Stack pt={5} isInline spacing={4}>
            <Tooltip label="Start a video call">
              <IconButton
                aria-label="zoom"
                variant="solid"
                colorScheme="green"
                fontSize={35}
                size="lg"
                icon={<MdVideoCall />}
              />
            </Tooltip>

            <Tooltip label="Schedule a meeting">
              <IconButton
                aria-label="meetings"
                variant="solid"
                colorScheme="green"
                fontSize={35}
                size="lg"
                icon={<MdEvent />}
              />
            </Tooltip>

            <Tooltip label="Send a text">
              <IconButton
                aria-label="text"
                variant="solid"
                colorScheme="green"
                fontSize={35}
                size="lg"
                icon={<MdSms />}
              />
            </Tooltip>

            <Tooltip label="Send an email">
              <IconButton
                aria-label="text"
                variant="solid"
                colorScheme="green"
                fontSize={35}
                size="lg"
                icon={<MdEmail />}
              />
            </Tooltip>
            <Tooltip label="Add a note">
              <IconButton
                aria-label="note"
                variant="solid"
                colorScheme="green"
                fontSize={35}
                size="lg"
                icon={<MdNoteAdd />}
              />
            </Tooltip>
          </Stack>
        </Stack>
        <Indicators studentObject={studentObject} />
      </Stack>
      <StudentTabs studentObject={studentObject} />
    </Layout>
  );
}

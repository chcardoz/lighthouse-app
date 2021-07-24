import { Box, Icon, Link } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { Card } from '../components/login-page/Card';

export default function MeetingCard({ meeting }) {
  return (
    <Card mb={2} key={meeting.student_id} maxW="5xl" overflow="hidden">
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
        >
          {meeting.title}
        </Box>
        <Box>
          <b>Start time: </b>
          {meeting.start.toISOString()}
        </Box>
        <Box>
          <b>End time: </b>
          {meeting.end.toISOString()}
        </Box>
        <Link href="https://zoom.com" isExternal>
          Zoom link <Icon as={FiExternalLink} mx="2px" />
        </Link>
      </Box>
    </Card>
  );
}

import { Box } from '@chakra-ui/react';
import { Card } from '../components/login-page/Card';

export default function NoteCard({ note }) {
  return (
    <Card mb={2} key={note.student_id} maxW="5xl" overflow="hidden">
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
        >
          {note.title}
        </Box>
        <Box as="h5" fontWeight="semibold">
          {note.created}
        </Box>
        <Box>{note.content}</Box>
      </Box>
    </Card>
  );
}

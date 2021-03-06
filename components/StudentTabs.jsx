import {
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { meetings } from '../public/mock-data/meetings';
import { notes } from '../public/mock-data/notes';
import MeetingCard from './MeetingCard';
import NoteCard from './NoteCard';

export default function StudentTabs({ studentObject }) {
  const router = useRouter();

  const { id } = router.query;
  const studentNotes = notes.filter((n) => n.student_id === parseInt(id));
  const studentMeetings = meetings.filter((m) => m.studentID === parseInt(id));

  return (
    <Tabs
      borderRadius="lg"
      borderWidth="1px"
      bg="white"
      variant="enclosed"
      colorScheme="green"
    >
      <TabList>
        <Tab>Student Details</Tab>
        <Tab>Notes</Tab>
        <Tab>Courses</Tab>
        <Tab>Meetings</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={5}>
            <ListItem>
              <b>District No:</b> {studentObject?.district_id}
            </ListItem>
            <ListItem>
              <b>School No:</b> {studentObject?.school_id}
            </ListItem>
            <ListItem>
              <b>Counselor Name:</b> {studentObject?.counselor}
            </ListItem>
            <ListItem>
              <b>Address:</b> {studentObject?.address}
            </ListItem>
            <ListItem>
              <b>Phone:</b> {studentObject?.phone_no}
            </ListItem>
            <ListItem>
              <b>Email:</b> {studentObject?.email}
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          {studentNotes.map((note) => {
            return <NoteCard note={note} />;
          })}
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          {studentMeetings.map((meeting) => {
            return <MeetingCard meeting={meeting} />;
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

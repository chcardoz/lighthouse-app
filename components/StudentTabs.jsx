import {
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

export default function StudentTabs({ studentObject }) {
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
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

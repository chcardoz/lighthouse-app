import {
  Heading,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Layout from '../components/layout/Layout';
import { Card } from '../components/login-page/Card';
import { data, data1, data2, data3 } from '../mock-data/chartdata';
import { useSearch } from '../utils/search';

export default function Dashboard() {
  const router = useRouter();
  const search = useSearch();
  const fallingBehind = search.allStudents.filter(
    (student) => student.status === 'WARNING'
  );
  const onTrack = search.allStudents.filter(
    (student) => student.status === 'ON_TRACK'
  );
  const critical = search.allStudents.filter(
    (student) => student.status === 'DANGER'
  );
  return (
    <Layout>
      <Card mb={4}>
        <Heading mb={3}>Dashboard</Heading>
        <StatGroup>
          <Stat
            onClick={() => {
              router.push('/students');
            }}
          >
            <StatLabel>Total Students</StatLabel>
            <StatNumber>{search.allStudents.length}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>On Track to Graduation</StatLabel>
            <StatNumber>{onTrack.length}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Falling Behind</StatLabel>
            <StatNumber>{fallingBehind.length}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Critical</StatLabel>
            <StatNumber>{critical.length}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Card>

      <SimpleGrid minChildWidth="300px" columns={2} spacing={4}>
        <Card maxH="600px">
          <Doughnut data={data} />
        </Card>
        <Card maxH="600px">
          <Line data={data1} options={{ maintainAspectRatio: false }} />
        </Card>
        <Card maxH="600px">
          <Bar data={data2} />
        </Card>
        <Card maxH="600px">
          <Bar data={data3} />
        </Card>
      </SimpleGrid>
    </Layout>
  );
}

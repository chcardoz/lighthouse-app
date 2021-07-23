import Layout from '../components/layout/Layout';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { data, data1, data2, data3 } from '../mock-data/chartdata';
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { Card } from '../components/login-page/Card';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  return (
    <Layout>
      <Heading mb={3}>Dashboard</Heading>
      <Card mb={4}>
        <StatGroup>
          <Stat
            onClick={() => {
              router.push('/students');
            }}
          >
            <StatLabel>Total Students</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
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

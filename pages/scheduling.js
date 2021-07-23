import { Calendar, momentLocalizer } from 'react-big-calendar';
import Layout from '../components/layout/Layout';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { meetings } from '../mock-data/meetings';
import { Card } from '../components/login-page/Card';

export default function Scheduling() {
  const localizer = momentLocalizer(moment);
  return (
    <Layout>
      <Card>
        <Calendar
          localizer={localizer}
          events={meetings}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 1000 }}
        />
      </Card>
    </Layout>
  );
}

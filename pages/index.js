import { Login } from '../components/login-page/Login';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lighthouse</title>
      </Head>
      <Login />
    </div>
  );
}

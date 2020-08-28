import Head from 'next/head'
import Button from '../components/Button'
import Badge from '../components/Badge'
import StatusDot from '../components/StatusDot'

function Home(){
  
  return (
    <div>
      <Head>
        <title>Vercel Components</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Button text="Action" type="primary" shadow="true"/>
      <Badge text="Updated" type="warning"/>
      <StatusDot color="cyan" label="Queued" ></StatusDot>
    </div>
  );

}

export default Home;

import Head from 'next/head'
import Button from '../components/Button'

function Home(){
  return (
    <div>
      <Head>
        <title>TailwindCSS Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Button text="Action" type="primary" shadow="true"/>
    </div>
  )

}

export default Home;

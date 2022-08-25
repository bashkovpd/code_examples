import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { Heading } from '../styles/Utils.styles';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      {/* TODO: Set tag as 'section' */}
      <Heading size="md">
        <p>
          [Your Self Introduction]
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </Heading>
    </Layout>
    
  )
}

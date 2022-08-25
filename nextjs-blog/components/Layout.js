import Head from 'next/head';
import Link from 'next/link';
import { Heading } from '../styles/Utils.styles';
import { BackToHome, Container, Header, HeaderImage, HeadingLink } from './Layout.styles';

const name = 'Pavel Bashkov';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
      {home ? (
          <>
            <HeaderImage
              src="/images/profile.jpg"
              alt={name}
            />
            {/* TODO: Set tag as 'h1' */}
            <Heading size="2xl">
              {name}
            </Heading>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImage
                  src="/images/profile.jpg"
                  alt={name}
                />
              </a>
            </Link>
            <Heading size="lg">
              <Link href="/">
                <HeadingLink>
                  {name}
                </HeadingLink>
              </Link>
            </Heading>
          </>
        )}
      </Header>
      <main>
        {children}
      </main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  );
}

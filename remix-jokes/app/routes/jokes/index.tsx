import { FC } from 'react';
import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import type { Joke } from '@prisma/client';
import { db } from '~/utils/db.server';

type LoaderData = { randomJoke: Joke };

export const loader: LoaderFunction = async ({ params }) => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  const data: LoaderData = { randomJoke };

  return data;
};

const JokesIndexRoute: FC = () => {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>
        "{data.randomJoke.name}" Permalink
      </Link>
    </div> 
  );
}

export default JokesIndexRoute;
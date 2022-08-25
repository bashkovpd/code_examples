import { rest, RequestHandler } from 'msw';

export const handlers: RequestHandler[] = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Chocolate',
          imageURL: '/images/chocolate.png',
        },
        {
          name: 'Vanilla',
          imageURL: '/images/vanilla.png',
        },
      ])
    );
  }),
];

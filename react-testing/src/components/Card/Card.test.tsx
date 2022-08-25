import { render, screen } from '@testing-library/react';
import { CardList } from '../CardList';

describe('Card', () => {
  beforeEach(() => {
    render(<CardList type="scoops" />);
  });

  test('Displays image for each scoop option from server', async () => {
    const cardImages = (await screen.findAllByRole(
      'img'
    )) as HTMLImageElement[];

    expect(cardImages).toHaveLength(2);

    const altText = cardImages.map((element) => element.alt);

    expect(altText).toEqual(['Chocolate', 'Vanilla']);
  });
});

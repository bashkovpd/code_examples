import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form.component';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  describe('Terms and conditions', () => {
    let checkbox: HTMLElement;
    let submitButton: HTMLElement;

    beforeEach(() => {
      checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
      });
      submitButton = screen.getByRole('button', { name: /confirm order/i });
    });

    test('Initial state', () => {
      expect(checkbox).not.toBeChecked();
    });

    test('Checkbox enables button on first click and disables on second click', () => {
      userEvent.click(checkbox);

      expect(submitButton).toBeEnabled();

      userEvent.click(checkbox);

      expect(submitButton).toBeDisabled();
    });

    test('Popover respons to hover', async () => {
      // Popover starts out hidden
      let popover = screen.queryByText(
        /no ice cream will actually be delivered/i,
      );

      expect(popover).not.toBeInTheDocument();

      // Popover appears upon mouseover of checkbox label
      const termsAndConditions = screen.getByText(/terms and conditions/i);

      userEvent.hover(termsAndConditions);

      popover = screen.queryByText(/no ice cream will actually be delivered/i);

      expect(popover).toBeInTheDocument();

      // Popover disappears when we mouse out
      userEvent.unhover(termsAndConditions);

      // TODO: Check function docs for expect understanding
      await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i),
      );

      expect(popover).not.toBeInTheDocument();
    });
  });
});

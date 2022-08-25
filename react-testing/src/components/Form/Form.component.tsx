import React, { FC, useState } from 'react';
import FormUI from 'react-bootstrap/Form';
import ButtonUI from 'react-bootstrap/Button';
import PopoverUI from 'react-bootstrap/Popover';
import OverlayTriggerUI from 'react-bootstrap/OverlayTrigger';

const Form: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <PopoverUI id="popover-basic">
      <PopoverUI.Content>
        No ice cream will actually be delivered
      </PopoverUI.Content>
    </PopoverUI>
  );

  const checkboxLabel = (
    <span>
      I agree to{' '}
      <OverlayTriggerUI placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTriggerUI>
    </span>
  );

  return (
    <FormUI>
      <FormUI.Group controlId="terms-and-conditions">
        <FormUI.Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </FormUI.Group>
      <ButtonUI variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </ButtonUI>
    </FormUI>
  );
};

export { Form };
